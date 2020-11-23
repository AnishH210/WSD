<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
	<html>
	<head>
	<style>
	
	
	
	body {
	background: #16a085;
	color: #fffcf2;
	font-size: 40px;
	margin-top: 50px;
	
	}
	
	
	table, th, td {
	width: 100%
	margin: auto;
	border: 1px solid white;
	border-collapse: collapse;
	text-align: center;
	font-size: 30px;
	table-layout: fixed;
	background: black;
	opacity: 0.8;
	color: white;
	margin-top: 50px;
	
}

th, td {
	padding: 20px;
	opacity: 1;
}

th {  
	color: #eb5e28;
}

	
	
	table.center {
	margin-left: auto;
	margin-right: auto;
	}
	
	
	


	</style>
	</head>	
		  <body>
		  <h2 align="center">Computer Services</h2>
		  <table class="center" border="1" align="center">
		  <tr bgcolor="black">
		  <th>S.No.</th>
		  <th>Sevice Title</th>
		  <th>Description</th>
		  <th>Timeline</th>
		  <th>Spares</th>
		  <th>Price</th>
		  
		 </tr>
		 
		 <xsl:for-each select="Services/service">
		 
		 <tr>
		 <td><xsl:value-of select ="no"/></td>
		 <td><xsl:value-of select ="title"/></td>
		 <td><xsl:value-of select ="services"/></td>
		 <td><xsl:value-of select ="timeline"/></td>
		 <td><xsl:value-of select ="spares"/></td>
		 <td><xsl:value-of select ="price"/></td>
		 
		 </tr>
		 </xsl:for-each>
		 </table>
		 </body>
		 </html>
		
		
		
		
	</xsl:template>
</xsl:stylesheet>