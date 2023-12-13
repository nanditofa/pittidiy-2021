
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleSateliteHybird_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "PITTIDIY20211_1": {
            "type": "geojson",
            "data": json_PITTIDIY20211_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleSateliteHybird_0_0",
            "type": "raster",
            "source": "GoogleSateliteHybird_0"
        },
        {
            "id": "lyr_PITTIDIY20211_1_0",
            "type": "fill",
            "source": "PITTIDIY20211_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Tipo_TKFIN'], 3], 1.0, ['==', ['get', 'Tipo_TKFIN'], 88], 1.0, ['==', ['get', 'Tipo_TKFIN'], 99], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'Tipo_TKFIN'], 3], '#ff7c01', ['==', ['get', 'Tipo_TKFIN'], 88], '#1778f0', ['==', ['get', 'Tipo_TKFIN'], 99], '#91ff01', '#ffffff']}
        }
],
}