"use strict";
jQuery(document).ready(function() {
	//menu
	jQuery('ul.sf-menu').superfish({
		delay:       700,
		animation:   {opacity:'show',height:'show'},
		//animation:   {opacity:'show'},
		animationOut: {opacity: 'hide'},
		speed:       'fast',
		disableHI:   false,
		cssArrows:   true,
		autoArrows:  true
	});

	//toTop
	if (jQuery().UItoTop) {
        jQuery().UItoTop({ easingType: 'easeOutQuart' });
    }

    //horizontal accordion
    if (jQuery().elastislide) {
	    jQuery('#horizontal_slider').elastislide({
	        imageW : 370,
	        border : 0,
	        minItems : 1,
	        margin : 15
	    });
	}

	//parallax
	if (jQuery().parallax) {
		jQuery('#land').parallax("50%", 0.1);
		jQuery('#progress').parallax("50%", 0.1);
		jQuery('#belowcontent').parallax("50%", 0.1);
		jQuery('#testimonials').parallax("50%", 0.1);
		jQuery('#tweets').parallax("50%", 0.1);
	}

    //prettyPhoto
    if (jQuery().prettyPhoto) {
	   	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
	   		hook: 'data-gal',
			theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
	  	});
	}

   	//carousel
   	if (jQuery().carousel) {
		jQuery('.carousel').carousel();
	}

	//single page localscroll and scrollspy
	var navHeight = jQuery('#header').outerHeight(true)-2;
	if (jQuery().prettyPhoto) {
		jQuery('#mainmenu, #land').localScroll({
			duration:1500,
			offset: -navHeight
		});
	}

	jQuery('body').scrollspy({
		target: '.mainmenu_wrap',
		offset: navHeight
	});

	//timeline
	if (jQuery().timelinr) {
		if(jQuery('#timeline').length) {
			jQuery('#timeline').timelinr({
				orientation: 	'vertical',
				issuesSpeed: 	300,
				datesSpeed: 	100,
				arrowKeys: 		'true',
				startAt:		5
			});
		}
	}

	//owl caousel
	if (jQuery().owlCarousel) {
	    jQuery(".owl-carousel").owlCarousel({
	    	navigation : true,
	    	navigationText : false,
	    	pagination : false
	    });
	}

	
	//animation to elements on scroll
	if (jQuery().appear) {
		// jQuery('.to_animate').appear().css({opacity: 0});
		jQuery('.to_animate').appear().css({'visibility': 'hidden'});
		jQuery('.to_animate').filter(':appeared').each(function(index){
			var self = jQuery(this);
			var animationClass = !self.data('animation') ? 'fadeInUp' : self.data('animation');
			var animationDelay = !self.data('delay') ? 270 : self.data('delay');
			setTimeout(function(){
				self.addClass("animated " + animationClass);
			}, index * animationDelay);
		});

		jQuery('body').on('appear', '.to_animate', function(e, $affected ) {
			jQuery($affected).each(function(index){
				var self = jQuery(this);
				var animationClass = !self.data('animation') ? 'fadeInUp' : self.data('animation');
				var animationDelay = !self.data('delay') ? 270 : self.data('delay');
				setTimeout(function(){
					self.addClass("animated " + animationClass);
				}, index * animationDelay);
			});
		});
	}

	//portfolio and horizontal slider animation
	jQuery('.portfolio_item_image > div').css({opacity: 0});
	jQuery('.isotope-item, .horizontal_slider_introimg').hover(
	 	function() {
			jQuery( this ).find('.portfolio_item_image > div').stop().animate({ opacity: 1}, 500, 'easeOutExpo').find('.p-view').toggleClass('moveFromLeft').end().find('.p-link').toggleClass('moveFromRight').end().closest('li').find('.item_title').stop().animate({ opacity: 1}, 500, 'easeOutExpo').delay(200).toggleClass('moveFromBottom');
		}, function() {
			jQuery( this ).find('.portfolio_item_image > div').stop().animate({ opacity: 0}, 300, 'easeOutExpo').find('.p-view').toggleClass('moveFromLeft').end().find('.p-link').toggleClass('moveFromRight').end().closest('li').find('.item_title').stop().animate({ opacity: 0}, 300, 'easeOutExpo').toggleClass('moveFromBottom');;
		}
	);

	//teaser style5 animation
	jQuery('.single_teaser.icons.style5').hover(
	 	function() {
			jQuery( this ).find('i').addClass('moveFromLeft').end().find('h3').addClass('moveFromRight').end().find('p').addClass('moveFromBottom');
		}, function() {
			jQuery( this ).find('i').removeClass('moveFromLeft').end().find('h3').removeClass('moveFromRight').end().find('p').removeClass('moveFromBottom');
		}
	);


   jQuery(".process-container .process-item").hover(function(){
        var numItem = jQuery(this).attr("data-show");
        jQuery(".process_description_wrap>div").hide();
        jQuery(".process_description_" + numItem).stop().show();
   });

	//flickr
	if (jQuery().jflickrfeed) {
		jQuery("#flickr").jflickrfeed({
			flickrbase: "http://api.flickr.com/services/feeds/",
			limit: 6,
			qstrings: {
				id: "36621592@N06"
			},
			itemTemplate: '<a href="{{image_b}}" rel="prettyPhoto[pp_gal]"><li><img alt="{{title}}" src="{{image_s}}" /></li></a>'
		}, function(data) {
			jQuery("#flickr a").prettyPhoto({
				theme: 'facebook'
	   		});
	   		jQuery("#flickr li").hover(function () {						 
			   jQuery(this).find("img").stop().animate({ opacity: 0.5 }, 200);
		    }, function() {
			   jQuery(this).find("img").stop().animate({ opacity: 1.0 }, 400);
		    });
		});
	}

	//twitter
		//slide tweets
	jQuery('.twitter').bind('loaded', function(){
		jQuery(this).addClass('flexslider').find('ul').addClass('slides');
	});
	if (jQuery().jflickrfeed) {
		jQuery('.twitter').tweet({
			modpath: "./twitter/",
		    count: 3,
		    avatar_size: 48,
		    loading_text: 'loading twitter feed...',
		    join_text: 'auto',
		    username: 'themeforest', 
		    template: "{avatar}{time}{join}<span class=\"tweet_text\">{tweet_text}</span>"
		});
	}
});

