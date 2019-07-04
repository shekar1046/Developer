var app=angular.module('CaptchaApp',[]);
app.factory('CaptchaFactory',function () {
    var factory={};

    factory.GenerateCode=function () {
        var a=Math.random() * 10;
        var b=Math.random() * 10;
        var c=Math.random() * 10;
        var d=Math.random() * 10;
        var e=Math.random() * 10;

        var code= Math.round(a) + " " + Math.round(b) + " " + Math.round(c) + " " + Math.round(d) + " " + Math.round(e);
        return code;
    }

    return factory;
})

app.service('CaptchaService',function (CaptchaFactory) {

    this.Captcha =function () {
        return CaptchaFactory.GenerateCode();
    }
})

