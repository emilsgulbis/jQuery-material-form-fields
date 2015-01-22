$(function(){
	$.fn.materialForm = function() {
	    this.find('input, textarea').each(function(){
	    	var placeholder = $(this).attr('placeholder');
	    	var $wrap = $(this).wrap("<div class='input'></div>").parent();

	    	var tagName = $(this).prop("tagName").toLowerCase();
	    	$wrap.addClass(tagName);
	    	
	    	$wrap.append("<span class='bar'></span>");
	    	$wrap.append("<label>"+placeholder+"</label>");
	    	$(this).removeAttr('placeholder');
	    });

	    this.find('input, textarea').on('blur', function(){
	    	if($(this).val())
	    		$(this).addClass('filled');
	    	else
	    		$(this).removeClass('filled');
	    });
	};
});