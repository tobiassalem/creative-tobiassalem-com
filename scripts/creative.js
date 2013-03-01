var siteName = "Salem Creative";

function load(content) {
	var contentNav = "#" + content + "Nav";
	var contentFile = content + ".html";
	// Under nav, find all <li> with class 'active' and remove it
	$('nav').find('li.active').removeClass('active');
	$('nav').find(contentNav).addClass('active');
	// NOTE: callback method should be enough for prettyPhoto to worka after load of an injected page
	// WORKAROUND: have a script tag in the end of the injected page which calls postInject
	//$('#mainArea').load(contentFile, postInject());
	$('#mainArea').load(contentFile);
	document.title = siteName + " | " +content;
}

function loadSection(content, section) {
	//var contentNav = "#" + content + "Nav";
	var sectionNav = "#" + section + "Nav";
	var contentFile = content + ".html" + "#" + section;
	// Under nav, find all <li> with class 'active' and remove it
	$('nav').find('li.active').removeClass('active');
	// Find the sectionNav and select it
	$('nav').find(sectionNav).addClass('active');
	// Load the content and section
	alert('loadSection contentFile with section: ' +contentFile);
	$('#mainArea').load(contentFile);
	document.title = siteName + " | " +content;	
}

function reloadPrettyPhoto() { 
	//$("a[rel^='prettyPhoto']").prettyPhoto();
	$("a[data-gal^='prettyPhoto']").prettyPhoto({
		theme:'dark_rounded',
		social_tools : false
	});
	alert('reloaded prettyPhoto');
	return true;
}

function postInject() {
	// Needed for prettyPhoto to work after ajax load. Why is not the callback function enough?
	$("a[data-gal^='prettyPhoto']").prettyPhoto({
		theme:'dark_rounded',
		social_tools : false
	});
	//alert('postInject, reloaded prettyPhoto');
}
