<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/"> 
        <html lang="en">
            <head>
                <title>Sort</title>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <table>
                    <h1>Sort</h1>
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
</xsl:stylesheet>

<!-- Realiza un fichero xsl que extraiga la información del nombre de los ciclos y el año de publicación del
decreto que lo regula, ordenado descendentemente por el año de publicación y en formato de tabla. -->