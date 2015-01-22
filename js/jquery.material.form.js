$(function(){
	$.fn.materialForm = function() {
	    this.find('input, textarea').each(function(){
	    	var type = $(this).attr('type');

	    	if(type != 'hidden' && type != 'submit'){
		    	var placeholder = $(this).attr('placeholder');
		    	var $wrap = $(this).wrap("<div class='input'></div>").parent();

		    	var tagName = $(this).prop("tagName").toLowerCase();
		    	$wrap.addClass(tagName);
		    	
		    	$wrap.append("<span class='bar'></span>");
		    	$wrap.append("<label>"+placeholder+"</label>");
		    	$(this).removeAttr('placeholder');
	    	}
	    });

	    this.find('input, textarea').on('blur', function(){
	    	var type = $(this).attr('type');
	    	if(type != 'hidden' && type != 'submit'){
		    	if($(this).val())
		    		$(this).addClass('filled');
		    	else
		    		$(this).removeClass('filled');
		    }	
	    });
	};
});