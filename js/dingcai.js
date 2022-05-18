var Dingcai = {
    'Path': {
        'GetList': function($sid) {
            if ($sid == '1') return 'vod';
        },
		'Read': function() {
			this.List = this.GetList(Sid);
        }
    },
    'UpDown': {
        'Vod': function($ajaxurl) {
            if ($("#Up").length || $("#Down").length) {
                this.Ajax($ajaxurl, 'vod', '');
            }
            $('.Up').click(function() {
                Dingcai.UpDown.Ajax($ajaxurl, 'vod', 'up');
            });
            $('.Down').click(function() {
                Dingcai.UpDown.Ajax($ajaxurl, 'vod', 'down');
            });
        },
        'Ajax': function($ajaxurl, $model, $ajaxtype) {
            $.ajax({
                type: 'get',
                url: $ajaxurl + '-type-' + $ajaxtype,
                timeout: 5000,
                dataType: 'json',
                success: function($html) {
                    if (!$html.status) {
                        alert($html.info);
                    } else {
                        Dingcai.UpDown.Show($html.data, $model);
                    }
                }
            });
        },
        'Show': function($html, $model) {
            if ($model == 'vod') {
                $(".Up>span").html($html.split(':')[0]);
                $(".Down>span").html($html.split(':')[1]);
            }
        }
    },
}
$(document).ready(function() {
	Dingcai.Path.Read();
	Dingcai.UpDown.Vod(Base + 'index.php?s=Updown-' + Dingcai.Path.List + '-id-' + Id);
});