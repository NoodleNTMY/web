<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/"> 
        <html lang="en">
            <head>
                <title>Sort</title>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="estilos.css"/>
            </head>
            <body>
                <table>
                    <h2>Muestra Lista.</h2>
                    <xsl:apply-templates select="//ciclo" mode="list">
                        <xsl:sort select="decretoTitulo/@año" order="ascending"/>
                    </xsl:apply-templates>
                    <h2>Muestra tabla.</h2>
                    <tr>
                        <th>Titulo</th>
                        <th>Año</th>
                    </tr>
                    <xsl:apply-templates select="//ciclo" mode="table">
                        <xsl:sort select="decretoTitulo/@año" order="ascending"/>
                    </xsl:apply-templates>
                </table>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="ciclo" mode="table">
        <tr>
            <td><xsl:value-of select="nombre"/></td>
            <td><xsl:value-of select="decretoTitulo/@año"/></td>
        </tr>
    </xsl:template>
    <xsl:template match="ciclo" mode="list">
        <ul>
            <li>
                <xsl:value-of select="nombre"/>
                <xsl:text> (</xsl:text>
                <xsl:value-of select="decretoTitulo/@año"/>
                <xsl:text>)</xsl:text>
            </li>
        </ul>
    </xsl:template>
</xsl:stylesheet>
