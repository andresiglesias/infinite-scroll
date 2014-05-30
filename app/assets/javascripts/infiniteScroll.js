function scrollBottom(offset){
    if (  document.documentElement.clientHeight + 
          $(document).scrollTop() >= document.body.offsetHeight - offset)
    { 
		if(!taskFired){
			taskFired = true;
			$(window).off("touchmove", scrollHandlerMobile);
			$(window).off("scroll", scrollHandler);
			var page = $('#page').val();
	        setTimeout(loadPosts(parseInt(page)+1), 1500);
		}
    }
}

var scrollHandler = function(){
    scrollBottom(5);
}

var scrollHandlerMobile = function(){
    scrollBottom(100);
}



