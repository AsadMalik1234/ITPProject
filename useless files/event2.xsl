<?xml version="1.0" ?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform"	version="1.0">
	<xsl:template match="*">
		<xsl:apply-templates/>
	</xsl:template>
	<xsl:template match="text()">
		<xsl:apply-templates/>
	</xsl:template>
	<xsl:template match="/">
		<html>
			<head>
				<title>Gamespot</title>
						<script type="text/javascript" src="js/load.js"></script>
						
			</head>
			<body>
				
			
			<div id="content">
				
				<div class="jumbotron">
					<div class="container">
					<img src="images/name.png" alt="logo"/>
					</div>
				</div>
				<div class="alt1 padding" id="map"> 
			
				<!--	<img src="map12.png" alt="logo " style="width:55%;height:70%;"> -->
				
				<img src="images/ireland_map2.png" alt="map of ireland" id="ireland_map"/>
				<img src="images/Civil_War.gif" id="civil_war"/>
				<img src="images/Famine_Fin.gif" id="famine"/>
				<img src="images/Fenian_Fin.gif" id="fenian"/>
				<div id="buttons">
				<button type="button" id="first" onclick="first()">1830 - 1900</button>&#160;&#160;
				<button type="button" id="second" onclick="second()">1900 - 1945</button>&#160;&#160;
				<button type="button" id="third" onclick="third()">1945 - 1980</button>&#160;&#160;
				<button type="button" id="fourth" onclick="fourth()">1980 - 2016</button>
				</div>
				</div>
				<div class="alt3 padding" id="game">
					<embed src="images/RebelEscape.swf" width="100%" height="480" />
				</div>
				<div class="alt4 padding" id="info">
				<h1> infromation of gif</h1>
				<p>Name <xsl:apply-templates select="/catalog/event[2]/name"/></p>
				<p>Info <xsl:apply-templates select="/catalog/event[2]/information"/></p>
				</div>
				<!--
				<div class="alt5 padding" id="google_map">
					<p> google API</p>
				</div>
				-->
	
				<!--
				<div id="top">
					<img src="name.png" alt="logo ">
				</div>
				
				<div class="alt1 padding" id="map">
				<h2>Year <xsl:apply-templates select="/catalog/event[1]/year"/> </h2>
				<button type="button" id="first" onclick="first()">1830 - 1900</button>
				<button type="button" id="second" onclick="second()">1900 - 1945</button>
				<button type="button" id="third" onclick="third()">1945 - 1980</button>
				<button type="button" id="fourth" onclick="fourth()">1980 - 2016</button>
				</div>
				
				
				<div class="alt3 padding" id="game">

				<p> games in this section</p>
				
				</div>
				
				
				<div class="alt4 padding" id="info">

				<p>Name <xsl:apply-templates select="/catalog/event[1]/name"/></p>
				<p>Info <xsl:apply-templates select="/catalog/event[1]/information"/></p>
				
				</div>
				
				<div class="alt5 padding" id="google_map">

				<p> api in this section</p>
				
				</div>
				-->
			</div>
			</body>
					
		</html>
	</xsl:template>
	
	<xsl:template match="name">
		<xsl:value-of select="."/>
	</xsl:template>
	<!--
	<xsl:template match="year">
		<xsl:value-of select="."/>
	</xsl:template>-->
	<xsl:template match="information">
		<xsl:value-of select="."/>
	</xsl:template>
	
	
</xsl:transform>