# jQuery-material-form-fields
jQuery Material Design form (input, textarea)

##Installation
Include script after the jQuery library (unless you are packaging scripts somehow else):
``` javascript
<script src="/path/to/jquery.material.form.min.js"></script>
```
Include css style:
``` html
<link rel="stylesheet" type="text/css" href="path/to/jquery.material.form.min.css">
```
##Usage
####HTML
``` html
<form action="" class="material">
	<input type="email" name="email" placeholder="E-mail" required>
	<input type="text" name="name" placeholder="Name">
	<textarea name="message" placeholder="Message"></textarea>

	<select name="your-select-name" placeholder="Select one of these">
		<option value="1">Option</option>
		<option value="2">Super option</option>
		<option value="3" selected>Awesome option</option>
		<option value="4">WORST option ever</option>
	</select>

	<select name="your-select-name" placeholder="You can select multiple" multiple>
		<option value="1">Option</option>
		<option value="2" selected>Super option</option>
		<option value="3" selected>Awesome option</option>
	</select>
</form>
```

####JS
``` javascript
$('form.material').materialForm();
```

####Validation
This plugin works with jQuery validation http://jqueryvalidation.org/
``` javascript
$('form.material').validate({ 
	errorPlacement: function(error, element) {}
}); // Apply validator with no error messages but classes only
```
