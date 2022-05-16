function validation() {
	var name = document.myform.name.value;
	var phonenumber = document.myform.phonenumber.value;
	var email = document.myform.email.value;
	var comments = document.myform.comments.value;
	
	if (name==null || name=="") {
		alert("Mandatory field - name")
		return false;
	} else if (phonenumber==null || phonenumber==""){
		alert("Mandatory Field - phone number");
		return false;
	} else if (email==null || email==""){
		alert("Mandatory Field - email");
		return false;
	} else if (comments==null || comments==""){
		alert("Mandatory Field - comment");
		return false;
	} else {
		alert("Message sent");
	}
}