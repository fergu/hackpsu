<!DOCTYPE html>
<html>
<head>
<title>Dr Singh's Dental Clinic | Delivering Smiles</title>
<meta name="keywords" content="dentist, good dentist, dentist delhi, cheap good dentist, dentist south delhi">	
<meta charset="utf-8" name="Perfect 32 Dental Care" content="dentist delhi">
<link rel="stylesheet" type="text/css" href="style.css" media="all" />
</head>
<script language="JavaScript" src="Jscripts/gen_validatorv31.js" type="text/javascript"></script>
<body>
	<div id="header">
                        <div id="logo" style="position:relative;">
                                <a href="index.html"><img class="bottom"src="images/newlogo.png"  style="position:absolute; bottom:0; "height="100px" width="350px"alt="" /></a>                
                        </div>          
                        <div id="logo1" style="position:relative;">
                                <a href="index.html"><img src="images/new_logo.jpg"  style="position:absolute; bottom:0;" height="100px" width="350px"alt="" /></a>                            
                        </div>  
			<ul>
				<li><a href="index.html"><span>home</span></a></li>
				<li><a href="services.html"><span>services</span></a></li>
				<li  class="selected"><a href="testi.html"><span>testimonials</span></a></li>
				<li><a href="contact.html"><span>contact us</span></a></li>			
			</ul>
	</div>
	<div id="body">
		<div class="contact">
			<h1>Testimonials</h1>
			<p>We would like to hear from you. Please send us your commments, suggestions, complaints through the following form. Selected testimonials shall be displayed on the website </p>
			<div>	
			<h3>Tell us what you think of us :</h3>
			
<?php                                                                                                 
// display form if user has not clicked submit                                                        
if (!isset($_POST["submit"])) {                                                                       
  ?>                                                                                                  
  <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>" name="myemailform">                                    
  Email Address	: <input type="text" name="from"><br>                                                           
  Full Name	: <input type="text" name="name"><br>                                                     
  Comments	: <textarea rows="10" cols="40" name="message"></textarea><br>                               
  <input type="submit" name="submit" value="Submit Feedback">                                         
  <input type="reset" value="Reset">
  </form>                                                                                             
  <?php                                                                                               
} else {    // the user has submitted the form                                                        
  // Check if the "from" input field is filled out                                                    
  if (isset($_POST["from"])) {                                                                        
    $from = $_POST["from"]; // sender                                                                 
    $subject = $_POST["subject"];                                                                     
    $message = $_POST["message"];                                                                     
    // message lines should not exceed 70 characters (PHP rule), so wrap it                           
    $message = wordwrap($message, 70);                                                                
    // send mail                                                                                      
    mail("amandeeppremi@gmail.com",$subject,$message,"From: $from\n");                                
    echo "Thank you for sending us feedback";                                                         
  }                                                                                                   
}                                                                                                     
?>    
<script language="JavaScript">                                                                        
// Code for validating the form                                                                       
// Visit http://www.javascript-coder.com/html-form/javascript-form-validation.phtml                   
// for details
var frmvalidator  = new Validator("myemailform");                                                     
frmvalidator.addValidation("name","req","Please provide your name");                                  
frmvalidator.addValidation("from","req","Please provide your email");                                
frmvalidator.addValidation("email","email","Please enter a valid email address");                     
</script>

<!--			</form></p -->
			<h3>Recent Testimonials</h3>
                        <ul class="news">
                                <li>
                                       <fieldset> "Dr. Singh has a big butt and I like it." - Anonymous</fieldset>
                                </li>
                                <li>
                                        <fieldset>"The equipment here tastes like stale paan and I love it" - Ram charan</fieldset>
                                </li>
                                <li>
                                        <fieldset>"Daktar Sahab bahot badhiya insaan hain"- Asharam</fieldset>
                                </li>
                                <li>
                                        <fieldset>"Meri maano aur kisi achche Doctor ko dikha lo, inke chakkar mein mat pado" - Hot_Tina91</fieldset>
                                </li>
                                <li>
                                        <fieldset>"Best nimbu pani in town, right behind the clinic, must try." - Jaskaran</fieldset>
                                </li>
                        </ul>

			</div>	
		</div>
	</div>
                <div id="footer">
                        <div>
                                <div>
                                <h3>Netaji Nagar</h3>
                                <ul>
                                        <li>+91-9711928585 mobile</li>
                                        <li>011-26118002 clinic</li>
                                </ul>
                        </div>
                        <div>
                                <h3>Kalkaji</h3>
                                <ul>
                                        <li>+91-9711528585 mobile</li>
                                </ul>
                        </div>
                        <div>
                                <ul>
                                        <li>Click <a href="Perfect32_Brochure.pdf"><span>here</span></a> to Download our Brochure</li>
                                </ul>
                        </div>
                        <div>
                                <h3>follow us on facebook:</h3>
                                <a class="facebook" href="https://www.facebook.com/perfect32dentalcarenetajinagar" target="_blank">facebook</a>
                        </div>
                </div>
                <div>
                        <p>&copy Copyright 2014. All rights reserved</p>
                </div>
        </div>

	</body>
</html>
