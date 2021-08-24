// JavaScript Document

<!--
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}



function openPictureWindow_Fever(imageType,imageName,imageWidth,imageHeight,alt,posLeft,posTop) {  // v4.01
	
	
	newWindow = window.open("","newWindow","width="+imageWidth+",height="+imageHeight+",scrollbars=no,left="+posLeft+",top="+posTop);
	newWindow.document.open();
	newWindow.document.write('<html><title>'+alt+'</title><body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginheight="0" marginwidth="0" onBlur="self.close()">'); 
	if (imageType == "swf"){
	newWindow.document.write('<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0\" width=\"'+imageWidth+'\" height=\"'+imageHeight+'\">');
	newWindow.document.write('<param name=movie value=\"'+imageName+'\"><param name=quality value=high>');
	newWindow.document.write('<embed src=\"'+imageName+'\" quality=high pluginspage=\"http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash\" type=\"application/x-shockwave-flash\" width=\"'+imageWidth+'\" height=\"'+imageHeight+'\">');
	newWindow.document.write('</embed></object>');	}else{
	newWindow.document.write('<img src=\"'+imageName+'\" width='+imageWidth+' height='+imageHeight+' alt=\"'+alt+'\">'); 	}
	newWindow.document.write('</body></html>');
	newWindow.document.close();
	newWindow.focus();
}

<!-- Hide from old browsers
function fullopen(name)
{
	window.open(name,'download', 'scrollbars=no,width=300,height=100,fullscreen=0');
}
function noSpam(user,domain) {
	locationstring = "mailto:" + user + "@" + domain;
	window.location = locationstring;
  } 

// Stop hiding from old browsers -->

//-->

