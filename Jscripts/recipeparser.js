var RecipeResponse;
var CurrentRecipe;

loadRecipeFile();

$("a#recipelink").click(function() {
	var rname = $(this).attr("mval");
	attrs = loadRecipeAttributes(rname);
	CurrentRecipe = attrs;
	var mkbld = "<b>Recipe Title: ";
	mkbld = mkbld.concat(attrs.title,"</b>");
	document.getElementById("Recipename").innerHTML = mkbld;
	steps = attrs.steps;
	ings = attrs.ingredients;
	var stepstring = "<ul>";
	var ingr = "<b>Ingredients</b><br><ul>";
	for (var i=0;i<steps.length;i++) {
		stepstring = stepstring.concat("<li>Step ", i+1, ": ", steps[i].childNodes[0].nodeValue, "</li>");
	}
	stepstring = stepstring.concat("</ul>");

	for (i=0; i<ings.length;i++) {
		ingr = ingr.concat("<li>", ings[i].getAttribute("quantity"), "x ", ings[i].getAttribute("name"), "</li>");
	}
	ingr = ingr.concat("</ul>");

	document.getElementById("time").innerHTML = "Estimated Time: Over 9000";
	document.getElementById("steps").innerHTML = stepstring;
	document.getElementById("Recipeingredients").innerHTML = ingr;
	document.getElementById("results").scrollIntoView();

	readyToRead();
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
	toreturn["ingredients"] = therecipe.getElementsByTagName("Ingredient");
	return toreturn;
}
