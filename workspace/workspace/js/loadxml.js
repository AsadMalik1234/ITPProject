// JavaScript File
/*
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
*/
// Function for period buttons, when clicked then it hides marker and zoom out the map //
function googleMapCenter(){
  //marker.setMap(false);
  var position = new google.maps.LatLng(53.2734, -7.77832031);
  //map.setCenter(new google.maps.LatLng(53.4045, -8.7670));
  map.setCenter(position);
  map.setZoom(7);
  marker.setVisible(false);
}

//////////////////////////// Code to display information after gif has been clicked ///////////////////////////////////
//--------------------------------------------GAA-----------------------------------------------
var marker;
var position;
function event2() {
  position = new google.maps.LatLng(52.46934, -8.17202);
  map.setCenter(position);
  map.setZoom(9);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: position,
    map: map
  });
 }
}

function loadDoc2() {
  var row = 0;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event2();
}
//--------------------------------------Famine-----------------------------------------------------

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
    position: position,
    map: map
  });
 }
}
function loadDoc3() {
  var row = 1;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event3();
}

//---------------------------------------------FirstDail--------------------------------------
function event7() {
  //marker.setMap(map);
  position = new google.maps.LatLng(53.37022057, -6.2512207);
  map.setCenter(position);
  map.setZoom(9);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: position,
    map: map
  });
 }
}
function loadDoc7() {
  var row = 5;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event7();
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
    position: position,
    map: map
  });
 }
}
function loadDoc4() {
  var row = 2;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event4();
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
    position: position,
    map: map
  });
 }
}
function loadDoc5() {
  var row = 3;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event5();
}

//---------------------------------------------Civil_War--------------------------------------
function event6() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(51.50735, -0.12776);
  map.setCenter(position);
  map.setZoom(10);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: position,
    map: map
  });
 }
}
function loadDoc6() {
  var row = 6;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event6();
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
    position: position,
    map: map
  });
 }
}
function loadDoc8() {
  var row = 9;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event8();
}

//---------------------------------------------Omagh--------------------------------------
function event16() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(54.59771, -7.30996);
  map.setCenter(position);
  map.setZoom(8);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: position,
    map: map
  });
 }
}
function loadDoc16() {
  var row = 12;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event16();
}

//---------------------------------------------Rec--------------------------------------
function event9() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(53.37022057, -6.2512207);
  map.setCenter(position);
  map.setZoom(8);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: position,
    map: map
  });
 }
}
function loadDoc9() {
  var row = 13;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event9();
}


//---------------------------------------------1916--------------------------------------
function event10() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(53.37022057, -6.2512207);
  map.setCenter(position);
  map.setZoom(8);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: position,
    map: map
  });
 }
}
function loadDoc10() {
  var row = 7;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event10();
}

//---------------------------------------------Celtic_Tiger--------------------------------------
function event11() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(53.37022057, -6.2512207);
  map.setCenter(position);
  map.setZoom(8);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: position,
    map: map
  });
 }
}
function loadDoc11() {
  var row = 14;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event11();
}

//---------------------------------------------Eurovision--------------------------------------
function event12() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(51.89886	, -8.48490);
  map.setCenter(position);
  map.setZoom(8);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: position,
    map: map
  });
 }
}
function loadDoc12() {
  var row = 15;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event12();
}

//---------------------------------------------TheRecess 80's--------------------------------------
function event13() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(53.37022057, -6.2512207);
  map.setCenter(position);
  map.setZoom(7);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: position,
    map: map
  });
 }
}
function loadDoc13() {
  var row = 10;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event13();
}

//---------------------------------------------WIP--------------------------------------
function event14() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(53.28746, -7.48529);
  map.setCenter(position);
  map.setZoom(9);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: position,
    map: map
  });
 }
}
function loadDoc14() {
  var row = 8;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event14();
}

//---------------------------------------------Emmigration--------------------------------------
function event15() {
  //marker.setMap(map);
  var position = new google.maps.LatLng(51.89886	, -8.48490);
  map.setCenter(position);
  map.setZoom(9);
  if (marker) {
    marker.setPosition(position);
    marker.setVisible(true);
  }
  else {
    marker = new google.maps.Marker({
    position: position,
    map: map
  });
 }
}
function loadDoc15() {
  var row = 4;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event15();
}

//---------------------------------------------RTE--------------------------------------
function event17() {
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
    position: position,
    map: map
  });
 }
}
function loadDoc17() {
  var row = 11;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp, row);
    }
  };
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
  event17();
}

// --- LOAD DATA FROM XML FILE FOR ALL GIFS --- //
function myFunction(xml, row) {
  var rowNum = row;
  var asd = xml.responseXML;
  
  var content="<h1>Event information</h1>";
  var x = asd.getElementsByTagName("event");
  content += "<p>Event name: " +
  x[rowNum].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>Year: " +
  x[rowNum].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>Location: " + 
  x[rowNum].getElementsByTagName("location")[0].childNodes[0].nodeValue +
  "</p><br><p>Information: " + 
  x[rowNum].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
document.getElementById("history").innerHTML = content;
}
