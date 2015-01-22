# jQuery-material-form-fields
jQuery Material Design form (input, textarea)

##Installation
Include script after the jQuery library (unless you are packaging scripts somehow else):
``` javascript
<script src="/path/to/jquery.material.form.min.js"></script>
```
Include css style:
``` html
<link rel="stylesheet" type="text/css" href="css/jquery.material.form.min.css">
```
##Usage
####HTML
``` html
<form action="" class="material">
	<input type="email" placeholder="E-mail" required>
	<input type="text" placeholder="Name">
	<textarea placeholder="Message"></textarea>
</form>
```

####JS
``` javascript
$('form.material').materialForm();
```

####Validation
This plugin works with jQuery validation http://jqueryvalidation.org/
``` javascript
$('form.material).validate({ 
	errorPlacement: function(error, element) {}
}); // Apply validator with no error messages but classes only
```
