function $$(id) {
    return document.getElementById(id)
};
window.onscroll = function() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var toTop = document.getElementById("gotop");
    if (top > 100) {
        toTop.style.display = "block"
    } else {
        toTop.style.display = "none"
    }
};
var toTop = new function() {
    var Timer = null;

    function $id(id) {
        return typeof id == "string" ? document.getElementById(id) : id
    };
    this.goto = function(objName) {
        $id(objName).onclick = function() {
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            startNove();
            return false
        };
        var startNove = function() {
            if (Timer) clearInterval(Timer);
            Timer = setInterval(doMove, 10)
        };
        var doMove = function() {
            var iSpeed = 0;
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            iSpeed = (0 - top) / 30;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (Math.abs(iSpeed) < 1 && Math.abs(0 - top) < 1) {
                clearInterval(Timer);
                Timer = null
            }
            window.scrollTo(0, (top + iSpeed))
        }
    }
};
var stui = {
    'common': {
        'lazyload': function() {
            $.getScript("//cdn.jsdelivr.net/gh/frcdn/mycdn/js/jquery.lazyload.min.js", function() {
                $(".lazyload").lazyload({
                    skip_invisible: false,
					effect: "fadeIn",
                    threshold: 200,
                    failurelimit: 20,
                });
            })
        },
        'closebtn': function() {
            $(".close").click(function() {
                $("#tips").remove()
            })
        },
    }
};
function $Showhtml(){return'\x3c\x69\x66\x72\x61\x6d\x65 \x62\x6f\x72\x64\x65\x72\x3d\x22\x30\x22 \x73\x72\x63\x3d\x22\x2f\x2f\x6b\x61\x6e\x2e\x79\x7a\x6c\x79\x2e\x63\x63\x2f\x61\x64\x64\x6f\x6e\x73\x2f\x64\x70\x6c\x61\x79\x65\x72\x2f\x62\x6f\x66\x61\x6e\x67\x2e\x70\x68\x70\x3f\x75\x72\x6c\x3d'+player['\x75\x72\x6c']+'\x22 \x6d\x61\x72\x67\x69\x6e\x57\x69\x64\x74\x68\x3d\x22\x30\x22 \x66\x72\x61\x6d\x65\x53\x70\x61\x63\x69\x6e\x67\x3d\x22\x30\x22 \x6d\x61\x72\x67\x69\x6e\x48\x65\x69\x67\x68\x74\x3d\x22\x30\x22 \x66\x72\x61\x6d\x65\x42\x6f\x72\x64\x65\x72\x3d\x22\x30\x22 \x73\x63\x72\x6f\x6c\x6c\x69\x6e\x67\x3d\x22\x6e\x6f\x22 \x77\x69\x64\x74\x68\x3d\x22\x31\x30\x30\x25\x22 \x68\x65\x69\x67\x68\x74\x3d\x22\x31\x30\x30\x25\x22 \x76\x73\x70\x61\x6c\x65\x3d\x22\x30\x22 \x61\x6c\x6c\x6f\x77\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x3e\x3c\x2f\x69\x66\x72\x61\x6d\x65\x3e'};
$(document).ready(function() {
    $(".tab dd").mousemove(function(){
        $(".tab dd").removeClass("on");
        $(".content dd").addClass("none");
        $(this).toggleClass("on");
        var num=$(this).index();
        switch(num){
            case num:
                $(".content dd:eq("+num+")").removeClass("none");
                break;
        }
    });	
	$(".tc dd").mousemove(function(){
        $(".tc dd").removeClass("on");
        $(".content li").addClass("none");
        $(this).toggleClass("on");
        var num=$(this).index();
        switch(num){
            case num:
                $(".content li:eq("+num+")").removeClass("none");
                break;
        }
    });	
	$(".history").click(function() {
        $(".jilu").fadeToggle();
    });		
	$("#pick a").click(function(e){
		$("html,body").animate({scrollTop: $($(this).attr("href")).offset().top}, 300);
		e.preventDefault(); 
	});
	PlayHistoryObj.viewPlayHistory('playhistory');
	toTop.goto("gotop");
    stui.common.lazyload();
    stui.common.closebtn();
});
function autoScroll(obj) {
	$(obj).find("ul").animate({
		marginTop: "-2rem"
	}, 500, function() {
		$(this).css({
			marginTop: "0px"
		}).find("li:first").appendTo(this)
	})
};
$(function() {
	setInterval('autoScroll(".tips")', 3500)
});
$(function() {
    if ($('.read').get(0)) {
        var synopsis = $('.read');
        var synopsisHtml = synopsis.html();
        var synopsisLen = synopsisHtml.length;
        var num = 0;
        var unfold = '... <a class="unfold-btn" href="javascript:;">展开&gt;&gt;</a>';
        var packUp = ' <a class="unfold-btn" href="javascript:;">&lt;&lt;收起</a>';
        var detailsContent = $('.detail');
        if (synopsisLen > 300) {
            var result = synopsisHtml.substr(0, 300);
            synopsis.html(result + unfold)
        }
        var btn = $('.unfold-btn');
        btn.live('click', function() {
            num++;
            if (num % 2 == 0) {
                synopsis.html(result + unfold)
            } else {
                synopsis.html(synopsisHtml + packUp)
            }
        })
    }
});