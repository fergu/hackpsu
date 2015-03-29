var RecipeResponse;
var RecipeTitle;
var RecipeSteps;

loadRecipeFile();

$("a#recipelink").click(function() {
	var rname = $(this).attr("mval");
	loadRecipeAttributes(rname);
	document.getElementById("Recipename").innerHTML = RecipeTitle;

	var stepstring = "<ul>";
	for (var i=0;i<RecipeSteps.length;i++) {
		stepstring.concat("<li>");
		thisstep = RecipeSteps[i].getElementsByTagName("text");
		console.log(thisstep);
		stepstring.concat(thisstep);
		stepstring.concat("</li>");
	}
	stepstring.concat("</ul>");
	document.getElementById("time").innerHTML = "Over 9000";
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
	RecipeTitle = therecipe.getAttribute("title");
	RecipeSteps = therecipe.getElementsByTagName("Steps");
}
