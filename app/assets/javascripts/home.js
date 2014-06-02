function loadAjax(page) {
	
	$('#message').hide();
	
	var url = "/get-posts?page="+page;
	
	$.ajax({
	    type: "GET",
	    url: url,
	    dataType: "json",
		async: true,
	    beforeSend: function() {   
			$('#loading').show();
	    },
	    complete: function() {
	    },        
	    success: function(result) {
			
			setTimeout(function() {
			
			var j = 0;
			
			if (result.posts != null){
				
				var html = "";
				var htmlList = generateHtml(result); 
				
				j = htmlList.length;
				
				for (var i = 0; i < htmlList.length; i++){
					html += htmlList[i];
				}
				
				$('#posts').append(html);
				
				if (j == 0) {
					$('#message').show();
					if (page == 0) {
						$('#message').html('No posts');
					}
					else {
						$('#message').html('No more posts');
					}
					
				} else {
					$('#page').val(page == 0 ? 0 : page);
				} 
			} else {
				$('#message').show();
				if (page == 0) {
					$('#message').html('No posts');
				}
				else {
					$('#message').html('No more posts');
				}
			}
			
			
			$('#loading').hide();
			if (j > 0){
				$(window).on("touchmove", scrollHandlerMobile);
				$(window).on("scroll", scrollHandler);
			}
			}, 2000);
			taskFired = false;
			
	    },
	    error: function(xhr, status, error) {
		
	    }
	});
}

function generateHtml(json) {
	var html = [];
	for (var i = 0; i < json.posts.length; i++){
		html += ["<div class='post'>"+json.posts[i]+"</div>"];
	}
	return html;
}

