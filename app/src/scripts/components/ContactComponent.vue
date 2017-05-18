<template>
<div>
	<p>Feel free to drop me a line using the form below! I generally will reply within 2 business days. I look forward to connecting with you.</p>
	<form name="contactForm">
		<div class="form-group">
			<label for="fName">First Name:</label>
		</div>
		<div class="form-group">
			<input name="fName" required="required" class="form-input">
		</div>
		<div class="form-group">
			<label for="lName">Last Name:</label>
		</div>
		<div class="form-group">
			<input name="lName" required="required" class="form-input">
		</div>
		<div class="form-group">
			<label for="_replyto">Email:</label>
		</div>
		<div class="form-group">
			<input type="email" required="required" name="_replyto" class="form-email">
		</div>
		<div class="form-group">
			<label for="body">Message:</label>
		</div>
		<div class="form-group">
			<textarea name="body" required="required" class="form-message"></textarea>
		</div>
		<div class="form-group">
			<label for="validation">What color is the sky on a clear day?</label>
		</div>
		<div class="form-group">
			<input name="validation" required="required" class="form-input">
		</div>
		<div class="form-group">
			<input type="submit" value="Send">
		</div>
	</form>
	<p class=""></p>
</div>
</template>

<script>
	(function(){
		var redirect = sessionStorage.redirect;
		delete sessionStorage.redirect;
		if (redirect && redirect != location.href) {
			history.replaceState(null, null, redirect);
		}
	})();
</script>

<style lang="sass">
</style>
