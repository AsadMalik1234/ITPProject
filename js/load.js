// JavaScript File

var map;
function initialize() {
  var mapOptions = {
   center: new google.maps.LatLng(40.5472,12.282715),
   zoom: 6,
   mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("google_map"), mapOptions);
}
//google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, "resize", function() {
 var center = map.getCenter();
 google.maps.event.trigger(map, "resize");
 map.setCenter(center); 
});
/*
    function initMap() {
        map = new google.maps.Map(document.getElementById('google_map'), {
        center: {lat: 53.2734, lng: -9.77832031},
        zoom: 6
        });
    }
*/
//////////////////////////// Code to display information after gif has been clicked ///////////////////////////////////
var marker;
function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction1(xhttp);
    }
  };
  xhttp.open("GET", "database_v1.xml", true);
  xhttp.send();
  event1();
}
function myFunction1(xml) {
  var xmldb = xml.responseXML;
  var content="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmldb.getElementsByTagName("event");
  content += "<p>" +
  x[0].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[0].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[0].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
document.getElementById("info").innerHTML = content;
}

// -- SHOW LOCATION OF THE EVENT ON GOOGLE MAP -- //
function event1() {
  var position = new google.maps.LatLng(53.4045, -8.7670);
  //map.setCenter(new google.maps.LatLng(53.4045, -8.7670));
  map.setCenter(position);
  map.setZoom(15);
  if (marker) {
    marker.setPosition(position);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat: 53.4045, lng: -8.7670},
    map: map
  });
 }
}

/////////////////////////////////////////////////

function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction2(xhttp);
    }
  };
  xhttp.open("GET", "database_v1.xml", true);
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
document.getElementById("info").innerHTML = content;
}

function event2() {
  var position = new google.maps.LatLng(54.3180, -8.031);
  map.setCenter(position);
  map.setZoom(15);
  if (marker) {
    marker.setPosition(position);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat: 54.3180, lng: -8.031},
    map: map
  });
 }
}

//////////////////////////////////////////////


function loadDoc3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction3(xhttp);
    }
  };
  xhttp.open("GET", "database_v1.xml", true);
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
document.getElementById("info").innerHTML = content;
}

function event3() {
  var position = new google.maps.LatLng(53.37022057, -6.2512207);
  map.setCenter(position);
  map.setZoom(15);
  if (marker) {
    marker.setPosition(position);
  }
  else {
    marker = new google.maps.Marker({
    position: {lat: 53.37022057, lng: -6.2512207},
    map: map
  });
 }
}