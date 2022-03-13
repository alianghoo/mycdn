var system = {
	win: false,
	mac: false,
	xll: false
};
var p = navigator.platform;
var us = navigator.userAgent.toLowerCase();
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
if (system.win || system.mac || system.xll) {
	var iframe_url = '//kan.yzly.cc/addons/dplayer/404.html';
	$("head").html('<meta charset="UTF-8"><meta name="referrer" content="no-referrer"><title>\u7f51\u9875\u65e0\u6cd5\u8bbf\u95ee</title><style>body{position:static !important;}body *{ visibility:hidden; }</style> ');
	$("body").empty();
	$(document).ready(function() {
		$("body").html('<iframe style="width:100%;height:55px;position:absolute;margin-left:0px;margin-top:0px;top:30%;left:0%;" id="mainFrame" src="' + iframe_url + '" frameborder="0" scrolling="no"></iframe>').show();
		$("body *").css("visibility", "visible")
	})
}
document.oncontextmenu = function(e) {
	var e = e || window.event;
	e.returnValue = false;
	return false
}
window.onkeydown = function(e) {
	if (e.ctrlKey && e.keyCode == 83) {
		alert('禁止使用ctrl+s');
		e.preventDefault();
		e.returnValue = false;
		return false
	}
}
'jQuery';