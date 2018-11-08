require([
    "esri/Map",
    "esri/views/MapView",
    "esri/views/SceneView",
    "esri/layers/FeatureLayer"
], function(Map, MapView, SceneView, FeatureLayer) {

    var layer = new FeatureLayer({
        portalItem: {
            id: '9bf75b2b95224ece90a83fe591eee37b'
        }
    });



    var map = new Map({
        basemap: "dark-gray",
        ground: "world-elevation",
        layers: [layer]
    });

    var view = new MapView({
        container: "map",
        map: map
    });

    // var view = new SceneView({
    //     container: "map",
    //     map: map,
    //     scale: 50000000,
    //     center: [-101.17, 21.78],
    //     ui: {
    //         components: [
    //             "attribution",
    //             "zoom"
    //         ]
    //     },
    //     environment: {
    //         background: {
    //             type: "color",
    //             color: "white"
    //         },
    //         atmosphereEnabled: false,
    //         lighting: {
    //             directShadowsEnabled: false,
    //             // date: "Sun Jul 15 2018 11:00:00 GMT+0200 (W. Europe Daylight Time)",
    //             cameraTrackingEnabled: true,
    //             ambientOcclusionEnabled: false
    //         }
    //     }
    // });

    var buttonLeft = document.createElement("div");
    buttonLeft.innerHTML = '<i class="fas fa-arrow-circle-left"></i>';
    buttonLeft.className = "esri-widget--button esri-widget esri-interactive";

    var buttonRight = document.createElement("div");
    buttonRight.innerHTML = '<i class="fas fa-arrow-circle-right"></i>';
    buttonRight.className = "esri-widget--button esri-widget esri-interactive";


    view.ui.add(buttonRight, "bottom-right");
    view.ui.add(buttonLeft, "bottom-right");

    var start = 0;
    function changeLocation(direction) {

    }


});
