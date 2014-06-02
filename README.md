# Infinite Scroll

Infinite scroll implementation in Ruby on Rails and jQuery.

# Usage

Add a hidden field and the following script in your view. 

```ruby
<%= hidden_field_tag 'page', "0" %>
```

```js
var taskFired = false;
$( document ).ready(function() {
  loadAjax(0);
  $(window).on("touchmove", scrollHandlerMobile);
  $(window).on("scroll", scrollHandler);
});
```

Change the loadAjax method with the url from which you are retrieving the data. The url must return a json.

```js
function loadAjax(page) {
	
	$('#message').hide();
	
	var url = "/get-posts?page="+page;
	
	...
```

Finally change the generateHtml method with your implementation. The result must be an array of strings.

```js
function generateHtml(json) {
	var html = [];
	for (var i = 0; i < json.posts.length; i++){
		html += ["<div class='post'>"+json.posts[i]+"</div>"];
	}
	return html;
}
```

