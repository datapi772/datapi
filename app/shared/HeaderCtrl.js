var app = angular.module("HeaderCtrl", []);

app.controller("HeaderCtrl", function ($translate) {

    var hm = this;
    hm.isCollapsed = true;
    hm.currentLanguage = "Eng";

    hm.languages = [
        {
            lang: "Eng",
            locale: "en"
        },
        {
            lang: "中文",
            locale: "zh"
        },
        {
            lang: "Tiếng Việt",
            locale: "vi"
        }
    ]

    hm.changeLanguage = function (lang) {
        hm.currentLanguage = lang.lang;
        $translate.use(lang.locale);
    }

})