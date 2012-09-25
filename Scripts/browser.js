// checks if the browser is allowed for SBAC
function isBrowserAllowed() 
{
	//=================================================
	// browser detection
	//=================================================
	var browser = $.browser;
	var layout = $.layout;
	var os = $.os;
	
	var browserAllowed = false;
	var browserVersionHasMultipleDecimals = false;

	if(browser.version.substr(0,browser.version.indexOf('.',browser.version.indexOf('.')+1))) {
		//alert('There are multiple decimals in the browser version.');
		browserVersionHasMultipleDecimals = true;
	}
	
	//==================================================================================================
	// BROWSER DETECTION
	//==================================================================================================
	switch(browser.name) {
		
		//-------------------------------------------------
		// Google Chrome
		//-------------------------------------------------
		case 'chrome':
			browserAllowed = true;
			var versionChromeResolved = parseFloat(browser.version.substr(0,browser.version.indexOf('.')));
			//alert ('versionChromeResolved: '+versionChromeResolved);
			
			//-------------------------------------------------
			// Detect Linux kernel (Android )
			//-------------------------------------------------
			if(os.name=="linux") {
				if(versionChromeResolved>=18) { // <-- Set the proper minimum browser version number
					browserAllowed = true;
				}
				else {
					browserAllowed = false;
				}
			}
			//-------------------------------------------------
			// Non-Linux (i.e. Mac, Windows, etc. )
			//-------------------------------------------------
			else {
				if(versionChromeResolved>=20) { // <-- Set the proper minimum browser version number
					browserAllowed = true;
				}
				else {
					browserAllowed = false;
				}
			}
			break;
			
		//-------------------------------------------------
		// Apple Safari
		//-------------------------------------------------
		case 'safari':
			browserAllowed = true;
			var versionSafariResolved = parseFloat(browser.version);
			if(browserVersionHasMultipleDecimals) {
				versionSafariResolved = parseFloat(browser.version.substr(0,browser.version.indexOf('.',browser.version.indexOf('.')+1)));
			}
			//alert ('versionSafariResolved: '+versionSafariResolved);
		
			//-------------------------------------------------
			// Detect non-Mac & non-Windows Safari intallations
			//-------------------------------------------------
			if( (os.name!="mac") && (os.name!="win") ) {
				//-------------------------------------------------
				// Safari on Android [?!?]
				//-------------------------------------------------
				if(os.name=="linux") {
					//alert("Are you using Android?");
					if(versionSafariResolved>=4.0) { // <-- Set the proper minimum browser version number
						browserAllowed = true;
					}
					else {
						browserAllowed = false;
					}
				}
				//-------------------------------------------------
				// Safari on iOS [iPhone, iPad, iPodTouch]
				//-------------------------------------------------
				else {
					//alert("You are using an iOS mobile device.");
					if(versionSafariResolved>=5.0) { // <-- Set the proper minimum browser version number
						browserAllowed = true;
					}
					else {
						browserAllowed = false;
					}
				}
			}
			//-------------------------------------------------
			// MacOS
			//-------------------------------------------------
			else {
				//alert("You are using a Mac.");
				if(versionSafariResolved>=4.1) { // <-- Set the proper minimum browser version number
					browserAllowed = true;
				}
				else {
					browserAllowed = false;
				}
			}
			break;
			
		//-------------------------------------------------
		// Microsoft Internet Explorer
		//-------------------------------------------------
		case 'msie':
			browserAllowed = true;
			var versionMSIEResolved = parseFloat(browser.version);
			if(browserVersionHasMultipleDecimals) {
				versionMSIEResolved = parseFloat(browser.version.substr(0,browser.version.indexOf('.',browser.version.indexOf('.')+1)));
			}
			//alert ('versionMSIEResolved: '+versionMSIEResolved);
			if(versionMSIEResolved>=8) { // <-- Set the proper minimum browser version number
				browserAllowed = true;
			}
			else {
				browserAllowed = false;
			}
			break;
			
		//-------------------------------------------------
		// Mozilla Firefox
		//-------------------------------------------------
		case 'firefox':
			browserAllowed = true;
			var versionFirefoxResolved = parseFloat(browser.version);
			if(browserVersionHasMultipleDecimals) {
				versionFirefoxResolved = parseFloat(browser.version.substr(0,browser.version.indexOf('.',browser.version.indexOf('.')+1)));
			}
			//alert ('versionFirefoxResolved: '+versionFirefoxResolved);
			if(versionFirefoxResolved>=3.6) { // <-- Set the proper minimum browser version number
				browserAllowed = true;
			}
			else {
				browserAllowed = false;
			}
			break;
		
		//-------------------------------------------------
		// Default
		//-------------------------------------------------
		default:
			browserAllowed = false;
			break;
	}
	
	//==================================================================================================
	// Show output in HTML
	//==================================================================================================
	// var browserOutput = "browser: " + JSON.stringify(browser) + "\n=======\n" + "layout: " + JSON.stringify(layout) + "\n=======\n" + "os: " + JSON.stringify(os);

	//alert('browserOutput: '+browserOutput);
	// $("#browserOutput").html('<pre>browserOutput:<br>'+browserOutput+'</pre>');
	
	//alert('browserAllowed: '+browserAllowed);
	// $("#browserAllowed").html('<pre>browserAllowed: '+browserAllowed+'</pre>');
	
	//==================================================================================================
	// Return: true | false
	//==================================================================================================
	return browserAllowed;
	//==================================================================================================
}

// show a message if the browser is not allowed
$(document).ready(function()
{
	if (!isBrowserAllowed())
	{
		$('body').addClass('blockedBrowser');
	}
});