jQuery(window).load(function(){


	//stick header to top
	if (jQuery().sticky) {
	    jQuery("#header").sticky({ 
	    		topSpacing: 0,
	    		scrollBeforeStick: 60
	    	},
	    	function(){ 
	    		//jQuery("#header").stop().animate({opacity:0}, 0).delay(200).stop().animate({opacity:1}, 500);
	    	},
	       	function(){ 
	    		//jQuery("#header").stop().animate({opacity:0}, 0).delay(200).stop().animate({opacity:1}, 500);
	    	}
	    );
	}
	//circle progress bar
	if (jQuery().easyPieChart) {
		jQuery('.chart').easyPieChart({
	        barColor: '#f85b23',
			trackColor: '#444957',
			scaleColor: false,
			scaleLength: false,
			lineCap: 'butt',
			lineWidth: 22,
			size: 180,
			rotate: 0,
			animate: 2000,
			onStep: function(from, to, percent) {
					jQuery(this.el).find('.percent').text(Math.round(percent));
				}
	    });
	}

	jQuery("#mainslider > div").flexslider({
		animation: "fade",
		//useCSS: false,
		controlNav: true,   
		//animationLoop: false,
		smoothHeight: true,
		slideshowSpeed:7000,
		animationSpeed:800
	});
	jQuery(".flexslider").flexslider({
		animation: "slide",
		useCSS: false,
		controlNav: false,   
		//animationLoop: false,
		smoothHeight: true,
		slideshowSpeed:7000,
		animationSpeed:800
	});

	jQuery(".slides").find("li").each(function(){
		var h = jQuery(this).height();
		var childH = jQuery(this).find(".leftcontent_wrap").actual("height");
		var childRH = jQuery(this).find(".rightcontent_wrap").actual("height");
		var childD = jQuery(this).find(".slide_description").actual("height");
		var padding = (h / 2) - (childH / 2);
		var paddingR = (h / 2) - (childRH / 2);
		var topD = ((h / 2) - ((childD / 2) ));
		jQuery(this).find(".leftcontent_wrap").css("padding-top" , padding);
		jQuery(this).find(".rightcontent_wrap").css("padding-top" , paddingR);
		jQuery(this).find(".slide_description").css("top" , topD);
	});

	jQuery(".flexslider").hover(
		function(){
			jQuery(this).find(".flex-direction-nav a").animate({opacity : 1});
		},
		function(){
			jQuery(this).find(".flex-direction-nav a").animate({opacity : 0});
		}
	);

	jQuery('body').delay(1000).scrollspy('refresh');

	//preloader
	jQuery(".preloaderimg").fadeOut();
	jQuery(".preloader").delay(200).fadeOut("slow").delay(400, function(){
		jQuery(this).remove();
	});

});

jQuery(window).resize(function(){
	jQuery("#header").sticky('update');
	jQuery('body').scrollspy('refresh');

	
});



