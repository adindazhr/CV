let openNav = 1;

function openNav()
{
  document.getElementByClass("sidebar").style.width = "250px";
  document.getElementByClass("main_content").style.marginLeft = "250px";
}

function closeNav()
{
  document.getElementByClass("sidebar").style.width = "0";
  document.getElementByClass("main_content").style.marginLeft= "0";
}

if(openNav == 1)
{
  document.querySelector('button').onclick = closeNav();
  openNav=0;
}
else
{
  document.querySelector('button').onclick = openNav();
  openNav=1;
}