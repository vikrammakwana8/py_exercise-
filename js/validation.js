function checkFname()
		{

			var f=document.frm.fname.value;
			var reg=/^[A-Za-z]+$/;
			if(f=="")
			{
				document.getElementById("fname").innerHTML="please enter first name";
			}
			else if(!reg.test(f))
            {
            	document.getElementById("fname").innerHTML="please enter only alfabets";
			}
			else
			{
				document.getElementById("fname").innerHTML="";
			}

		}
		function checkLname()
		{

			var f=document.frm.lname.value;
			var reg=/^[A-Za-z]+$/;
			if(f=="")
			{
				document.getElementById("lname").innerHTML="please enter first name";
			}
			else if(!reg.test(f))
            {
            	document.getElementById("lname").innerHTML="please enter only alfabets";
			}
			else
			{
				document.getElementById("lname").innerHTML="";
			}

		}
		function checkPassword()
		{

			var f=document.frm.password.value;
			var reg=/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20}$/;
			if(f=="")
			{
				document.getElementById("password").innerHTML="please enter password";
			}
			else if(!reg.test(f))
            {
            	document.getElementById("password").innerHTML="please enter password";
			}
			else
			{
				document.getElementById("password").innerHTML="";
			} 

		}
		function confirmPassword()
		{

			var p1=document.frm.password.value;
			var p2=document.frm.cpassword.value;

			
			if(p2=="")
			{
				document.getElementById("cpassword").innerHTML="please confirm password";
			}
			else if(p1!=p2)
            {
            	document.getElementById("cpassword").innerHTML="passwor and confirmpassword does not match";
			}
			else
			{
				document.getElementById("cpassword").innerHTML="";
			} 

		}