function onGot(historyItems) {
  for (const item of historyItems) {
    console.log(item.url);
    console.log(new Date(item.lastVisitTime));
  }
}

function test() {
    browser.history.search({ text: "" }).then(onGot);
}
