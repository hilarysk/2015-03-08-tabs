window.onload = function() {
  
  //CREATE VARS FOR NAV LINKS
 
  //nav unordered list
  var navlist = document.getElementsByTagName("ul")[0]; 
  //about list item / link
  var aboutLI = navlist.getElementsByTagName("li")[0];
  var aboutLink = aboutLI.getElementsByTagName("a")[0];
  //concerts list item / link
  var concertsLI = navlist.getElementsByTagName("li")[1];
  var concertsLink = concertsLI.getElementsByTagName("a")[0];
  //discography list item / link
  var discographyLI = navlist.getElementsByTagName("li")[2];
  var discographyLink = discographyLI.getElementsByTagName("a")[0];
  
  //CHANGE LINKS SO THAT DOESN'T MOVE PAGE
  
  aboutLink.setAttribute('href', 'javascript:void(0)');
  concertsLink.setAttribute('href', 'javascript:void(0)');
  discographyLink.setAttribute('href', 'javascript:void(0)');
    
  //SET VARS FOR EACH TAB CONTENT
  
  var aboutTab = document.querySelector("#about");
  var concertsTab = document.querySelector("#concerts");
  var discographyTab = document.querySelector("#discography");
  
  //START OUT WITH ABOUT TAB SHOWING
  
  aboutLI.style.backgroundColor = "#FFFFFF";
  aboutTab.style.display = "inline-block";
  concertsTab.style.display = "none";
  discographyTab.style.display = "none";
  
  
  //LOAD EACH TAB ON-CLICK AND RE-HIDE OTHER TABS
  
  //about
  aboutLink.onclick = function(){
    aboutTab.style.display = "inline-block";
    concertsTab.style.display = "none";
    discographyTab.style.display = "none";

    aboutLI.style.backgroundColor = "#FFFFFF"; 
    concertsLI.style.backgroundColor = "#B0B0B0";
    discographyLI.style.backgroundColor = "#B0B0B0";
  }
    
  //concerts
    
  concertsLink.onclick = function(){
    concertsTab.style.display = "inline-block";
    aboutTab.style.display = "none";
    discographyTab.style.display = "none";
    
    concertsLI.style.backgroundColor = "#FFFFFF";
    discographyLI.style.backgroundColor = "#B0B0B0";   
    aboutLI.style.backgroundColor = "#B0B0B0";      
  }
  
  //discography
  
  discographyLink.onclick = function(){
    discographyTab.style.display = "inline-block";
    concertsTab.style.display = "none";
    aboutTab.style.display = "none";
    
    discographyLI.style.backgroundColor = "#FFFFFF";    
    concertsLI.style.backgroundColor = "#B0B0B0";   
    aboutLI.style.backgroundColor = "#B0B0B0";   
  }
}