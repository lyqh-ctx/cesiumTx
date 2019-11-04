/**
 * Created by Administrator on 2019/3/22.
 */
//define([
//    '../Core/Cartesian2',
//    '../Core/defineProperties',
//    '../Core/DeveloperError',
//    '../Core/WebMercatorTilingScheme',
//    './ImageryProvider'
//],
!(function (Cesium) {
    var Cartesian2=Cesium.Cartesian2,
        defineProperties=Cesium.defineProperties,
        DeveloperError=Cesium.DeveloperError,
        WebMercatorTilingScheme=Cesium.WebMercatorTilingScheme,
        ImageryProvider=Cesium.ImageryProvider;
    function BaiDuImageryProvider(t) {
        var e;
        switch (t.layer) {
            case "vec":
            default:
                e = "http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=" + (t.bigfont ? "ph" : "pl") + "&scaler = 1 & p = 1";
                break;
            case "img_d":
                e = "http://shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46";
                break;
            case "img_z":
                e = "http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=" + (t.bigfont ? "sh" : "sl") + "&v=020";
                break;
            case "custom":
                t.customid = t.customid || "midnight",
                    e = "http://api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&scale=1&customid=" + t.customid;
                break;
            case "time":
                e = "http://its.map.baidu.com:8002/traffic/TrafficTileService?x={x}&y={y}&level={z}&time=" + (new Date).getTime() + "&label=web2D&v=017"
        }
        this._url = e;
        this._tileWidth = 256;
        this._tileHeight = 256;
        this._maximumLevel = 18;
        var i = new Cartesian2(-a, -r),
            n = new Cartesian2(a, r);
        this._tilingScheme = new WebMercatorTilingScheme({
            rectangleSouthwestInMeters: i,
            rectangleNortheastInMeters: n
        });
        this._credit = void 0;
        this._rectangle = this._tilingScheme.rectangle;
        this._ready = !0;
    }

    var r = 33746824,
        a = 33554054;
    defineProperties(BaiDuImageryProvider.prototype, {
        url: {
            get: function () {
                return this._url
            }
        },
        token: {
            get: function () {
                return this._token
            }
        },
        proxy: {
            get: function () {
                return this._proxy
            }
        },
        tileWidth: {
            get: function () {
                if (!this._ready)
                    throw new DeveloperError("tileWidth must not be called before the imagery provider is ready.");
                return this._tileWidth
            }
        },
        tileHeight: {
            get: function () {
                if (!this._ready)
                    throw new DeveloperError("tileHeight must not be called before the imagery provider is ready.");
                return this._tileHeight
            }
        },
        maximumLevel: {
            get: function () {
                if (!this._ready)
                    throw new DeveloperError("maximumLevel must not be called before the imagery provider is ready.");
                return this._maximumLevel
            }
        },
        minimumLevel: {
            get: function () {
                if (!this._ready)
                    throw new DeveloperError("minimumLevel must not be called before the imagery provider is ready.");
                return 0
            }
        },
        tilingScheme: {
            get: function () {
                if (!this._ready)
                    throw new DeveloperError("tilingScheme must not be called before the imagery provider is ready.");
                return this._tilingScheme
            }
        },
        rectangle: {
            get: function () {
                if (!this._ready)
                    throw new DeveloperError("rectangle must not be called before the imagery provider  is ready.");
                return this._rectangle
            }
        },
        tileDiscardPolicy: {
            get: function () {
                if (!this._ready)
                    throw new DeveloperError("tileDiscardPolicy must not be called before the imagery provider is ready.");
                return this._tileDiscardPolicy
            }
        },
        errorEvent: {
            get: function () {
                return this._errorEvent
            }
        },
        ready: {
            get: function () {
                return this._ready
            }
        },
        readyPromise: {
            get: function () {
                return this._readyPromise.promise
            }
        },
        credit: {
            get: function () {
                return this._credit
            }
        },
        usingPrecachedTiles: {
            get: function () {
                return this._useTiles
            }
        },
        hasAlphaChannel: {
            get: function () {
                return !0
            }
        },
        layers: {
            get: function () {
                return this._layers
            }
        }
    });
    BaiDuImageryProvider.prototype.getTileCredits = function (t, e, i) {
    };
    BaiDuImageryProvider.prototype.requestImage = function (t, e, i) {
        if (!this._ready)
            throw new DeveloperError("requestImage must not be called before the imagery provider is ready.");
        var n = this._tilingScheme.getNumberOfXTilesAtLevel(i),
            r = this._tilingScheme.getNumberOfYTilesAtLevel(i),
            a = this._url.replace("{x}", t - n / 2).replace("{y}", r / 2 - e - 1).replace("{z}", i).replace("{s}", Math.floor(10 * Math.random()));
        return ImageryProvider.loadImage(this, a)
    };

    window.BaiDuImageryProvider=BaiDuImageryProvider;
})(Cesium);