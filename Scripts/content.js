function blackboxEvent(blackboxWin, name)
{
	if (name == 'ready') blackboxReady(blackboxWin);
}

function showAboutItems(page)
{
	// get items for this page
	var items = page.getItems();
	if (items.length == 0) return;
	
	var itemKey = items[0].itemKey;

	if (items.length > 1) 
	{
		itemKey += '-' + items[items.length - 1].itemKey;
	}
	
	$('#' + itemKey).addClass('showing')
}

// hide all menu items
function hideAboutItems()
{
	$('#menu-item-35 div').removeClass('showing')
}

function blackboxReady(blackboxWin)
{
	hideAboutItems();

	blackboxWin.ContentManager.onPageEvent('show', function(page, item)
	{
		showAboutItems(page);
	});

	blackboxWin.ContentManager.onPageEvent('hide', function(page, item)
	{
		hideAboutItems();
	});
	
	$('a[target="testShellFrame"]').click(function(ev)
	{
		var configFile = ev.target.href.split('config=')[1];
		frames['testShellFrame'].ItemPreview.requestConfig('data', configFile);
		return false;
	});
	
}