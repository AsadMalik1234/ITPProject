<!DOCTYPE html>
<html>
	<head>
		<title>Ireland Rising</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<link rel="stylesheet" href="css/style.css" />
		
		
		
		
		
		
		
		
		
		
		
		 <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #map {
        height: 100%;
      }
      
    </style> 
	</head>
	<body>
		
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
<div id="wrapper">
	<div id="top">
		
	</div>
	<div class="alt1 padding" id="map">
		<p>this is the area of map</p>
		
		
	</div>
	
	
	<div class="alt3 padding" id="game">

	<p> games in this section</p>

	</div>
	
	
	<div class="alt4 padding" id="info">

	<h1> infromation of gif</h1>
	
	</div>
	
	<div class="alt5 padding" id="google_map">

		<p> google API</p>



	</div>
</div>
<!--	
<a href="https://itpproject-asadmalik111.c9users.io/PROJECT%201/index1.1.php"><img src="next.jpeg" alt="next page" style="width:50px;height:50px;border:0"> </a>

<p>Click the button to display a string as a hyperlink.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>
-->

<script> 

  
   
   
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('google_map'), {
          center: {lat: 53.2734, lng: -7.77832031},
          zoom: 8
        });
      }
   </script>
   
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD33cNOsnapYNV8F5TrzVx5Hyk4ayw9oqQ&callback=initMap"
    async defer></script>



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
	</body>
</html>