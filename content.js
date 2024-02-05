// content.js
chrome.runtime.sendMessage({ action: "getCryptoData" }, function (cryptoData) {
    let sec = document.createElement("div");
    sec.className = "crypto-list";
  
    for (let i = 0; i < cryptoData.length; i++) {
      sec.innerHTML += `
        <div class="crypto">
          <h2>${cryptoData[i].name}</h2>
          <p class="price">$${cryptoData[i].quote.USD.price.toFixed(2)}</p>
          <p class="change">${cryptoData[i].quote.USD.percent_change_24h}%</p>
        </div>`;
    }
  
    // Append the generated HTML to the body or another suitable location
    document.body.appendChild(sec);
  });
  