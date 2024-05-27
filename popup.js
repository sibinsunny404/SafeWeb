document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('checkButton').addEventListener('click', () => {
      const url = document.getElementById('urlInput').value;
      if (url) {
        checkUrlVirusTotal(url);
      } else {
        displayResult('Please enter a URL.', 'error');
      }
    });
  });
  
  function checkUrlVirusTotal(url) {
    const apiKey = 'YOUR_VIRUSTOTAL_API_KEY'; // Replace with your actual VirusTotal API key
    const apiUrl = `https://www.virustotal.com/vtapi/v2/url/report?apikey=${apiKey}&resource=${url}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const resultDiv = document.getElementById('result');
        if (data.response_code === 1) { // Check if URL analysis is available
          let isMalicious = false;
          if (data.positives > 0) {
            isMalicious = true;
          } else {
            for (const [vendor, report] of Object.entries(data.scans)) {
              if (report.detected) {
                isMalicious = true;
                break;
              }
            }
          }
          if (isMalicious) {
            resultDiv.innerHTML = `<div style="color: red; font-weight: bold;">WARNING: ${url} is detected as malicious!</div>`;
          } else {
            resultDiv.innerHTML = `<div style="color: green; font-weight: bold;">${url} is safe.</div>`;
          }
        } else {
          resultDiv.innerHTML = `<div style="color: orange; font-weight: bold;">No analysis data available for ${url}.</div>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        displayResult('Error checking the URL. Please try again later.', 'error');
      });
  }
  
  function displayResult(message, type) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.style.color = type === 'error' ? '#d32f2f' : '#4CAF50';
  }
  