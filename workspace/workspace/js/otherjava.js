// JavaScript File

function googleMapCenter(){
  //marker.setMap(false);
  var position = new google.maps.LatLng(53.2734, -7.77832031);
  //map.setCenter(new google.maps.LatLng(53.4045, -8.7670));
  map.setCenter(position);
  map.setZoom(7);
  marker.setVisible(false);
}

//////////////////////////// Code to display information after gif has been clicked ///////////////////////////////////
var marker;
/*
function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction1(xhttp);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event1();
}
function myFunction1(xml) {
  var xmldb = xml.responseXML;
  var content="&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmldb.getElementsByTagName("event");
  content += "<p>" +
  x[0].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[0].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[0].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
document.getElementById("history").innerHTML = content;
}
*/
// -- SHOW LOCATION OF THE EVENT ON GOOGLE MAP -- //
//--------------------------------------GAA----------------------------------------
function event2() {
  //var position = new google.maps.LatLng(52.47357959, -8.15940857);
  var position = new google.maps.LatLng(52.47357, -8.15940);
  map.setCenter(position);
  map.setZoom(9);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat: 52.47357, lng: -8.15940},
    map: map
  });
 }
}

function event3() {
  var position = new google.maps.LatLng(53.26863, -9.05424);
  map.setCenter(position);
  map.setZoom(9);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat: 53.26863, lng: -9.05424},
    map: map
  });
 }
}
//////////////////////////////////////GAAInfo///////////////////////////////////////////

function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction2(xhttp);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event2();
}
function myFunction2(xml) {
  var xmldb = xml.responseXML;
  var content="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmldb.getElementsByTagName("event");
  content += "<p>" +
  x[1].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[1].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[1].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
document.getElementById("history").innerHTML = content;
}
//--------------------------------------Famine-----------------------------------------------------
function event3() {
  //marker.setMap(map);
  //marker.setVisible(true);
  var position = new google.maps.LatLng(53.26863, -9.05424);
  map.setCenter(position);
  map.setZoom(9);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat: 53.26863, lng: -9.05424},
    map: map
  });
 }
}




function loadDoc3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction3(xhttp);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event3();
}
function myFunction3(xml) {
  var xmldb = xml.responseXML;
  var content="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmldb.getElementsByTagName("event");
  content += "<p>" +
  x[2].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[2].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[2].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
document.getElementById("history").innerHTML = content;
}
//------------------------------------Fenian_Rising-----------------------------------------------
function event4() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(53.37022057, -6.2512207);
  map.setCenter(position);
  map.setZoom(9);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat: 53.37022057, lng: -6.2512207},
    map: map
  });
 }
}
function loadDoc4() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction4(xhttp);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event4();
}
function myFunction4(xml) {
  var xmldb = xml.responseXML;
  var content="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmldb.getElementsByTagName("event");
  content += "<p>" +
  x[2].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[2].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[2].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
document.getElementById("history").innerHTML = content;
}
//---------------------------------------------Tith--------------------------------------
function event5() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(54.3180, -8.15940857);
  map.setCenter(position);
  map.setZoom(9);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat: 54.3180, lng: -8.15940857},
    map: map
  });
 }
}
function loadDoc5() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction5(xhttp);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event5();
}
function myFunction5(xml) {
  var xmldb = xml.responseXML;
  var content="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmldb.getElementsByTagName("event");
  content += "<p>" +
  x[2].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[2].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[2].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
document.getElementById("history").innerHTML = content;
}
//---------------------------------------------Civil_War--------------------------------------
function event6() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(54.3800, -8.15940857);
  map.setCenter(position);
  map.setZoom(15);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat: 54.3800, lng: -8.15940857},
    map: map
  });
 }
}
function loadDoc6() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction6(xhttp);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event6();
}
function myFunction6(xml) {
  var xmldb = xml.responseXML;
  var content="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmldb.getElementsByTagName("event");
  content += "<p>" +
  x[2].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[2].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[2].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
document.getElementById("history").innerHTML = content;
}
//---------------------------------------------Troubles--------------------------------------
function event8() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(54.46097, -6.85430);
  map.setCenter(position);
  map.setZoom(8);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat: 54.46097, lng: -6.85430},
    map: map
  });
 }
}
function loadDoc8() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction8(xhttp);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event8();
}
function myFunction8(xml) {
  var xmldb = xml.responseXML;
  var content="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmldb.getElementsByTagName("event");
  content += "<p>" +
  x[2].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[2].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[2].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
document.getElementById("history").innerHTML = content;
}
//---------------------------------------------Omagh--------------------------------------
function event7() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(54.54782, -7.74182);
  map.setCenter(position);
  map.setZoom(8);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat: 54.54782, lng: -7.74182},
    map: map
  });
 }
}
function loadDoc7() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction7(xhttp);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event7();
}
function myFunction7(xml) {
  var xmldb = xml.responseXML;
  var content="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmldb.getElementsByTagName("event");
  content += "<p>" +
  x[2].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[2].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[2].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
document.getElementById("history").innerHTML = content;
}
//---------------------------------------------Rec--------------------------------------
function event9() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(53.32482, -7.56535);
  map.setCenter(position);
  map.setZoom(8);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat:53.32482, lng: -7.56535},
    map: map
  });
 }
}
function loadDoc9() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction9(xhttp);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event9();
}
function myFunction9(xml) {
  var xmldb = xml.responseXML;
  var content="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmldb.getElementsByTagName("event");
  content += "<p>" +
  x[2].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[2].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[2].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
document.getElementById("history").innerHTML = content;
}

//---------------------------------------------1916--------------------------------------
function event10() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(53.32482, -7.56535);
  map.setCenter(position);
  map.setZoom(8);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat:53.32482, lng: -7.56535},
    map: map
  });
 }
}
function loadDoc10() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction9(xhttp);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event10();
}
function myFunction10(xml) {
  var xmldb = xml.responseXML;
  var content="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmldb.getElementsByTagName("event");
  content += "<p>" +
  x[2].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[2].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[2].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
document.getElementById("history").innerHTML = content;
}
//---------------------------------------------Celtic_Tiger--------------------------------------
function event11() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(53.32482, -7.56535);
  map.setCenter(position);
  map.setZoom(8);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat:53.32482, lng: -7.56535},
    map: map
  });
 }
}
function loadDoc11() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction9(xhttp);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event11();
}

function myFunction11(xml) {
  var xmldb = xml.responseXML;
  var content="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmldb.getElementsByTagName("event");
  content += "<p>" +
  x[2].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[2].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[2].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
document.getElementById("history").innerHTML = content;
}
