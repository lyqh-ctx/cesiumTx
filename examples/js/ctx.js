/**
 * Created by Administrator on 2019/6/28.
 */
!(function(){
    //<script type="text/javascript" src="http://www.w3school.com.cn/jquery/jquery-1.11.1.min.js"></script>
    var version="1.63";
    var Js="./js/Cesium-"+version+"/Cesium.js,./js/InitCesium.js,./js/Sandcastle-header.js,./js/cesiumGetCamerasInfo.js";
    var Cs="./js/Cesium-"+version+"/Widgets/widgets.css,./css/example.css";
    var j=Js.split(",");
    var c=Cs.split(",");
    for(var i=0;i< j.length;i++){
        addScript(j[i]);
    }
    for(var i=0;i< c.length;i++){
        addCSS(c[i]);
    }
    function addScript(url) {
        var script = '<script type="text/javascript" src="' + url + '"></script>';
        document.writeln(script);
    }
   
    function addCSS(url) {
        var css = '<link rel="stylesheet" type="text/css" href="' + url + '">';
        document.writeln(css);
    }
})();