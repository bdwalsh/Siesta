// JavaScript Document
window.onload = function(){
	"use strict";
	var displayName = document.getElementById('displayName');
	var passWord = document.getElementById('PassWord');
	var confirmPassWord = document.getElementById('confirm');
	var email = document.getElementById('email');
	var campus = document.getElementById('campus');
	var signUpButton = document.getElementById('signUp');
	
	
	//check email immeditly!
	/*email.onchange = function(){
		var emailAddress = email.value;
		$.ajax({
	};*/
	
	signUpButton.onclick = function(){
		//grad values form inputs
		var DName = displayName.value;
		var PWord = passWord.value;
		var CPWord = confirmPassWord.value;
		var emailAddress = email.value;
		var campusValue = campus.value;
		//var formValidation = false;
		
		
		if(PWord === CPWord){
			
			$.ajax({
			url: "signUp.php",
			dataType: "json",
			data: {
				Displayname : DName,
				Password : CPWord,
				Email : emailAddress,
				Campus : campusValue 
				
			},
			type: "POST",
			success: function(e){
				if(e.Status === "Success"){
				var registeredName = e.Displayname;
				alert(registeredName + ", Thank you for sign up with Siesta, please log in with your email and take a nap with us");
				}else if(e.Status === "Email is taken"){
					alert(e.Status);
				}
				console.log(e);
			},
			error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR.statusText, textStatus, errorThrown);
                    },
			
			
			
			
			
			
			
			
			});
		
			
		}else{
			alert("Password must be the same as Confirm Password!");
		}
		
		
	};

	     function check(input) {

          if(input.validity.patternMismatch) {
              input.setCustomValidity("User name must be more than 2 alphabetic characters and less than 20 alphabetic characters.");

          } else if(input.validity.valueMissing) {
              input.setCustomValidity("You must enter a name!");

          } else {
              input.setCustomValidity("");

          }

      }
};
