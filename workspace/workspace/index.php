<!DOCTYPE html>
<html>
	<head>
		<title>Ireland Rising</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<link rel="stylesheet" href="css/style.css" />
		
		<script type="text/javascript" src="js/loadxml.js"></script>
		<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>

<!--this code if for hideing the gifs -->
		<script type="text/javascript"> 
		//$(document).ready(function(){
		//        $("#welcome").delay(700).fadeOut();
		//});
		 
		$(document).ready(function(){
		    $('#imgbox2').hide();
		    $('#imgbox3').hide();
		    $('#imgbox4').hide();
		    $('#game2').hide();
		    $('#game3').hide();
		    $('button[name="change"]').click(function(e){
		        var btnClick = $(this).val();
		        if(btnClick === 'one'){
		        			$('#imgbox').show();
		            		$('#imgbox2').hide();
		    				$('#imgbox3').hide();
		    				$('#imgbox4').hide();
		    				$('#game1').show();
		    				$('#game2').hide();
		      				$('#game3').hide();
		        }
		        else if(btnClick === 'two'){
		        			$('#imgbox').hide();
		        			$('#imgbox2').show();
		    				$('#imgbox3').hide();
		    				$('#imgbox4').hide();
		    				$('#game1').hide();
		    				$('#game2').show();
		      				$('#game3').hide();
		        }
		        else if(btnClick === 'three'){
		        		$('#imgbox').hide();
		            	$('#imgbox2').hide();
		    				$('#imgbox3').show();
		    				$('#imgbox4').hide();
		    				$('#game1').hide();
		    				$('#game2').hide();
		      				$('#game3').show();
		        }
		        else{
		            $('#imgbox').hide();
		            $('#imgbox2').hide();
		    		$('#imgbox3').hide(); 
		    		$('#imgbox4').show();
		    		$('#game1').hide();
		    		$('#game2').hide();
		      		$('#game3').show();
		        } 
		    });
		});
			$(function() {
	        $("#FirstDail").hover(
	            function() {
	                $(this).attr("src", "images/FirstDail.gif");
	            },
	            function() {
	                $(this).attr("src", "images/_FirstDail.png");
	            }                         
	        );                  
	    });
		$(function() {
	        $("#tithe").hover(
	            function() {
	                $(this).attr("src", "images/Tithe.gif");
	            },
	            function() {
	                $(this).attr("src", "images/Tithe_Still.png");
	            }                         
	        );                  
	    });
		$(function() {
	        $("#civil_war").hover(
	            function() {
	                $(this).attr("src", "images/Civil_War_gif.gif");
	            },
	            function() {
	                $(this).attr("src", "images/CW_Still.png");
	            }                         
	        );                  
	    });
		$(function() {
	        $("#GAA").hover(
	            function() {
	                $(this).attr("src", "images/GAA.gif");
	            },
	            function() {
	                $(this).attr("src", "images/GAA_Still.png");
	            }                         
	        );                  
	   });  
						    
	    $(function() {
	        $("#famine").hover(
	            function() {
	                $(this).attr("src", "images/Famine_Gif.gif");
	            },
	            function() {
	                $(this).attr("src", "images/Famine_Still.png");
	            }                         
	        );                  
	    });
		
		  $(function() {
	        $("#fenian").hover(
	            function() {
	                $(this).attr("src", "images/Fenian_Uprising.gif");
	            },
	            function() {
	                $(this).attr("src", "images/Fenian_uprising_still.jpg");
	            }                         
	        );                  
	    });
	    $(function() {
	        $("#RTE").hover(
	            function() {
	                $(this).attr("src", "images/Rte.gif");
	            },
	            function() {
	                $(this).attr("src", "images/RTE.png");
	            }                         
	        );                  
	    });
	    $(function() {
	        $("#CW").hover(
	            function() {
	                $(this).attr("src", "images/Civil_War_gif.gif");
	            },
	            function() {
	                $(this).attr("src", "images/CW_Still.png");
	            }                         
	        );                  
	    });
	    $(function() {
	        $("#Troubles").hover(
	            function() {
	                $(this).attr("src", "images/Troubles.gif");
	            },
	            function() {
	                $(this).attr("src", "images/Troubles.png");
	            }                         
	        );                  
	    });
	     $(function() {
	        $("#Rec").hover(
	            function() {
	                $(this).attr("src", "images/Recession06.gif");
	            },
	            function() {
	                $(this).attr("src", "images/Recession06.png");
	            }                         
	        );                  
	    });
	    $(function() {
	        $("#Omagh").hover(
	            function() {
	                $(this).attr("src", "images/Omagh.gif");
	            },
	            function() {
	                $(this).attr("src", "images/Omagh~Still.png");
	            }                         
	        );                  
	    });
	    $(function() {
	        $("#a1916").hover(
	            function() {
	                $(this).attr("src", "images/1916Final.gif");
	            },
	            function() {
	                $(this).attr("src", "images/1916Final_Still.png");
	            }                         
	        );                  
	    });
	     $(function() {
	        $("#CT").hover(
	            function() {
	                $(this).attr("src", "images/Celtic_Tiger2.gif");
	            },
	            function() {
	                $(this).attr("src", "images/Celtic_Tiger_Still.png");
	            }                         
	        );                  
	    });
	     $(function() {
	        $("#E").hover(
	            function() {
	                $(this).attr("src", "images/Eurovision.gif");
	            },
	            function() {
	                $(this).attr("src", "images/Eurovision.png");
	            }                         
	        );                  
	    });
	     $(function() {
	        $("#R").hover(
	            function() {
	                $(this).attr("src", "images/TheRecess.gif");
	            },
	            function() {
	                $(this).attr("src", "images/_TheRecess.png");
	            }                         
	        );                  
	    });
	     $(function() {
	        $("#WIP").hover(
	            function() {
	                $(this).attr("src", "images/WarOfInd.gif");
	            },
	            function() {
	                $(this).attr("src", "images/_WarOfInd.png");
	            }                         
	        );                  
	    });
	    $(function() {
	        $("#Emmigration").hover(
	            function() {
	                $(this).attr("src", "images/Emmigration.gif");
	            },
	            function() {
	                $(this).attr("src", "images/Emmigration.png");
	            }                         
	        );                  
	    });
	     $(function() {
	        $("#RTE").hover(
	            function() {
	                $(this).attr("src", "images/Rte.gif");
	            },
	            function() {
	                $(this).attr("src", "images/RTE.png");
	            }                         
	        );                  
	    });
			</script>
		 <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    
    </style> 
	</head>
	<body>
		<div class="navbar-static-top navbar-inverse"  style="position: fixed;  width:100%;" id="#">
		<div class="container">
			<div class="navbar-brand">
				<img src="images/name.png" alt="logo ">
			</div>
			<button class="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse"><font color="white">Menu</font></button>
			<div class="collapse navbar-collapse navHeaderCollapse">
				<h4 class="nav navbar-nav navbar-right">
					<li><a href="#">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#irishhistory">Irish History</a></li>
					<li><a href="#games">Games</a></li>
					<li><a href="#feedback">FeedBack</a></li>
				</h4> 
			</div>
		</div>
	</div>
