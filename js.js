const delay = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("This message appears in 2 seconds");
  }, 5000);
});

delay.then((message) => {
  console.log(message);
});
