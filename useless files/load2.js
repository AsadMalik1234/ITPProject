// JavaScript File

function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction1(xhttp);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
}
function myFunction1(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  
  var div="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmlDoc.getElementsByTagName("CD");
  div += "<p>" +
  x[0].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[0].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[0].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
  

document.getElementById("info").innerHTML = div;
}


/////////////////////////////////////////////////

function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction2(xhttp);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
}
function myFunction2(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  
  var div="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmlDoc.getElementsByTagName("CD");
  div += "<p>" +
  x[1].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[1].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[1].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
  

document.getElementById("info").innerHTML = div;
}


//////////////////////////////////////////////


function loadDoc3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction3(xhttp);
    }
  };
  xhttp.open("GET", "../db.xml", true);
  xhttp.send();
}
function myFunction3(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  
  var div="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmlDoc.getElementsByTagName("CD");
  div += "<p>" +
  x[2].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[2].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[2].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
  

document.getElementById("info").innerHTML = div;
}