import browser from "webextension-polyfill";

console.log("Hello from the background!");

browser.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});
// chrome.action.onClicked.addListener(() => {
//   chrome.tabs.create({
//     url: "calc.html",
//   });
//   console.log("Opened a tab with a sandboxed page!");
// });
const calcJs = chrome.runtime.getURL("basic.js");
// console.log(calcJs);