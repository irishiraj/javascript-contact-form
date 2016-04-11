function Submit(){
	var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
  // var phoneRegex = /^[0-9]+$/;
	var phonelength = /^\d{10}$/;
	var fname = document.form.Name.value,
  		lname = document.form.LastName.value,
  		email = document.form.Email.value,
  		reemail = document.form.enterEmail.value,
        phone = document.form.phone.value;

		var scountry = document.getElementById("country");
		var selectedcountry = scountry.options[scountry.selectedIndex].value;

		var sstate = document.getElementById("state");
		var selectedstate = sstate.options[sstate.selectedIndex].value;

		console.log(selectedstate);

	if( fname == "" )
	   {
	     document.form.Name.focus() ;
		 document.getElementById("errorBox").innerHTML = "Enter the first name";
	     return false;
	   }

	if( lname == "" )
	   {
	     document.form.LastName.focus() ;
		 document.getElementById("errorBox").innerHTML = "Enter the last name";
	     return false;
	   }

   	if (email == "" )
		 {
			document.form.Email.focus();
			document.getElementById("errorBox").innerHTML = "Enter the email";
			return false;
		 }
  	 else if(!emailRegex.test(email))
	     {
    		document.form.Email.focus();
    		document.getElementById("errorBox").innerHTML = "Enter the valid email";
    		return false;
	  	 }

	  if (reemail == "" )
	  	 {
    		document.form.enterEmail.focus();
    		document.getElementById("errorBox").innerHTML = "Re-enter the email";
    		return false;
	  	 }
	  	 else if(!emailRegex.test(reemail))
	     {
    		document.form.enterEmail.focus();
    		document.getElementById("errorBox").innerHTML = "Re-enter the valid email";
    		return false;
	  	 }

	 if(reemail !=  email)
	     {
	  		 document.form.enterEmail.focus();
	  		 document.getElementById("errorBox").innerHTML = "Emails are not matching, re-enter again";
	  		 return false;
		}

     if (phone == "" )
       {
         document.form.phone.focus();
         document.getElementById("errorBox").innerHTML = "Enter the phone number";
         return false;
       }

	if(!phone.match(phonelength))
		 {
		   document.form.phone.focus();
		   document.getElementById("errorBox").innerHTML = "Enter the valid phone number of ten digits";
		   return false;
		 }

	if(selectedcountry == '') 
		{
	     document.form.country.focus() ;
		 document.getElementById("errorBox").innerHTML = "Select the country";
	     return false;
    	}

    if(selectedstate == '')
    	{
    		document.form.state.focus();
    		document.getElementById("errorBox").innerHTML = "Select the state";
    		return false;
    	}
				

  		if(fname != '' && lname != '' && email != '' && reemail != '' && phone != '' && selectedcountry != '' && selectedstate != '')
	        {
    			document.getElementById("errorBox").innerHTML = "Form submitted successfully";
				alert(
				 "First Name = " +fname+ "\n" +
				 "Last Name = " +lname+ "\n" +
				 "Email = " +email+ "\n" +
				 "Re-enter Email = " +reemail+ "\n" +
				 "Phone = " +phone+ "\n" +
				 "Country = " +selectedcountry+ "\n" +
				 "State = " +selectedstate+ "\n"
				 );
	    	}
}

