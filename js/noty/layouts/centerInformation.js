;(function($) {

	$.noty.layouts.centerInformation = {
		name: 'centerInformation',
		options: { // overrides options
			
		},
		container: {
			object: '<ul id="noty_centerInformation_layout_container" />',
			selector: 'ul#noty_centerInformation_layout_container',
			style: function() {
				$(this).css({
					position: 'fixed',
					width: '250px',
					height: '500px',
					margin: 0,
					padding: 0,
					listStyleType: 'none',
					zIndex: 10000000
				});

				// getting hidden height
				var dupe = $(this).clone().css({visibility:"hidden", display:"block", position:"absolute", top: 0, left: 0}).attr('id', 'dupe');
				$("body").append(dupe);
				dupe.find('.i-am-closing-now').remove();
				dupe.find('li').css('display', 'block');
				var actual_height = dupe.height();
				dupe.remove();

				if ($(this).hasClass('i-am-new')) {
					$(this).css({
						left: ($(window).width() - $(this).outerWidth()) / 2 + 'px',
						top: ($(window).height() - actual_height) / 2 + 'px'
					});
				} else {
					$(this).animate({
						left: ($(window).width() - $(this).outerWidth()) / 2 + 'px',
						top: ($(window).height() - actual_height) / 2 + 'px'
					}, 500);
				}
				
			}
		},
		parent: {
			object: '<li />',
			selector: 'li',
			css: {}
		},
		css: {
			display: 'none',
			width: '250px',
			height: '500px'
		},
		addClass: ''
	};

})(jQuery);