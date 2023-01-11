var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.format.GeoJSON();
var features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.readFeatures(json_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.addFeatures(features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0);var lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
                style: style_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,
    title: '[LapakGIS.com] Batas_Kecamatan_BIG_PPBW<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_0.png" /> Sumber<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_1.png" /> Sulang<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_2.png" /> Sluke<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_3.png" /> Sedan<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_4.png" /> Sarang<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_5.png" /> Sale<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_6.png" /> Rembang<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_7.png" /> Pancur<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_8.png" /> Pamotan<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_9.png" /> Lasem<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_10.png" /> Kragan<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_11.png" /> Kaliori<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_12.png" /> Gunem<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0_13.png" /> Bulu<br />'
        });var format_Centroids_1 = new ol.format.GeoJSON();
var features_Centroids_1 = format_Centroids_1.readFeatures(json_Centroids_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroids_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Centroids_1.addFeatures(features_Centroids_1);var lyr_Centroids_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centroids_1, 
                style: style_Centroids_1,
    title: 'Centroids<br />\
    <img src="styles/legend/Centroids_1_0.png" /> Bulu<br />\
    <img src="styles/legend/Centroids_1_1.png" /> Gunem<br />\
    <img src="styles/legend/Centroids_1_2.png" /> Kaliori<br />\
    <img src="styles/legend/Centroids_1_3.png" /> Kragan<br />\
    <img src="styles/legend/Centroids_1_4.png" /> Lasem<br />\
    <img src="styles/legend/Centroids_1_5.png" /> Pamotan<br />\
    <img src="styles/legend/Centroids_1_6.png" /> Pancur<br />\
    <img src="styles/legend/Centroids_1_7.png" /> Rembang<br />\
    <img src="styles/legend/Centroids_1_8.png" /> Sale<br />\
    <img src="styles/legend/Centroids_1_9.png" /> Sarang<br />\
    <img src="styles/legend/Centroids_1_10.png" /> Sedan<br />\
    <img src="styles/legend/Centroids_1_11.png" /> Sluke<br />\
    <img src="styles/legend/Centroids_1_12.png" /> Sulang<br />\
    <img src="styles/legend/Centroids_1_13.png" /> Sumber<br />'
        });

lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.setVisible(true);lyr_Centroids_1.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,lyr_Centroids_1];
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'KKLAKI': 'KKLAKI', 'KKWANITA': 'KKWANITA', 'JUMLAH': 'JUMLAH', });
lyr_Centroids_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'KKLAKI': 'KKLAKI', 'KKWANITA': 'KKWANITA', 'JUMLAH': 'JUMLAH', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'KKLAKI': 'TextEdit', 'KKWANITA': 'TextEdit', 'JUMLAH': 'TextEdit', });
lyr_Centroids_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'KKLAKI': 'TextEdit', 'KKWANITA': 'TextEdit', 'JUMLAH': 'TextEdit', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldLabels', {'OBJECTID': 'header label', 'WADMKC': 'header label', 'WADMKK': 'header label', 'WADMPR': 'header label', 'KKLAKI': 'header label', 'KKWANITA': 'header label', 'JUMLAH': 'header label', });
lyr_Centroids_1.set('fieldLabels', {'OBJECTID': 'header label', 'WADMKC': 'header label', 'WADMKK': 'header label', 'WADMPR': 'header label', 'KKLAKI': 'header label', 'KKWANITA': 'header label', 'JUMLAH': 'header label', });
lyr_Centroids_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});