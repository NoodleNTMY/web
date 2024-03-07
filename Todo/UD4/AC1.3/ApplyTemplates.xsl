<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/"> 
        <html lang="es">
            <head>
                <title>Apply-Templates</title>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <h1>Apply-Templates</h1>
                <xsl:apply-templates select="//ciclo"/>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="ciclo">
        <ul>
            <li>
                <xsl:value-of select="nombre"/>
                <xsl:text> (</xsl:text>
                <xsl:value-of select="derechoTitulo/@año"/>
                <xsl:text>)</xsl:text>
            </li>
        </ul>
    </xsl:template>
</xsl:stylesheet>