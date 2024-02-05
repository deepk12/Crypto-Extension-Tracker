// popup.js
chrome.runtime.sendMessage({ action: "getCryptoData" }, function (cryptoData) {
    let cryptoContainer = document.getElementById("crypto-container");
  
    for (let i = 0; i < cryptoData.length; i++) {
      cryptoContainer.innerHTML += `
        <div class="crypto">
          <h2>${cryptoData[i].name}</h2>
          <p class="price"><b>Price-></b> $${cryptoData[i].quote.USD.price.toFixed(2)}</p>
          <p class="change"><b>Changes-></b> ${cryptoData[i].quote.USD.percent_change_24h}%</p>
        </div>`;
    }
  });
  