<!-- jumbotron code-->
	<div class="jumbotron">
		<div class="container">
			<h10><font color="white">.</font></h10>
			<h1><font color="white">Welcome to the site</font></h1>
			<h4><font color="white">The site you will find lots of history about ireland,as you click the gif on the ireland map on the left it will show you the location on google map where historical event happen and also its give you the information about the event below.  </font></h4>
		</div>
	</div>
	
<!--this section is map with gifs-->
	<div class="row padding" id="about">
			<br />
		<div class="col-md-6 oop">
			<div class="alt1 oop">
				<h2 class="text-center">Ireland Map/Gifs </h2>	
				<div class="alt1 padding" id="map"> 
				
				<img src="images/Ireland_Fin.png" alt="map of ireland" id="ireland_map"/>	
				
				<!-- GIFS FOR 1830 - 1900 GOES HERE -->
					<div id="imgbox">
						<img src="images/GAA_Still.png" id="GAA" onclick="loadDoc2()"/>
						<img src="images/Famine_Still.png" id="famine" onclick="loadDoc3()" title="Famine event information"/>
						<img src="images/Fenian_uprising_still.jpg" id="fenian"  onclick="loadDoc4()" title="Fenian uprising event information"/>
						<img src="images/Tithe_Still.png" id="tithe"  onclick="loadDoc5()" title="Tithe event information"/>
						<img src="images/Emmigration.png" id="Emmigration" onclick="loadDoc15()"/>
					</div>
					
					<!-- GIFS FOR 1900 - 1945 GOES HERE -->
					<div id="imgbox2">
						<img src="images/_FirstDail.png" id="FirstDail" onclick="loadDoc7()"/>
						<img src="images/CW_Still.png" id="CW" onclick="loadDoc6()"/>
						<img src="images/1916Final_Still.png" id="a1916" onclick="loadDoc10()"/>
						<img src="images/_WarOfInd.png" id="WIP" onclick="loadDoc14()"/>
					</div>
					
					<!-- GIFS FOR 1945 - 1980 GOES HERE -->
					<div id="imgbox3">
						<img src="images/Troubles.png" id="Troubles" onclick="loadDoc8()"/>
						<img src="images/_TheRecess.png" id="R" onclick="loadDoc13()"/>
						<img src="images/RTE.png" id="RTE" onclick="loadDoc17()"/>
					</div>
					
					<!-- GIFS FOR 1980 - 2016 GOES HERE -->
					<div id="imgbox4">
						<img src="images/Omagh~Still.png" id="Omagh" onclick="loadDoc16()"/>
						<img src="images/Recession06.png" id="Rec" onclick="loadDoc9()"/>
						<img src="images/Celtic_Tiger_Still.png" id="CT" onclick="loadDoc11()"/>
						<img src="images/Eurovision.png" id="E" onclick="loadDoc12()"/>
					</div>
					<!-- BUTTONS WHICH CHANGE PERIODS -->
				<div id="buttons">
				<button type="button" id="first" name="change" value="one" onclick="googleMapCenter()">1830 - 1900</button>&#160;&#160;
				<button type="button" id="second" name="change" value="two" onclick="googleMapCenter()">1900 - 1945</button>&#160;&#160;
				<button type="button" id="third" name="change" value="three" onclick="googleMapCenter()">1945 - 1980</button>&#160;&#160;
				<button type="button" id="fourth" name="change" value="four" onclick="googleMapCenter()">1980 - 2016</button>
				</div>
				
				</div>
			</div>
		</div>
			
			
