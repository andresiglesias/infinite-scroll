== Infinite Scroll

Infinite scroll implementation in Ruby on Rails and jQuery.

== Usage

Add a hidden field and the following script in the view. 

```ruby
<%= hidden_field_tag 'page', "0" %>

<script>
	var taskFired = false;
	$( document ).ready(function() {
	  loadAjax(0);
	  $(window).on("touchmove", scrollHandlerMobile);
	  $(window).on("scroll", scrollHandler);
	});
</script>
```
