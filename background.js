// background.js
chrome.runtime.onInstalled.addListener(function () {
    console.log("Crypto Tracker Extension Installed");
  });
  
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getCryptoData") {
      fetchoo(sendResponse);
      return true;  // Needed for asynchronous response
    }
  });
  
  async function fetchoo(callback) {
    try {
      let data = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=e03d33f8-7dcb-4f93-8ba0-1fd77539213d");
      let response = await data.json();
      console.log(response.data);
  
      let newdata = response.data;
  
      callback(newdata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  