<!--this section is map and google api-->	
		<div id="somecolor">
		<div class="col-md-6">
			<h2 class="text-center">Google Maps </h2>
			<div class="alt3 padding" id="google_map">

			</div>
		</div>
		</div>
	</div>	
	
	<script> 
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('google_map'), {
          center: {lat: 53.2734, lng: -7.77832031},
          zoom: 7
        });
      }
   </script>
   
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD33cNOsnapYNV8F5TrzVx5Hyk4ayw9oqQ&callback=initMap"async defer></script>
    <script type="text/javascript" src="js/load.js"></script>
		<h />
	
	<!-- this section is gifs information-->
	<div class="row padding" id="irishhistory">
			<div class="col-md-12">
				<h2 class='text-center'> Gifs information </h2>
				<div class="alt4 padding" id="history">
				
				</div>
			</div>
	</div>
		<hr />

<!--game section-->	
	<div class="row padding" id="games">
			<div class="col-md-12">
				<div class="alt5 padding" id="game">
					<h2 class="text-center">Games</h2>
					<div id="game1">
						<center>
							<embed src="images/Famine_Escape_V4.swf" width="50%" height="480" />
						</center>
					</div>
					<div id="game2">
						<center>
							<embed src="images/RebelEscape.swf" width="50%" height="480" />
						</center>
					</div>
					<div id="game3">
						<center>
							<embed src="images/BertieTheSnake.swf" width="50%" height="480" />
						</center>
					</div>
				</div>	
			</div>
	</div>
		<hr />
		
<!-- feedback section	-->
	<div class="container padding" id="feedback">
		<h2 class="text-center">FeedBack</h2>
		<form role="form" method="post">
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
			<button type="submit" class="btn btn-default" name="submit" value="Submit">Submit</button>
		</form>
	
		<?php
	    //Connect to the database
    if(isset($_POST["submit"])){
    $host = "127.0.0.1";
    $user = "asadmalik111";                     //Your Cloud 9 username
    $pass = "";                                 //Remember, there is NO password by default!
    $db = "workspace";                          //Your database name you want to connect to
    $port = 3306;                               //The port #. It is always 3306

    $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
    
	if ($connection->connect_error) {
	die("Connection failed: " . $connection->connect_error);
	}
    //And now to perform a simple query to make sure it's working
   $sql = "INSERT INTO IrelandT (email,name,message) VALUES('".$_POST[email]."','".$_POST[name]."','".$_POST[message]."')";
   $connection->query($sql);
    
   $connection->close();
}
?> 
	</div>


	<div class="alt2">
		<div class="container">
			<footer>
				<?php
			
				echo "Copyright &copy;   - " . date("Y") . " ";
				?>
				  <br />
				<a href="#">Back to top</a>
			</footer>
		</div>
	</div>
	
	
	<script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="workspace/js/bootstrap.js"></script>

	<script>

	$(function() {
  $('a[href*=#]:not([href=#home])').click(function() {
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
	</script>
	</body>
</html>