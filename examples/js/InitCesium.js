/**
 * Created by zlj on 2019/1/11.
 */
(function (w, factory) {
    if (typeof define === 'function' && define.amd) {
        define(["cesium", 'coordinateInfo','viewerCesiumNavigationMixin'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        w.InitCesium = factory();
    }
})(this,function () {
    function InitCesium() {
        this._init_();
    }

    InitCesium.prototype = {
        constructor: InitCesium,
        _init_: function () {
        },
        initViewer: function (id, options) {
            Cesium.Ion.defaultAccessToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NzdlNDVhMy1mNDAxLTQ5MWMtODhkYS00MTc1MTU4NzFmNzciLCJpZCI6MjU5LCJzY29wZXMiOlsiYXNyIiwiZ2MiXSwiaWF0IjoxNTkzNjI4MDI3fQ.sqnKP2DNn0soCyh1t9taAa2xkbZ6EIn0Z7_VwujTCtQ";
            this.iViewer=new Cesium.Viewer(id, this.__setOptions(this.__getCesiumParameter(),options));
            this.__setSceneRender();
            //var info=new CoordinateInfo(this.iViewer);
            var options = {};
            options.defaultResetView = Cesium.Rectangle.fromDegrees(73, 3,135 , 53);
            // Only the compass will show on the map
            options.enableCompass= false;
            options.enableZoomControls= false;
            options.enableDistanceLegend= false;
            options.enableCompassOuterRing= false;
            //this.iViewer.extend(Cesium.viewerCesiumNavigationMixin, options);
            return this.iViewer;
        },
        __getCesiumParameter: function () {
            return {
                animation: false,
                baseLayerPicker: false,
                vrButton: false,
                fullscreenButton: false,
                geocoder: false,
                homeButton: false,
                infoBox: true,
                sceneModePicker: false,
                selectionIndicator: false,
                timeline: false,
                navigationHelpButton: false,
                navigationInstructionsInitiallyVisible: true,
                scene3DOnly: false,
                shouldAnimate: false,
                creditContainer:document.createElement("div"),
                terrainExaggeration : 1,
                terrainProvider: new Cesium.EllipsoidTerrainProvider(),
                imageryProvider:new Cesium.UrlTemplateImageryProvider({
                    subdomains: ["1", "2", "3"],
                    url: "http://mt{s}.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali"
                }),
                contextOptions: {
                    webgl: {
                        alpha: true,
                        depth: false,
                        stencil: true,
                        antialias: true,
                        premultipliedAlpha: true,
                        preserveDrawingBuffer: true,//通过canvas.toDataURL()实现截图需要将该项设置为true
                        failIfMajorPerformanceCaveat: true
                    }, allowTextureFilterAnisotropic: true
                },
            }
        },
        getAngularPoints:function(){
         this.canvas=this.iViewer.scene.canvas;
            try{
                var car_lt=this.getCart3ByPIckEllipsoid(new Cesium.Cartesian2(0,0));
                var car_lb=this.getCart3ByPIckEllipsoid(new Cesium.Cartesian2(0,this.canvas.height));
                var car_rt=this.getCart3ByPIckEllipsoid(new Cesium.Cartesian2(this.canvas.width,0));
                var car_rb=this.getCart3ByPIckEllipsoid(new Cesium.Cartesian2(this.canvas.width,this.canvas.height));
                var car3s=[car_lt,car_rt,car_rb,car_lb];
                for(var i in car3s){
                    car3s[i]=this.getDegreesByCartesian3(car3s[i])
                }
                return car3s;

            }catch (e){
                console.log(e);
            }
        },
        getDegreesByCartesian3:function(car3){
            var b=Cesium.Cartographic.fromCartesian(car3);
            var c=Cesium.Math.toDegrees(b.longitude);
            var d=Cesium.Math.toDegrees(b.latitude);
            return [d,c];
        },
        getCart3ByPIckEllipsoid:function(Car2){
            var t=this.iViewer.camera.pickEllipsoid(Car2,this.iViewer.scene.globe.ellipsoid);
            if(!t){
                var yIndex=0;
                do{
                    yIndex<=this.canvas.height?yIndex+=10:this.canvas.height;
                    t=this.iViewer.camera.pickEllipsoid(new Cesium.Cartesian2(Car2['x'],yIndex),this.iViewer.scene.globe.ellipsoid);
                }while (!t);
            }
            return t;
        },
        getCenterOfScreen:function(){
            return this.getCart3ByPIckEllipsoid(new Cesium.Cartesian2(this.canvas.width/2,this.canvas.height/2));
        },
        __setOptions: function (defaults, options) {
            return Object.assign({}, defaults, options);
        },
        __setSceneRender:function(){
            this.iViewer.scene.backgroundColor = Cesium.Color.TRANSPARENT;
        },
        showInspector:function(){
            this.iViewer.extend(Cesium.viewerCesiumInspectorMixin);
        },
        show3DInspector:function(){
           this.iViewer.extend(Cesium.viewerCesium3DTilesInspectorMixin);
        },
        //showLayerAdjust:function(){
        //    this.layerAdjust=new BaseLayerAdjust(this.iViewer);
        //},
        getViewer:function(){
            return this.iViewer;
        }
    };
    return InitCesium;
});
