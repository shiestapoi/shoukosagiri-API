__path = process.cwd();

require("../settings");
const express = require("express");
const router = express.Router();
const passport = require("passport");
require("../controller/passportLocal")(passport);
const authRoutes = require("./auth");
const apiRoutes = require("./api");
const dataweb = require("../model/DataWeb");
const User = require("../model/user");
const payment = require("../model/midtrans");
const Db = require("../model/midtrans");

//_______________________ ┏ Function ┓ _______________________\\

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    res.set(
      "Cache-Control",
      "no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0"
    );
    next();
  } else {
    req.flash("error_messages", "Please Login to continue !");
    res.redirect("/login?url=" + req.originalUrl);
  }
}

async function getApikey(id) {
  let limit = await dataweb.findOne();
  let users = await User.findOne({ _id: id });
  return {
    apikey: users.apikey,
    username: users.username,
    email: users.email,
    tier: users.tier,
    expiredtier: users.expiredtier,
    checklimit: users.limitApikey,
    isVerified: users.isVerified,
    RequestToday: limit.RequestToday,
    RequestTotal: limit.RequestTotal,
  };
}

async function getTotalUsersCount() {
  try {
    const totalUsersCount = await User.countDocuments();
    return totalUsersCount;
  } catch (error) {
    console.error("Error:", error);
    return 0;
  }
}

//_______________________ ┏ Router ┓ _______________________\\

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/getuserid", async (req, res) => {
  res.json({ userid: req.user });
});

router.post("/testpost", async (req, res) => {
  res.json({ status: "success" });
});

router.get("/profile/images/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user || !user.profileImage) {
      return res.status(404).json({
        status: "error",
        error: "Gambar profil tidak ditemukan.",
      });
    }

    const contentType = user.profileImage.contentType;

    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.set("Content-Type", contentType);
    res.send(await user.profileImage.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", error: "Internal server error." });
  }
});

router.get("/docs", checkAuth, async (req, res) => {
  const totalUsers = await getTotalUsersCount();
  let getinfo = await getApikey(req.user.id);
  let {
    apikey,
    username,
    email,
    tier,
    expiredtier,
    checklimit,
    isVerified,
    RequestToday,
    RequestTotal,
  } = getinfo;
  res.render("docs", {
    username: username,
    verified: isVerified,
    email: email,
    tier: tier,
    expiredtier: expiredtier,
    apikey: apikey,
    userid: req.user.id,
    limit: checklimit,
    RequestToday: RequestToday,
    RequestTotal: RequestTotal,
    totalUsers: totalUsers,
  });
});

router.get("/pricing", checkAuth, async (req, res) => {
  const totalUsers = await getTotalUsersCount();
  let getinfo = await getApikey(req.user.id);
  let {
    apikey,
    username,
    email,
    tier,
    checklimit,
    isVerified,
    RequestToday,
    RequestTotal,
  } = getinfo;
  res.render("pricing", {
    username: username,
    verified: isVerified,
    email: email,
    tier: tier,
    apikey: apikey,
    userid: req.user.id,
    limit: checklimit,
    RequestToday: RequestToday,
    RequestTotal: RequestTotal,
    totalUsers: totalUsers,
    clientKey: midtrans_merchant_id,
  });
});

router.get("/settings", checkAuth, async (req, res) => {
  const totalUsers = await getTotalUsersCount();
  let getinfo = await getApikey(req.user.id);
  let {
    apikey,
    username,
    email,
    tier,
    expiredtier,
    checklimit,
    isVerified,
    RequestToday,
    RequestTotal,
  } = getinfo;
  res.render("settings", {
    username: username,
    verified: isVerified,
    email: email,
    userid: req.user.id,
    tier: tier,
    expiredtier: expiredtier,
    apikey: apikey,
    limit: checklimit,
    RequestToday: RequestToday,
    RequestTotal: RequestTotal,
    totalUsers: totalUsers,
  });
});

router.get("/success-payment", checkAuth, async (req, res) => {
  try {
    const { order_id, transaction_status } = req.query;
    if (transaction_status === "pending") {
      res.render("paymentpending");
    } else {
      const paymentData = await payment.findOne({ id: order_id });
      if (paymentData) {
        await payment.updateOne(
          { id: order_id },
          { status_payment: "Success" }
        );
        res.render("paymentsuccess");
      } else {
        res.redirect("/docs");
      }
    }
  } catch {
    res.json({ status: "error", error: "Something went wrong" });
  }
});

router.get("/logout", (req, res) => {
  req.logout(req.user, (err) => {
    if (err) return next(err);
    res.redirect("/login");
  });
});

router.use(authRoutes);
router.use(apiRoutes);
module.exports = router;
