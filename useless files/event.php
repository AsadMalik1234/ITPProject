
<?php

$numm = $_POST['x'];
if ($numm == 1){
$xml = new DOMDocument;
$xml->load('db.xml');
$xsl = new DOMDocument;
$xsl->substituteEntities = true; 
$xsl->load('event1.xsl');
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); 
echo $proc->transformToXML($xml);
}

elseif ($numm == 2){
$xml = new DOMDocument;
$xml->load('db.xml');
$xsl = new DOMDocument;
$xsl->substituteEntities = true; 
$xsl->load('event2.xsl');
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); 
echo $proc->transformToXML($xml);
}

elseif ($numm == 3){
$xml = new DOMDocument;
$xml->load('db.xml');
$xsl = new DOMDocument;
$xsl->substituteEntities = true; 
$xsl->load('event3.xsl');
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); 
echo $proc->transformToXML($xml);
}

elseif ($numm == 4){
$xml = new DOMDocument;
$xml->load('db.xml');
$xsl = new DOMDocument;
$xsl->substituteEntities = true; 
$xsl->load('event4.xsl');
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); 
echo $proc->transformToXML($xml);
}
else {
$xml = new DOMDocument;
$xml->load('db.xml');
$xsl = new DOMDocument;
$xsl->substituteEntities = true; 
$xsl->load('event1.xsl');
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); 
echo $proc->transformToXML($xml);
}   

?>