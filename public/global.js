window.onload = function() {
  var aboutTab = document.querySelector("#about");
  var concertsTab = document.querySelector("#concerts");
  var discographyTab = document.querySelector("#discography");
  
  aboutTab.style.display = "none";
  concertsTab.style.display = "none";
  discographyTab.style.display = "none";
 
  //nav unordered list -- refactor ones below into function with type of tab as parameter?
  var navlist = document.getElementsByTagName("ul")[0]; 
  //about list item
  var aboutLink = navlist.getElementsByTagName("li")[0];
  //concerts list item
  var concertsLink = navlist.getElementsByTagName("li")[1];
  //discography list item
  var discographyLink = navlist.getElementsByTagName("li")[2];
  
  aboutLink.getElementsByTagName("a")[0].onclick = function(){
    aboutTab.style.display = "block";
    concertsTab.style.display = "none";
    discographyTab.style.display = "none";
  }
    
  concertsLink.getElementsByTagName("a")[0].onclick = function(){
    concertsTab.style.display = "block";
    aboutTab.style.display = "none";
    discographyTab.style.display = "none";
  }
  
  discographyLink.getElementsByTagName("a")[0].onclick = function(){
    discographyTab.style.display = "block";
    concertsTab.style.display = "none";
    aboutTab.style.display = "none";
  }
}