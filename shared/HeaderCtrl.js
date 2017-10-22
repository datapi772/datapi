var app = angular.module("HeaderCtrl", []);

app.controller("HeaderCtrl", function (FULL_MODE, $translate, $location, $rootScope) {

    var hm = this;
    hm.isCollapsed = true;
    hm.isCollapsed2 = true;
    hm.isOpen = false;
    hm.isOpen1 = false;
    hm.isOpen2 = false;

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
        $rootScope.currentLanguage = lang.locale;
        $translate.use(lang.locale);
        if ($location.path() !== '/tutoring') {
            $location.path('tutoring');
        }
    }

    hm.services = [{ url: '/tutoring', title: 'Tutoring'}].concat(FULL_MODE ? [
        { url: '/litmaster', title: 'Poetry Help' },
        { url: '/boostik', title: 'Worksheets' },
        { url: '/hubble', title: 'Resources' },
        { url : '/trak', title: 'Admin' },
        { url: '/partner', title: 'Partnership' }
    ] : [ { url: '/apps', title: 'Apps' } ]);

})