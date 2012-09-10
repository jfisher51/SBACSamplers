/*
Shows filtered tables in "View More" navigation item.
*/
			$(function(){
			
			$('#null').addClass('mouseenter').click(function(){
			$(this).addClass('mouseenter').fadeOut();
			});
			
			$('span.null').click(function() {
				$('#null').toggleClass('mouseenter').show();
			}).mouseenter(function() {
				$('#null.mouseenter').show().siblings().hide();
			});	
			
			$('#tech').addClass('mouseenter').click(function(){
			$(this).addClass('mouseenter').fadeOut();
			});
			
			$('a.tech').click(function() {
				$('#tech').toggleClass('mouseenter').show();
			}).mouseenter(function() {
				$('#tech.mouseenter').show().siblings().hide();
			});		
			
			
			$('#performance').addClass('mouseenter').click(function(){
			$(this).addClass('mouseenter').fadeOut();
			});
			
			$('a.performance').click(function() {
				$('#performance').toggleClass('mouseenter').show();
			}).mouseenter(function() {
				$('#performance.mouseenter').show().siblings().hide();
			});		
			
			$('#learning').addClass('mouseenter').click(function(){
			$(this).addClass('mouseenter').fadeOut();
			});
			
			$('a.learning').click(function() {
				$('#learning').toggleClass('mouseenter').show();
			}).mouseenter(function() {
				$('#learning.mouseenter').show().siblings().hide();
			});		
			
			$('#difficulty').addClass('mouseenter').click(function(){
			$(this).addClass('mouseenter').fadeOut();
			});
			
			$('a.difficulty').click(function() {
				$('#difficulty').toggleClass('mouseenter').show();
			}).mouseenter(function() {
				$('#difficulty.mouseenter').show().siblings().hide();
			});		
				
			});


/*
Shows appropriate content in About This Item navigation, based on a value in the URL.
*/


		$(function() {
    if (location.href.match(/\math1/)) {
        $('div#math1').show().siblings().hide();
     }
    else if (location.href.match(/\math2/)) {
        $('div#math2').show().siblings().hide();
     }
    else {
        $('div#generic').show().siblings().hide();
     }
		});
		