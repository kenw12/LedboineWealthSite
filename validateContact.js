function trim(str)
{
	return str.replace(/^\s+|\s+$/g,"");
}

//Determines if the text entry has input
//If empty false is returned, if has input, returns true
function formEntryHasInput(fieldElement)
{
	if (fieldElement.value == null || trim(fieldElement.value) == "")
	{
		return false;
	}

	return true;
}

function validate(e)
{
	hideErrors();

	if(formHasErrors()){
		e.preventDefault();

		return false;
	}

	return true;
}

//Resets the form to initial state.
function reset(e)
{
	//Asks user if they want to reset the form
	if(confirm('Clear Contact Information?'))
	{
		//Hides all error messages.	
		hideErrors();

		//Focuses on the first entry field on the form.
		document.getElementById("fullname").focus();

		//Returning true allows the form to reset.
		return true;
	}

	//Stops the form from resetting.
	e.preventDefault();

	return false;
}

function showError(formField, errorId, errorFlag)
{
	document.getElementById(errorId).style.display = "block";

	if(!errorFlag)
	{
		formField.focus();

		if(formField.type == "text")
		{
			formField.select();
		}
	}
}

///Returns tru if there is an error found, false if there are no errors.
function formHasErrors()
{
	var errorFlag = false;

	var requiredText = ["fullName","phoneNumber","email","comments"];

	console.log(requiredText.length);

	for(var i=0; i<requiredText.length; i++){

		var entry = document.getElementById(requiredText[i]);

		console.log(formEntryHasInput(entry));

		if(!formEntryHasInput(entry)){
			var error = document.getElementById(requiredText[i]+"_error");

			error.style.visibility = "visible";

			if(!errorFlag){
				entry.focus();
				entry.select();
			}

			errorFlag = true;
		}
	}

	var phoneRegex = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

	var phoneNo = document.getElementById("phoneNumber");

	if(!phoneRegex.test(phoneNo.value)){
		document.getElementById("phoneNumber_error").style.visibility = "visible";

		if(!errorFlag){
			phoneNo.focus();
			phoneNo.select();
		}

		errorFlag = true;
	}

	var emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

	var email = document.getElementById("email");

	if(!emailRegex.test(email.value)){
		document.getElementById("email_error").style.visibility = "visible";

		if(!errorFlag){
			email.focus();
			email.select();
		}

		errorFlag = true;
	}

	return errorFlag;
}

function hideErrors()
{
	var errorEntries = document.getElementsByClassName("error");

	for(var i=0; i<errorEntries.length; i++)
	{
		errorEntries[i].style.visibility = "hidden";
	}
}

function load()
{
	hideErrors();

	document.getElementById("contactForm").addEventListener("submit", validate, false);

	document.getElementById("contactForm").addEventListener("reset", reset, false);
}

document.addEventListener("DOMContentLoaded", load, false);