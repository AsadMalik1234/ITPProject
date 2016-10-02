/*
function start(){
    data();
    initMap();
    
}


function data(){
   
    $.ajax({
        url: "event.php"
    }).done(function(data) {
        $('#wrapper2').html(data);
    });
}
function first(){
    var num = 1;
    $.ajax({
        url: "event.php",
        data: {x: num},
        type: 'POST'
    }).done(function(data) {
        $('#wrapper2').html(data);
    });
}
function second(){
    var num = 2;
    $.ajax({
        url: "event.php",
        data: {x: num},
        type: 'POST'
    }).done(function(data) {
        $('#wrapper2').html(data);
    });
}	
function third(){
    var num = 3;
    $.ajax({
        url: "event.php",
        data: {x: num},
        type: 'POST'
    }).done(function(data) {
        $('#wrapper2').html(data);
    });
}	
function fourth(){
    var num = 4;
    $.ajax({
        url: "event.php",
        data: {x: num},
        type: 'POST'
    }).done(function(data) {
        $('#wrapper2').html(data);
    });
}
*/

////////////// when clicked it moves to the set coordinates ////////////////////

//function placeMarker(location) {
//  if ( marker ) {
//    marker.setPosition(location);
//  } else {
//    marker = new google.maps.Marker({
//      position: location,
//      map: map
//    });
//  }
//}

//function changeMarkerPosition(marker) {
//    var latlng = new google.maps.LatLng(-24.397, 140.644);
//    marker.setPosition(latlng);
//}

/*
<script type="text/javascript">
	
	// JavaScript File

function load1() {
  document.getElementById("info").innerHTML = "this is working...";
  
}

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
  var x = xmlDoc.getElementsByTagName("event");
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
  var x = xmlDoc.getElementsByTagName("event");
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
  xhttp.open("GET", "db.xml", true);
  xhttp.send();
}
function myFunction3(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  
  var div="<h1>Artist</h1>&nbsp;&nbsp;&nbsp;<p>title</p>";
  var x = xmlDoc.getElementsByTagName("event");
  div += "<p>" +
  x[2].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</p>&nbsp;&nbsp;<p>" +
  x[2].getElementsByTagName("year")[0].childNodes[0].nodeValue +
  "</p><br><p>" + 
  x[2].getElementsByTagName("information")[0].childNodes[0].nodeValue +
  "</p>";
  

document.getElementById("info").innerHTML = div;
}
</script>

<!--
<script type="text/javascript" src="js/load2.js"></script>
-->



	<!--
<a href="https://itpproject-asadmalik111.c9users.io/PROJECT%201/index1.1.php"><img src="next.jpeg" alt="next page" style="width:50px;height:50px;border:0"> </a>

<p>Click the button to display a string as a hyperlink.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>
-->
<!--
<script> 

  
   
   
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('google_map'), {
          center: {lat: 53.2734, lng: -7.77832031},
          zoom: 8
        });
      }
   </script>
   -->



<!--	
	<div class="jumbotron">
		<div class="container">
			<h1>Hello World!</h1>
			<p>This is our demo site, I hope you like it!</p>
			<p>All code can be found on my GitHub account, and is free to use, modify and sell!</p>
			<p><a href="http://github.com/samcogan" target="_blank" class="btn btn-primary btn-lg">Show me the code!</a></p>
		</div>
	</div>
	
	
	<div class="alt1 padding" id="about">
	<div class="container">
	
		<div class="row">
			<div class="col-md-4">
				<h2 class="text-center">Past work</h2>
				<p class="text-justify">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
				<a href="#one" class="btn btn-default">Tell me more..</a>
			</div>
			<div class="col-md-4">
				<h2 class="text-center">Past work</h2>
				<p class="text-justify">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
				<a href="#two" class="btn btn-default">Tell me more..</a>
			</div>
			<div class="col-md-4">
				<h2 class="text-center">Past work</h2>
				<p class="text-justify">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
				<a href="#three" class="btn btn-default">Tell me more..</a>
			</div>
		
		</div>
	</div>	
	</div>
	
	
	<div class="container" id="portfolio">
		<div class="row padding" id="one">
			<div class="col-md-6">
				<img src="1.png" class="img-circle img-responsive" alt="Circular holding image"/>
			</div>
			<div class="col-md-6">
				<h2 class="text-center">Work 1</h2>
				<p class="text-justify">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
				
			</div>
		</div>	
		<hr />
		
		<div class="row padding" id="two">
			<div class="col-md-6">
				<h2 class="text-center">Work 2</h2>
				<p class="text-justify">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
				
			</div>
			<div class="col-md-6">
				<img src="2.png" class="img-circle img-responsive" alt="Circular holding image"/>
			</div>
		</div>
		<hr />
		<div class="row padding" id="three">
			<div class="col-md-6">
				<img src="3.png" class="img-circle img-responsive" alt="Circular holding image"/>
			</div>
			<div class="col-md-6">
				<h2 class="text-center">Work 3</h2>
				<p class="text-justify">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>	
			</div>
		</div>
		<hr />
	</div>
	
	<div class="container padding" id="contact">
		<form role="form">
			<div class="form-group">
				<label for="email">Email:</label>
				<input type="email" class="form-control" id="email" name="email" placeholder="example@example.com"/>
			</div>
			<div class="form-group">
				<label for="name">Name:</label>
				<input type="text" class="form-control" id="name" name="name" placeholder="Your name here"/>
			
			</div>
			<div class="form-group">
				<label for="message">Message:</label>
				<textarea class="form-control" name="message" id="message" placeholder="Your message here"></textarea>
			</div>
			<div class="form-group">
				<input type="checkbox" /> Send me promotional content
			</div>
			<button type="submit" class="btn btn-default">Submit</button>
		</form>
	</div>
	
	<div class="alt2">
		<div class="container">
			<footer>
				&copy; Sam Cogan <br />
				<a href="#home">Back to top</a>
			</footer>
		</div>
	</div>
	
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="js/bootstrap.js"></script>
	<script>
	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

	</script>-->
	
	<!--
	<div class="navbar-static-top " id="home">
		<div class="container">
			<div class="navbar-brand " style="width:100%;height:2px; ">
				
				<img src="name.png" alt="logo ">
				
				
			</div>
			<button class="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
				Menu
			</button>
			<div class="collapse navbar-collapse navHeaderCollapse">
				<h4 class="nav navbar-nav navbar-right">
					<li><a href="#">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#map">Map</a></li>
					<li><a href="#Games">Games</a></li>
					<li><a href="#iresh history">Irish History</a></li>
				</h4>
			</div>
		</div>
	</div>
	-->
	
	<!--
				<div class="alt3 padding" id="game">
					<embed src="images/RebelEscape.swf" width="100%" height="480" />
				</div>
				-->
				
<!--
<div id="welcome"><h2>Welcome</h2></div>
-->

	<!--
	<div class="alt5 padding" id="google_map">
		<p> google API</p>
	</div>
	-->
	<!--	<img src="map12.png" alt="logo " style="width:55%;height:70%;"> -->
	
	
	
	
	
	*/