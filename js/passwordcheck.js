
$(document).ready(function() {
$('#password').keyup(function() {
$('#result').html(checkStrength($('#password').val()))
})
	function checkStrength(password) {
		var strength = 0
		if (password.length < 6) {
			$('#result').removeClass()
			$('#result').addClass('short')
			return 'Too short'
		}
		if (password.length > 7) strength += 1
		// If password contains both lower and uppercase characters, increase strength value.
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
		// If it has numbers and characters, increase strength value.
		if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
		// If it has one special character, increase strength value.
		if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
		// If it has two special characters, increase strength value.
		if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
		// Calculated strength value, we can return messages
		// If value is less than 2
		if (strength < 2) {
			$('#result').removeClass()
			$('#result').addClass('weak')
			return 'Weak'
		} else if (strength == 2) {
			$('#result').removeClass()
			$('#result').addClass('good')
			return 'Good'
		} else {
			$('#result').removeClass()
			$('#result').addClass('strong')
			return 'Strong'
		}
	}
});

var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
// function minLength(){
// 	if(password.length < 6 && confirm_password.length < 6){
// 		alert ('Password too short')
// 	}
// }
// minLength();

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;