function getCurrentDateTimeFormatted() {
  const currentDate = new Date();

  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  const formattedDateDays = `${day}${month}${year}`;
  const formattedDateTime = `${hours}${minutes}${seconds}${day}${month}${year}`;
  return { time: formattedDateTime, days: formattedDateDays };
}

const { time, days } = getCurrentDateTimeFormatted();

const premiumButton = document.getElementById("price-premium");

premiumButton.addEventListener("click", async function (event) {
  event.preventDefault();
  const data = {
    id: "1-" + time,
    productName: "API Premium 1 Month - " + username,
    Price: 20000,
    quantity: 1,
    email: email,
    username: username,
  };
  const response = await fetch("/create-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const handle = await fetch("/handle-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (handle.status !== 200) {
    return alert("Payment failed");
  }
  const result = await response.json();
  const { token } = result;
  window.snap.pay(token);
});
const standardButton = document.getElementById("price-standard");

standardButton.addEventListener("click", async function (event) {
  event.preventDefault();
  const data = {
    id: "2-" + time,
    productName: "API standard 1 Month - " + username,
    Price: 10000,
    quantity: 1,
    email: email,
    username: username,
  };
  const response = await fetch("/create-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const handle = await fetch("/handle-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (handle.status !== 200) {
    return alert("Payment failed");
  }
  const result = await response.json();
  const { token } = result;
  window.snap.pay(token);
});
