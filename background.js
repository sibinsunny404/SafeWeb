const apiKey = 'YOUR_VIRUSTOTAL_API_KEY';

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the tab is fully loaded
  if (changeInfo.status === 'complete' && tab.url) {
    checkUrlVirusTotal(tab.url, tabId);
  }
});

function checkUrlVirusTotal(url, tabId) {
  const apiUrl = `https://www.virustotal.com/vtapi/v2/url/report?apikey=${apiKey}&resource=${url}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.positives > 0) {
        chrome.tabs.sendMessage(tabId, {
          action: 'showWarning',
          url: url
        });
      }
    })
    .catch(error => console.error('Error:', error));
}
