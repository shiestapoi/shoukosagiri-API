require("./settings");
const express = require("express");
const app = express();
const favicon = require("serve-favicon");
const path = require("path");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const MemoryStore = require("memorystore")(expressSession);
const passport = require("passport");
require("./controller/passportLocal")(passport);
const flash = require("connect-flash");
const csrf = require("csurf");
const cron = require("node-cron");
const bodyParser = require("body-parser");
const User = require("./model/user");
const dataweb = require("./model/DataWeb");
const payment = require("./model/midtrans");
const Midtrans = require("midtrans-client");
const multer = require("multer");

// Konfigurasi multer untuk menangani upload file
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const snap = new Midtrans.Snap({
  clientKey: midtrans_client_key,
  serverKey: midtrans_server_key,
  isProduction: false, // Ganti menjadi true jika sudah di production
});
//_______________________ ┏ Funtion ┓ _______________________\\

/*
async function resetapi() {
  await User.updateMany({}, { $set: { limitApikey: LimitApikey } });
  console.log("RESET LIMIT DONE");
}
*/
async function findAndModifyUserTier(email, tier, limitapikey) {
  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      foundUser.tier = tier;
      foundUser.limitApikey = limitapikey;
      foundUser.expiredtier = 30;
      await foundUser.save();
      console.log(
        `Tier pengguna dengan email ${email} telah diubah menjadi ${tier}`
      );
    } else {
      console.log(`Pengguna dengan email ${email} tidak ditemukan`);
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

async function findAndDisplayPayments() {
  try {
    const successPayments = await payment.find({ status_payment: "Success" });
    const expirePayments = await payment.find({ status_payment: "expire" });
    if (successPayments.length > 0) {
      successPayments.forEach(async (payment) => {
        try {
          if (payment.id.startsWith("1-")) {
            await findAndModifyUserTier(payment.email, "Premium", 20000);
            await payment.deleteOne({ _id: payment._id });
            console.log("Data payment telah dihapus.");
          } else if (payment.id.startsWith("2-")) {
            await findAndModifyUserTier(payment.email, "Standard", 10000);
            await payment.deleteOne({ _id: payment._id });
            console.log("Data payment telah dihapus.");
          } else {
            // nothing
          }
        } catch (error) {
          console.error("Error saat memproses data payment:", error);
        }
      });
    } else if (expirePayments.length > 0) {
      expirePayments.forEach(async (payment) => {
        try {
          // Lakukan operasi lain di sini untuk setiap entitas payment
          await findAndModifyUserTier(payment.email, null, null);

          // Hapus data pembayaran setelah selesai memproses
          await payment.deleteOne({ _id: payment._id });
          console.log("Data payment telah dihapus.");
        } catch (error) {
          console.error("Error saat memproses data payment:", error);
        }
      });
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

setInterval(findAndDisplayPayments, 3000);

async function tier() {
  try {
    const users = await User.find();
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.expiredtier < 90) {
        user.expiredtier -= 1;
        if (user.expiredtier === 0) {
          user.tier = "Free";
          user.expiredtier = 90;
          user.limitApikey = 200;
        }
        await user.save();
      }
    }

    console.log("Tier adjustment complete");
  } catch (error) {
    console.error("Error adjusting tier:", error);
  }
}
async function resetapi() {
  const limitThreshold = 200;
  const usersToUpdate = await User.find({
    limitApikey: { $lt: limitThreshold },
  });
  for (const user of usersToUpdate) {
    await User.updateOne(
      { _id: user._id },
      { $set: { limitApikey: LimitApikey } }
    );
    console.log(`RESET LIMIT DONE for user with ID ${user._id}`);
  }
}

async function ResetRequestToday() {
  await dataweb.updateOne(
    {},
    {
      RequestToday: 0,
    }
  );
  console.log("RESET Request Today DONE");
}

//_______________________ ┏ Code ┓ _______________________\\

(cors = require("cors")), (secure = require("ssl-express-www"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/tier", (req, res) => {
//   tier();
//   res.send("Tier adjustment complete");
// });
app.get("/test", async (req, res) => {
  res.json({ userid: req.user });
});

app.post("/updateprofile", upload.single("profileImage"), async (req, res) => {
  try {
    const { userid, changeusername, changeapikey } = req.body;
    const user = await User.findOne({ _id: userid });
    // Pastikan bahwa file gambar diupload

    if (!user) {
      return res.status(404).send("User tidak ditemukan.");
    }
    if (req.file) {
      user.profileImage.data = req.file.buffer;
      user.profileImage.contentType = req.file.mimetype;
    }
    if (changeusername !== user.username) {
      user.username = changeusername;
    }
    if (changeapikey !== user.apikey) {
      user.apikey = changeapikey;
    }
    await user.save();

    res.redirect("/settings");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/notification/handling", async (req, res) => {
  try {
    const paymentinfo = req.body;
    console.log(`--------------------
Payment notification received. 
Order ID: ${paymentinfo.order_id}
Transaction status: ${paymentinfo.transaction_status}
Fraud status: ${paymentinfo.fraud_status}
Paid amount: ${paymentinfo.gross_amount}
--------------------`);
    if (paymentinfo.transaction_status === "settlement") {
      const paymentData = await payment.findOne({ id: paymentinfo.order_id });
      if (paymentData) {
        await payment.updateOne(
          { id: paymentinfo.order_id },
          { status_payment: "Success" }
        );
      } else {
      }
    } else if (paymentinfo.transaction_status === "expire") {
      const paymentData = await payment.findOne({ id: paymentinfo.order_id });
      if (paymentData) {
        await payment.updateOne({ id: order_id }, { status_payment: "expire" });
      } else {
      }
    } else {
      res.status(200).send("No action taken for this transaction status");
    }
  } catch (error) {
    console.error("Error processing notification:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/handle-payment", async (req, res) => {
  try {
    const { username, email, id, productName, Price } = await req.body;
    payment({
      username: username,
      email: email,
      id: id,
      productName: productName,
      price: Price,
      status_payment: "Pending",
    }).save();
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.json({ error: error });
  }
});
app.post("/create-payment", async (req, res) => {
  try {
    const { id, productName, Price, quantity, email, username } =
      await req.body;
    let parameter = {
      transaction_details: {
        order_id: id,
        gross_amount: Price * quantity,
      },
      item_details: [
        {
          id: id,
          price: Price,
          quantity: quantity,
          name: productName,
          brand: "Shoukosagiri-API",
          category: "API",
          merchant_name: "Shoukosagiri",
          url: "http://test.swenson.my.id/pricing",
        },
      ],
      customer_details: {
        first_name: username,
        email: email,
      },
    };
    const token = await snap.createTransaction(parameter);
    res.json(token);
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Failed to create transaction" });
  }
});

//_______________________ ┏ Connect Database ┓ _______________________\\

mongoose.set("strictQuery", false);
mongoose
  .connect(keymongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected !");
    let limit = await dataweb.findOne();
    if (limit === null) {
      let obj = { RequestToday: 0 };
      await dataweb.create(obj);
      console.log("Website data create success");
    }
  });

//_______________________ ┏ CronJob For Reset Limit ┓ _______________________\\

// Reset Request Today Setiap sehari
cron.schedule(
  "0 0 * * *",
  () => {
    ResetRequestToday();
    tier();
  },
  {
    scheduled: true,
    timezone: "Asia/Jakarta",
  }
);

//Reset All User Apikey Limit setiap sehari
cron.schedule(
  "0 0 * * *",
  () => {
    resetapi();
  },
  {
    scheduled: true,
    timezone: "Asia/Jakarta",
  }
);

//Reset All User Apikey Limit setiap sebulan
/*
  cron.schedule(
    "0 0 1 * *",
    () => {
      resetapi();
    },
    {
      scheduled: true,
      timezone: "Asia/Jakarta",
    }
    );
    */

//_______________________ ┏ Code ┓ _______________________\\

app.use(cookieParser("random"));
app.use(
  expressSession({
    secret: "random",
    resave: true,
    saveUninitialized: true,
    maxAge: 24 * 60 * 60 * 1000,
    store: new MemoryStore(),
  })
);
app.use(csrf());
app.use(passport.initialize());
app.use(passport.session());
app.set("trust proxy", true);
app.set("json spaces", 2);
app.use(cors());
app.use(secure);
app.use(flash());
app.use(function (req, res, next) {
  res.locals.success_messages = req.flash("success_messages");
  res.locals.error_messages = req.flash("error_messages");
  res.locals.error = req.flash("error");
  next();
});
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
var main = require("./routes/main"),
  api = require("./routes/api");
app.set("view engine", "ejs");
app.set("views", __dirname + "/view");
app.use(express.static("public"));
app.use("/", main);
app.use("/", api);
// app.use(function (req, res, next) {
//   next(createError(404));
// });
// app.use(function (err, req, res, next) {
//   res.render("404");
// });

module.exports = app;
