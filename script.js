let visible = document.getElementById("visibleHidden");
// On ajoute un évènement pour écouter le clic sur le paragrapke
visible.addEventListener("click");
if (getComputedStyle("pres").display ==none)
{
    getComputedStyle("pres").display=true;
}
else
{
    getComputedStyle("pres").display=false;
}