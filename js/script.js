



// Start Search Bar

      $(document).ready(function(){
        $("#src-ico").click(function(){
		 $("#frm-grp").slideToggle(10);
		 $(this).hide();
		

        });

        $("#frm-grp #cros-ico").click(function(){
          $("#frm-grp").fadeOut(10);
		  $("#src-ico").show();
        });

      });
    
// END Search Bar






//	Start jQuery News Ticker

		jQuery(document).ready(function ($) {

			$('#newsTicker1').breakingNews();
			//$('#newsTicker2').data('breakingNews').next();

			$('#newsTicker2').breakingNews({
				direction: 'rtl'
			});

			$('#newsTicker3').breakingNews({
				themeColor: '#f9a828',
				effect: 'slide-left'
			});

			$('#newsTicker4').breakingNews({
				themeColor: '#11cbd7',
				source: {
					type: 'rss',
					usingApi: 'rss2json',
					rss2jsonApiKey: '5ivfzdrkuqwmoe0dgxeqvhfz0knlo7yq4fw20bt0',
					url: 'http://rss.cnn.com/rss/edition.rss',
					limit: 7,
					showingField: 'title',
					linkEnabled: true,
					target: '_blank',
					seperator: '<span class="bn-seperator" style="background-image:url(img/cnn-logo.png);"></span>',
					errorMsg: 'RSS Feed not loaded. Please try again.'
				}
			});

			$('#newsTicker5').breakingNews({
				effect: 'typography'
			});


			$('#newsTicker6').breakingNews({
				source: {
					type: 'json',
					url: 'https://jsonplaceholder.typicode.com/posts',
					limit: 20,
					showingField: 'title',
					linkEnabled: false,
					target: '_blank',
					seperator: '<span class="bn-seperator" style="background-image:url(img/cnn-logo.png);"></span>',
					errorMsg: 'Json file not loaded. Please check the settings.'
				}
			});

			$('#newsTicker7').breakingNews({
				themeColor: '#11cbd7',
				background: 'transparent',
				borderWidth: 0,
				source: {
					type: 'rss',
					usingApi: 'YQL',
					url: 'http://feeds.bbci.co.uk/news/rss.xml',
					limit: 20,
					showingField: 'title',
					linkEnabled: true,
					target: '_blank',
					seperator: '<span class="bn-seperator bn-news-dot"></span>',
					errorMsg: 'Json file not loaded. Please check the settings.'
				}
			});


			$('#newsTicker8').breakingNews({
				height: 56,
				borderWidth: 0,
				background: 'url(img/background-pattern-example.png)'
			});

			$('#newsTicker9').breakingNews({
				effect: 'fade',
				themeColor: '#ef7b7b'
			});

			$('#newsTicker10').breakingNews({
				effect: 'slide-down',
				themeColor: '#2eb872',
				height: 50,
				fontSize: '18px'
			});

			$('#newsTicker11').breakingNews({
				effect: 'slide-up'
			});


			$('#newsTicker12').breakingNews({
				effect: 'typography',
				direction: 'rtl',
				themeColor: '#08c299'
			});

			$('#newsTicker13').breakingNews({
				effect: 'slide-right'
			});

			$('#newsTicker14').breakingNews();

			$('#newsTicker15').breakingNews({
				position: 'fixed-bottom',
				borderWidth: 3,
				height: 50,
				themeColor: '#ce2525'
			});



		});



		

		
		
		
		
		
		
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-36251023-1']);
	_gaq.push(['_setDomainName', 'jqueryscript.net']);
	_gaq.push(['_trackPageview']);

	(function () {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();



//	End jQuery News Ticker