<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/"> 
        <html lang="es">
            <head>
                <title>For-Each</title>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="ciclos.css"/>
            </head>
            <body>
                <h1>CHOOSE</h1>
                <table>
                    <tr>
                        <th>CICLO</th>
                        <th>AÑO</th>
                        <th>GRADO</th>
                        <th>ACCESO</th>
                    </tr>
                    <xsl:for-each select="//ciclo">
                        <xsl:sort select="decretoTitulo/@año" order="ascending"/>
                        <tr>
                            <td><xsl:value-of select="nombre"/></td>
                            <td><xsl:value-of select="decretoTitulo/@año"/></td>
                            <xsl:choose>
                                <xsl:when test="grado[. = 'Superior']">
                                    <td class="superior"><xsl:value-of select="./grado"/></td>
                                    <td> Puedes acceder por BACHILLERATO o por Grado Medio </td>
                                </xsl:when>
                                <xsl:when test="grado[.  = 'Medio']">
                                    <td class="medio"><xsl:value-of select="./grado"/></td>
                                    <td> Puedes acceder con la ESO </td>
                                </xsl:when>
                            </xsl:choose>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>