// On cré une variable pour voir ce qui se passe sur le lien a href

// On ajoute un évènement pour écouter le clic sur le lien

function displayMessage()
{
    console.log("into function", document.getElementById("pres"));
    // Si le lien est cliqué et que la div est invisble on la rend visible sinon on la rend invisible
    // if (document.getElementById("pres").display===none)
    //     {
    //         document.getElementById("pres").innerHTML
    //         console.log("display");
    //     }
    //     else
    //     {
    //         //document.getElementById("pres").display=none;
    //         console.log("not display");
    //     }
    document.getElementById("pres").displayMessage;
}
document.addEventListener("click", displayMessage);

/*document.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World!";
});*/ 

//display function:

