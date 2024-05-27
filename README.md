<!DOCTYPE html>
<body>
    <div class="container">
        <h1>SafeWeb: Browser Extension for URL Safety Check</h1>
        <p>This browser extension enhances your online security by checking the URLs of websites you visit and alerting you if they are potentially malicious. Follow the steps below to set up and use the SafeWeb extension:</p>
        <p><h5>Examine the sample or preview located in the <a href="/Demo_Samples" >Demo_Samples directory.</a></h5></p>
        <ol>
            <li class="step"><h4>Clone or Download the Repository:</h4></li>
            <p>Clone or download the project repository from GitHub to your local machine.</p>
            <li class="step"><h4>Add Your VirusTotal API Key:</h4></li>
            <p>Open <span class="code">popup.js</span> and replace <span class="code">'YOUR_VIRUSTOTAL_API_KEY'</span> with your actual VirusTotal API key.</p>
            <li class="step"><h4>Load the Extension in Your Browser:<h4></li>
            <p>Follow the steps below to load the extension in your browser:</p>
            <ul>
                <li><h4>For Google Chrome:</h4></li>
                <ol>
                    <li>Open Chrome and navigate to <span class="code">chrome://extensions/</span>.</li>
                    <li>Enable "Developer mode" by toggling the switch in the top right corner.</li>
                    <li>Click "Load unpacked" and select the directory where you cloned or downloaded the project.</li>
                </ol>
                <li><h4>For Mozilla Firefox:</h4></li>
                <ol>
                    <li>Open Firefox and navigate to <span class="code">about:debugging#/runtime/this-firefox</span>.</li>
                    <li>Click "Load Temporary Add-on".</li>
                    <li>Select any file in the directory where you cloned or downloaded the project (e.g., <span class="code">manifest.json</span>).</li>
                </ol>
            </ul>
        </ol>
        <p class="note"><h3>Note:</h3> Make sure to replace 'YOUR_VIRUSTOTAL_API_KEY' with your actual VirusTotal API key before loading the extension.</p>
    </div>
</body>
</html>
