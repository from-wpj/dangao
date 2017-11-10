;(function (doc, win) {

        var docEle = doc.documentElement,
                dpr=Math.min(win.devicePixelRatio, 3),
                scale = 1/ dpr,

                resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

        var metaEle = doc.createElement('meta');
        metaEle.name 

 = 'viewport';
        metaEle.content = 'initial-scale=' + 1 + ',maximum-scale=' + scale;
        docEle.firstElementChild.appendChild(metaEle);
        var recalCulate = function () {
            var width = docEle.clientWidth;
            docEle.style.fontSize = 10 * (width / 375) + 'px';
        };

        recalCulate();

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);



var app=angular.module("dg",["ui.router","ngAnimate","swiper"]);
app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state("start",{
        url:"/start",
        templateUrl:"views/start.html",
        controller:"flash",
    })
    .state("sort",{
        url:"/sort",
        templateUrl:"views/sort.html",
        // controller:"sort",

    })
    .state("mycar",{
        url:"/mycar",
        templateUrl:"views/mycar.html",

    })
    .state("help",{
        url:"/help",
        templateUrl:"views/help.html",
        controller:"flash",
    })
    .state("myqicai",{
        url:"/myqicai",
        templateUrl:"views/myqicai.html",
        controller:"tab"
    })
    $urlRouterProvider.otherwise("start");
}]);



