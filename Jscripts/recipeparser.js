var RecipeResponse;

loadRecipeFile();

$("a#recipelink").click(function() {
	var rname = $(this).attr("mval");
	attrs = loadRecipeAttributes(rname);
	document.getElementById("Recipename").innerHTML = attrs.title;
	steps = attrs.steps;
	var stepstring = "<ul>";
	for (var i=0;i<steps.length;i++) {
		stepstring = stepstring.concat("<li>Step ", i+1, ": ", steps[i].childNodes[0].nodeValue, "</li>");
	}
	stepstring = stepstring.concat("</ul>");
	document.getElementById("time").innerHTML = "Estimated Time: Over 9000";
	document.getElementById("steps").innerHTML = stepstring;
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
			return RecipeResponse = xmlhttp.responseXML;
		}
	}	

	xmlhttp.open("GET","./recipes/recipes.xml",true);
	xmlhttp.send();
}

function loadRecipeAttributes(rname) {
	var recipes = RecipeResponse.getElementsByTagName("Recipe");
	var therecipe;

	for (var i=0;i<recipes.length;i++) {
		var thisName = recipes[i].getAttribute("title");
		if (thisName == rname) {
			therecipe = recipes[i];
			break;
		}
	}
	var toreturn = {};
	toreturn["title"] = therecipe.getAttribute("title");
	toreturn["steps"] = therecipe.getElementsByTagName("step");

	return toreturn;
}
