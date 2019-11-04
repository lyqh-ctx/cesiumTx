/**Version Control*/
var plugIn = {
    cesium: 'Cesium-1.53',
    leaflet: 'leaflet-1.4.0',
    jquery: 'jquery-3.3.1',
    turf: 'turf-5.1.6',
    zTree: 'ztree-3.5.4',
    'high-charts': 'highcharts-7.0.2',
    'font-awesome': 'font-awesome-4.7.0',
    niceScroll: 'nicescroll-3.7.6',

    //GridView
    lodash:'lodash-3.5.0',
    'jquery-ui':'jquery-ui-1.11.0',
    'gridstack':'gridstack-0.3.0'
};
/**Reqiure Setting*/
requirejs.config({
    baseUrl: '../../static/js',
    /**加载css.js的样式加载文件，是项目中require能够加载css样式文件，主要作用是解决同名依赖的冲突**/
    map: {
        '*': {
            'css': 'lib/css'
        }
    },
    paths: {
        /**Master API**/
        //require: 'lib/require',
        cesium: 'third-party/' + plugIn['cesium'] + '/Cesium',
        leaflet: 'third-party/' + plugIn['leaflet'] + '/leaflet',

        /**Extend**/
        PolylineTrailLinkMaterialProperty:"modules/Extend/PolylineTrailLinkMaterialProperty",
        /**modules**/
        initCesium: '../../doc/examples/js/InitCesium',
        //事件
        ceTxEvent: 'modules/tools/Events',
        eventEmitter: 'modules/tools/EventEmitter',

        //飞行
        flyManager:"modules/tools/Fly/FlyManager",
        mouseMove:"modules/tools/Mouse/MouseMove",
        //图层
        layerUrl: 'modules/tools/Layer/LayerUrl',
        layerManager: 'modules/tools/Layer/LayerManager',
        viewerCesiumNavigationMixin: "modules/viewer/viewerCesiumNavigationMixin.min",

        //Entity
        dynamicCircle:'modules/tools/Entity/DynamicCircle',
        initEntity:'modules/tools/InitEntity/InitEntity',
        entityOption: 'modules/tools/InitEntity/EntityOption',

        dataSources: 'modules/tools/DataSources',
        jsonToGeoJson: 'modules/tools/JsonToGeoJson',

        draw: 'modules/tools/Draw/Draw',
        drawPoint: 'modules/tools/Draw/DrawFeatures/DrawPoint',
        drawPolyline: 'modules/tools/Draw/DrawFeatures/DrawPolyline',
        drawPolygon: 'modules/tools/Draw/DrawFeatures/DrawPolygon',
        drawCircle: 'modules/tools/Draw/DrawFeatures/DrawCircle',
        drawRectangle: 'modules/tools/Draw/DrawFeatures/DrawRectangle',

        measure: 'modules/tools/Measure/Measure',
        heatMap: 'modules/tools/HeatMap/CesiumHeatmap',
        multiView: 'modules/tools/MultiView',
        weather: 'modules/tools/Analysis/Weather',
        viewshed3D: 'modules/Viewshed3D/Viewshed3D',
        turfAnalysis: 'modules/tools/Analysis/TurfAnalysis',
        profileAnalysis: 'modules/tools/Analysis/ProfileAnalysis',


        /**widgets**/
        diaLog: "widgets/Dialog/Dialog",
        tooltip: 'widgets/Tooltip/Tooltip',
        toolBar: 'widgets/ToolBar/Toolbar',
        searchView: 'widgets/SearchView/SearchView',
        infoWindow: 'widgets/InfoWindow/InfoWindow',
        drawGraph: 'widgets/DrawGraph/DrawGraph',
        layerTree: 'widgets/LayerTree/LayerTree',
        typeSearch: 'widgets/TypeSearch/TypeSearch',
        pickerCords: 'widgets/AddressMatcher/AddressMatcher',
        modelMatrix: 'widgets/ModelMatrix/ModelMatrix',
        areaNavigation: 'widgets/AreaNavigation/AreaNavigation',
        verticalCatalog: 'widgets/VerticalCatalog/VerticalCatalog',
        measurement: 'widgets/Measurement/Measurement',
        regionSelect: 'widgets/RegionSelect/RegionSelect',
        rightMenu: 'widgets/RightMenu/RightMenu',
        rollerShutters: 'widgets/RollerShutters/RollerShutters',
        baseLayerAdjust: 'widgets/BaseLayerAdjust/BaseLayerAdjust',
        coordinateInfo: 'widgets/CoordinateInfo/CoordinateInfo',
        flightSimulator: 'widgets/FlightSimulator/FlightSimulator',
        sceneTools:'widgets/SceneTools/SceneTools',
        /**L-widgets**/
        gridView: 'widgets/L-widgets/GridView/GridView',

        /**third-party**/
        utils: 'third-party/utils/Utils',
        turf: 'third-party/' + plugIn['turf'] + '/turf.min',
        zTree: 'third-party/' + plugIn['zTree'] + '/jquery.ztree.all.min',
        jquery: 'third-party/' + plugIn['jquery'] + '/jquery.min',
        jqueryDrag: 'third-party/jquery-plugins/drag',

        //highcharts:'third-party/' + plugIn['high-charts'] + '/highcharts',
        fontAwesome: 'third-party/' + plugIn['font-awesome'] + '/css/font-awesome',
        niceScroll: 'third-party/' + plugIn['niceScroll'] + '/jquery.nicescroll.min',

        lodash: 'third-party/' + plugIn['lodash'] + '/lodash.min',
        jqueryUI: 'third-party/' + plugIn['jquery-ui'] + '/jquery-ui.min',
        gridstack: 'third-party/' + plugIn['gridstack'] + '/gridstack.min',
        gridstackjui: 'third-party/' + plugIn['gridstack'] + '/gridstack.jQueryUI.min',


        /**applications**/

        //heat: 'applications/heat',
        //drawT: 'applications/drawTool',
        //
        //addCzml: 'applications/addCzml',
        //addGeoJson: 'applications/addGeoJson',
        //distict: 'applications/distict',
        //profile: 'applications/profile',
        shutters: 'applications/shutters',
        //addressMarker: 'applications/addressMarker',
        //layermanager: 'applications/layern'


    },
    shim: {
        cesium: {
            deps: ['fontAwesome', 'css!third-party/' + plugIn['cesium'] + '/Widgets/widgets',
                'css!third-party/' + plugIn['cesium'] + '/Widgets/lighter',
                'css!widgets/coverCss'],
            exports: 'Cesium'
        },
        leaflet: {
            deps: ['', 'css!third-party/' + plugIn['leaflet'] + '/leaflet']
        },
        turf: {
            exports: 'turf'
        },
        zTree: {
            deps: ['jquery', 'css!third-party/' + plugIn['zTree'] + '/zTreeStyle/zTreeStyle',
                'css!third-party/' + plugIn['zTree'] + '/zTreeStyle/ctx']
        },
        heatMap: {
            deps: ['cesium'],
            exports: 'CesiumHeatmap'
        },
        fontAwesome: {
            deps: ['', 'css!third-party/' + plugIn['font-awesome'] + '/css/font-awesome.min']
        },
        //mCustomScrollbar:{
        //    deps:['jquery','css!third-party/'+plugIn['mCustomScrollbar']+'/jquery.mCustomScrollbar.min']
        //},

        toolBar: {
            deps: ['', 'css!widgets/ToolBar/Toolbar']
        },
        searchView: {
            deps: ['', 'css!widgets/SearchView/SearchView']
        },
        tooltip: {
            deps: ['', 'css!widgets/Tooltip/Tooltip']
        },
        infoWindow: {
            deps: ['', 'css!widgets/InfoWindow/InfoWindow']
        },
        drawGraph: {
            deps: ['', 'css!widgets/DrawGraph/DrawGraph']
        },
        layerTree: {
            deps: ['', 'css!widgets/LayerTree/LayerTree']
        },
        pickerCords: {
            deps: ['', 'css!widgets/AddressMatcher/AddressMatcher']
        },
        modelMatrix: {
            deps: ['', 'css!widgets/ModelMatrix/ModelMatrix']
        },
        areaNavigation: {
            deps: ['', 'css!widgets/AreaNavigation/AreaNavigation']
        },
        verticalCatalog:{
          deps:['','css!widgets/VerticalCatalog/VerticalCatalog']
        },
        measurement: {
            deps: ['', 'css!widgets/Measurement/Measurement']
        },
        regionSelect: {
            deps: ['', 'css!widgets/RegionSelect/RegionSelect']
        },
        baseLayerAdjust: {
            deps: ['', 'css!widgets/BaseLayerAdjust/BaseLayerAdjust']
        },
        coordinateInfo: {
            deps: ['', 'css!widgets/CoordinateInfo/CoordinateInfo']
        },

        flightSimulator: {
            deps: ['', 'css!widgets/FlightSimulator/FlightSimulator']
        },
        sceneTools:{
            deps:[ '','css!widgets/SceneTools/SceneTools']
        },
        rollerShutters: {
            deps: ['', 'css!widgets/RollerShutters/RollerShutters']
        },
        gridView: {
            deps: ['', 'css!widgets/L-widgets/GridView/GridView']
        },
        gridstack:{
            deps:['', 'css!third-party/' + plugIn['gridstack'] + '/gridstack.min'],
            //exports: 'gridstack'
        },
        jqueryUI: {
            deps:['','css!third-party/' + plugIn['jquery-ui'] + '/jquery-ui.min']
        },
        gridstackjui:{
            deps:['gridstack']
        },
        diaLog: {
            deps: ['', "css!widgets/Dialog/Dialog"]
        },
        jqueryDrag:{
            deps:['jquery']
        },
        typeSearch: {
            deps:['','css!widgets/TypeSearch/TypeSearch']
        },
        rightMenu:{
            deps:['','css!widgets/RightMenu/RightMenu']
        }
    }
});