//switcher
/////////////////////////////////////////////
//DELETE FOLLOWING CODE TO DISABLE SWITCHER//
/////////////////////////////////////////////
//jQuery(window).load(function(){
//		
//		var switcherHTML = '<div id="switcher">';
//		switcherHTML +=    '<span class="glyphicon glyphicon-cog"></span>';
//		switcherHTML +=    '<h6>Colors</h6>';
//		switcherHTML +=    '<ul id="switcher-colors" class="list-inline">';
//		switcherHTML +=        '<li>';
//		switcherHTML +=            '<a href="#" data-color="" class="color1"></a>';
//		switcherHTML +=        '</li>';
//		switcherHTML +=        '<li>';
//		switcherHTML +=            '<a href="#" data-color="2" class="color2"></a>';
//		switcherHTML +=        '</li>';
//		switcherHTML +=        '<li>';
//		switcherHTML +=            '<a href="#" data-color="3" class="color3"></a>';
//		switcherHTML +=        '</li>';
//		switcherHTML +=    '</ul>';
//		switcherHTML +=    '<h6>Layout</h6>';
//		switcherHTML +=    '<div class="checkbox">';
//		switcherHTML +=        '<label>';
//		switcherHTML +=            '<input type="checkbox" id="layout"> Boxed';
//		switcherHTML +=        '</label>';
//		switcherHTML +=    '</div>';
//		switcherHTML +=    '<h6>Boxed Patterns</h6>';
//		switcherHTML +=    '<ul id="switcher-patterns" class="list-inline">';
//		switcherHTML +=        '<li>';
//		switcherHTML +=            '<a href="#" data-pattern="pattern1">';
//		switcherHTML +=                '<img src="img/pattern1.png" alt="" width="30" height="30">';
//		switcherHTML +=            '</a>';
//		switcherHTML +=        '</li>';
//		switcherHTML +=        '<li>';
//		switcherHTML +=            '<a href="#" data-pattern="pattern2">';
//		switcherHTML +=                '<img src="img/pattern2.png" alt="" width="30" height="30">';
//		switcherHTML +=            '</a>';
//		switcherHTML +=        '</li>';
//		switcherHTML +=        '<li>';
//		switcherHTML +=            '<a href="#" data-pattern="pattern3">';
//		switcherHTML +=                '<img src="img/pattern3.png" alt="" width="30" height="30">';
//		switcherHTML +=            '</a>';
//		switcherHTML +=        '</li>';
//		switcherHTML +=        '<li>';
//		switcherHTML +=            '<a href="#" data-pattern="pattern4">';
//		switcherHTML +=                '<img src="img/pattern4.png" alt="" width="30" height="30">';
//		switcherHTML +=            '</a>';
//		switcherHTML +=        '</li>';
//		switcherHTML +=    '</ul>';
//		switcherHTML +=    '<p>';
//		switcherHTML +=        '<a id="remove_pattern" href="#"><i class="glyphicon glyphicon-trash"></i> Remove Pattern</a>';
//		switcherHTML +=    '</p>';
//		switcherHTML +='</div>';
//
//		jQuery('body').append(switcherHTML);
//
//		//switcher toggle
//        jQuery('#switcher span').on('click', function(){
//            jQuery(this).parent().toggleClass('active');
//        });
//
//        //boxed or wide
//        jQuery('#layout').on('click', function(){
//            jQuery('body').toggleClass('boxed');
//            jQuery('#box_wrapper').toggleClass('container');
//            jQuery('#isotopeContainer').isotope('reLayout');
//            jQuery(window).trigger('resize');
//        });
//
//        //pattern switcher
//        var patternClasses = [
//            'pattern1',
//            'pattern2',
//            'pattern3',
//            'pattern4'
//        ];
//        jQuery('#switcher-patterns').on('click', 'a', function(e){
//            e.preventDefault();
//            e.stopPropagation();
//            jQuery('body').removeClass(patternClasses.join(' '));
//            jQuery('body').addClass(jQuery(this).data('pattern'));
//        });
//        //deleting pattern
//        jQuery('#remove_pattern').on('click', function(e){
//            e.preventDefault();
//            e.stopPropagation();
//            jQuery('body').removeClass(patternClasses.join(' '));
//        });
//
//        //color switcher
//        jQuery('#switcher-colors a').on('click', function(e) {
//            e.preventDefault();
//            e.stopPropagation();
//            var color = jQuery(this).data('color');
//            jQuery('#color-switcher-link').attr('href', 'css/main' + color + '.css');
//        });
//
//		//version switcher
//        jQuery('#switcher-version a').on('click', function(e) {
//            e.preventDefault();
//            e.stopPropagation();
//            var version = jQuery(this).attr('class');
//            switch(version) {
//            	case 'dark':
//            		jQuery('.light_section').toggleClass('light_section darkgrey_section');
//            		jQuery('.grey_section').toggleClass('grey_section dark_section').addClass('');
//            		jQuery('#footer, #copyright').attr('class', '').addClass('darkgrey_section');
//            		break;
//
//            	case 'light':
//            		jQuery('.darkgrey_section').toggleClass('darkgrey_section light_section');
//            		jQuery('.dark_section').toggleClass('dark_section grey_section');
//            		jQuery('#footer, #copyright').attr('class', '').addClass('darkgrey_section');
//            		break;
//            }
//        });
//
//});