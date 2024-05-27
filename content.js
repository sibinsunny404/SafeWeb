// This script will be injected into every webpage to display warnings if necessary

// Function to display a warning banner
function displayWarningBanner(url) {
    // Create a banner div
    const warningBanner = document.createElement('div');
    warningBanner.style.position = 'fixed';
    warningBanner.style.top = '0';
    warningBanner.style.left = '0';
    warningBanner.style.width = '100%';
    warningBanner.style.backgroundColor = '#ff4d4d'; // Red background for warning
    warningBanner.style.color = 'white';
    warningBanner.style.zIndex = '10000';
    warningBanner.style.textAlign = 'center';
    warningBanner.style.fontSize = '20px';
    warningBanner.style.fontWeight = 'bold';
    warningBanner.style.padding = '10px';
    warningBanner.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    warningBanner.innerText = `⚠️WARNING: ${url} is detected as malicious!`;
  
    // Create a close button
    const closeButton = document.createElement('span');
    closeButton.innerText = 'X';
    closeButton.style.marginLeft = '20px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => {
      warningBanner.style.display = 'none';
    };
  
    // Append close button to the banner
    warningBanner.appendChild(closeButton);
  
    // Append the banner to the body
    document.body.appendChild(warningBanner);
  }
  
  // Listen for messages from the background script
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'showWarning' && message.url) {
      displayWarningBanner(message.url);
    }
  });
  