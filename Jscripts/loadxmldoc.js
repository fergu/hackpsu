function loadXMLDoc()
{
	if (window.XMLHttpRequest)
  	{
  		xhttp=new XMLHttpRequest();
  	}
	else // code for IE5 and IE6
  	{
  		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
 	}
	xhttp.open("GET","recipes/recipes.xml",false);
	xhttp.send();

	document.getElementById('txtid').value = xhttp.responseXML;
	return xhttp.responseXML;
}
