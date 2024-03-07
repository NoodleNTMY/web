<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/"> 
        <html lang="es">
            <head>
                <title>Autor y Libros Escrito</title>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="biblioteca3.css"/>
            </head>
            <body>
                <h1>Autor y Libros Escrito</h1>
                <table>
                    <tr>
                        <th>Autor</th>
                        <th>Total Libros</th>
                        <th>Total (%)</th>
                    </tr>
                    <xsl:variable name="todo" select="//libro"/>
                    <xsl:for-each select="$todo[not(autor=preceding-sibling::libro/autor)]">
                        <tr>
                            <td><xsl:value-of select="$todo"/></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </xsl:for-each> 
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>