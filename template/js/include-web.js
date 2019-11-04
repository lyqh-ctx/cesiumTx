(function () {
    var r = new RegExp("(^|(.*?\\/))(include-web\.js)(\\?|$)"),
        s = document.getElementsByTagName('script'), targetScript;
    for (var i = 0; i < s.length; i++) {
        var src = s[i].getAttribute('src');
        if (src) {
            var m = src.match(r);
            if (m) {
              var relativePath = m[1] || "./";
                targetScript = s[i];
                break;
            }
        }
    }
    function inputScript(url) {
        var script = '<script type="text/javascript" src="' + url + '"></script>';
        document.writeln(script);
    }
    function inputCSS(url) {
        var css = '<link rel="stylesheet" href="' + url + '">';
        document.writeln(css);
    }

    function inArray(arr, item) {
        for (i in arr) {
            if (arr[i] == item) {
                return true;
            }
        }
        return false;
    }

    //加载类库资源文件
    function load() {
        var includes = (targetScript.getAttribute('include') || "").split(",");
        if (inArray(includes, 'jquery')) {
            inputScript("../template/third-party/jquery-3.3.1/jquery.min.js");
        }

        if (inArray(includes, 'bootstrap')) {
            inputCSS("../template/third-party/bootstrap/css/bootstrap.min.css");
            inputScript("../template/third-party/bootstrap/js/bootstrap.min.js");
        }
        if (inArray(includes, 'bootstrap-css')) {
            inputCSS("../template/third-party/bootstrap/css/bootstrap.min.css")
        }

        if (inArray(includes, 'bootstrap-js')) {
            inputScript("../template/third-party/bootstrap/js/bootstrap.min.js");
        }

        if (inArray(includes, 'template')) {
            inputScript("../template/third-party/art-template/template-web.js");
        }


        if (inArray(includes, 'admin-lte')) {
            inputCSS("../template/third-party/admin-lte/css/AdminLTE.min.css");
            inputCSS("../template/third-party/admin-lte/css/skins/_all-skins.min.css");
            inputCSS("../template/third-party/font-awesome/css/font-awesome.min.css");
            inputScript("../template/third-party/admin-lte/js/app.min.js");
        }
        if (inArray(includes, 'jquery.scrollto')) {
            inputScript("../template/third-party/jquery.scrollto/jquery.scrollTo.min.js");
        }
        if (inArray(includes, 'ace')) {
            inputScript("../template/third-party/ace/ace.js");
        }
        if (inArray(includes, 'lazyload')) {
            inputScript("../template/third-party/lazyload/jquery.lazyload.min.js");
        }
    }
    load();
})();
