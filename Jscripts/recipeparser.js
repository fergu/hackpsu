var RecipeResponse;

$("a#recipelink").click(function() {
	var val = $(this).attr("mval");
	document.getElementById("Recipename").value = "test";
	document.getElementById("time").value = "time";
	document.getElementById("results").scrollIntoView();
	return false;
})

function loadRecipeFile() {
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
	 	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			RecipeResponse = xmlhttp.responseXML;
		}
	}	

	xmlhttp.open("GET","./recipes/recipes.xml",true);
	xmlhttp.send();
}

function getRecipeNamed(rname) {
	var tag = RecipeResponse.getElementsByTagName("Recipe")[1];
	document.getElementById("resultz").value = tag.getAttribute("title");
}

function loadRecipeFromLink(link) {
	console.log(link);
	var title = link.text();
	console.log(title);
}
