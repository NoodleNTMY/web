<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/"> 
        <html lang="es">
            <head>
                <title>Top 3 de libros con más puntuación</title>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="biblioteca1.css"/>
            </head>
            <body>
                <h1>Top 3 de libros con más puntuación</h1>
                <h2>Modo Tabla</h2>
                <table>
                    <tr>
                        <th>Posición</th>
                        <th>Título</th>
                        <th>Puntos</th>
                    </tr>
                    <xsl:for-each select="//libro">
                        <xsl:sort select="puntos" order="descending"/>
                        <xsl:if test="position() &lt;= 3">
                            <tr>
                                <td><xsl:value-of select="position()"/></td>
                                <td><xsl:value-of select="titulo"/></td>
                                <td><xsl:value-of select="puntos"/></td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
                <h2>Modo Lista</h2>
                <ul>
                    <xsl:for-each select="//libro">
                        <xsl:sort select="puntos" order="descending"/>
                        <xsl:if test="position() &lt;= 3">
                            <li><xsl:value-of select="position()"/> - <xsl:value-of select="titulo"/> - <xsl:value-of select="position()"/> --> Puntos: <xsl:value-of select="puntos"/> puntos.</li>
                        </xsl:if>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>