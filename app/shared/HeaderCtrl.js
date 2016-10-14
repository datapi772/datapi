var app = angular.module("HeaderCtrl", []);

app.controller("HeaderCtrl", function ($translate) {

    var hm = this;
    hm.isCollapsed = true;
    hm.isCollapsed2 = true;
    hm.isOpen = false;
    hm.isOpen1 = false;
    hm.isOpen2 = false;
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