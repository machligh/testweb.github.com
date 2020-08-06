var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KYAUNGGONEkyaunggonlast_1 = new ol.format.GeoJSON();
var features_KYAUNGGONEkyaunggonlast_1 = format_KYAUNGGONEkyaunggonlast_1.readFeatures(json_KYAUNGGONEkyaunggonlast_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KYAUNGGONEkyaunggonlast_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KYAUNGGONEkyaunggonlast_1.addFeatures(features_KYAUNGGONEkyaunggonlast_1);
var lyr_KYAUNGGONEkyaunggonlast_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KYAUNGGONEkyaunggonlast_1, 
                style: style_KYAUNGGONEkyaunggonlast_1,
                interactive: true,
    title: 'KYAUNGGONE kyaunggon last<br />\
    <img src="styles/legend/KYAUNGGONEkyaunggonlast_1_0.png" /> 11<br />\
    <img src="styles/legend/KYAUNGGONEkyaunggonlast_1_1.png" /> 33<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_KYAUNGGONEkyaunggonlast_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KYAUNGGONEkyaunggonlast_1];
lyr_KYAUNGGONEkyaunggonlast_1.set('fieldAliases', {'fid': 'fid', 'label': 'label', 'label2': 'label2', 'pole_type': 'pole_type', 'suspension_qty': 'suspension_qty', 'voltage': 'voltage', 'kva': 'kva', 'tr_sub_name': 'tr_sub_name', 'comment1': 'comment1', 'comment2': 'comment2', 'latitude': 'latitude', 'longitude': 'longitude', 'elevation': 'elevation', 'time': 'time', 'layer': 'layer', 'path': 'path', });
lyr_KYAUNGGONEkyaunggonlast_1.set('fieldImages', {'fid': 'Hidden', 'label': 'TextEdit', 'label2': 'TextEdit', 'pole_type': 'TextEdit', 'suspension_qty': 'TextEdit', 'voltage': 'TextEdit', 'kva': 'TextEdit', 'tr_sub_name': 'TextEdit', 'comment1': 'Hidden', 'comment2': 'Hidden', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'elevation': 'TextEdit', 'time': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_KYAUNGGONEkyaunggonlast_1.set('fieldLabels', {'label': 'no label', 'label2': 'no label', 'pole_type': 'no label', 'suspension_qty': 'no label', 'voltage': 'no label', 'kva': 'no label', 'tr_sub_name': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'elevation': 'no label', });
lyr_KYAUNGGONEkyaunggonlast_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});