<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/"> 
        <html lang="en">
            <head>
                <title>For-Each</title>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="estilos.css"/>
            </head>
            <body>
                    <h1>For-Each</h1>
                    <xsl:for-each select="//ciclo">
                        <xsl:sort select="decretoTitulo/@año" order="ascending"/>
                        <p>
                            <xsl:value-of select="nombre"/>
                            <xsl:text> (</xsl:text>
                            <xsl:value-of select="decretoTitulo/@año"/>
                            <xsl:text>)</xsl:text>
                        </p>
                    </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>