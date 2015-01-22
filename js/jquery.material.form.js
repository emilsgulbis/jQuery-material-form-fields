$(function(){
	$.fn.materialForm = function() {
	    this.find('input, textarea').each(function(){
	    	if(isValidType($(this))){
		    	var $wrap = $(this).wrap("<div class='input'></div>").parent();
		    	$wrap.append("<span class='bar'></span>");

		    	var tagName = $(this).prop("tagName").toLowerCase();
		    	$wrap.addClass(tagName);
		    	
		    	var placeholder = $(this).attr('placeholder');
		    	if(placeholder){
		    		$wrap.append("<label>"+placeholder+"</label>");
		    		$(this).removeAttr('placeholder');
		    	}

		    	addFilled($(this));
	    	}
	    });

	    this.find('input, textarea').on('blur', function(){
		    if(isValidType($(this)))
		    	addFilled($(this))
	    });

	    function isValidType($el){
	    	var type = $el.attr('type');
	    	return (type != 'hidden' && type != 'submit' ? 1 : 0);
	    }

	    function addFilled($el){
	    	if($el.val())
	    		$el.addClass('filled');
	    	else
	    		$el.removeClass('filled');
	    }
	};
});