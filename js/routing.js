myApp.config(function($stateProvider,$urlRouterProvider){
    var sections=[
    {
        name:'section1',
        url:'/1',
        templateUrl:'/section1.html',
        controller: "Section1Controller",
        resolve: {
            deps: ['$ocLazyLoad', '$rootScope', '$state', function ($ocLazyLoad, $rootScope, $state) {
                  return $ocLazyLoad.load({
                      name: 'App',
                      files: ['/assets/controllers/Section1Controller.js',
                              '/assets/managers/Utils.js'
                      ]
                    });
                }]
            }
    },{
        name:'section2',
        url:'/2',
        templateUrl:'/section2.html',
        controller: "Section2Controller",
        resolve: {
            deps: ['$ocLazyLoad', '$rootScope', '$state', function ($ocLazyLoad, $rootScope, $state) {
                  return $ocLazyLoad.load({
                      name: 'App',
                      files: ['/assets/controllers/Section2Controller.js',
                              '/assets/managers/Utils.js'
                      ]
                    });
                }]
            }
    },{
        name:'section3',
        url:'/3',
        templateUrl:'/section3.html',
        controller: "Section3Controller",
        resolve: {
            deps: ['$ocLazyLoad', '$rootScope', '$state', function ($ocLazyLoad, $rootScope, $state) {
                return $ocLazyLoad.load({
                    name: 'App',
                    files: ['/assets/controllers/Section3Controller.js',
                        '/assets/managers/Utils.js'
                    ]
                });
            }]
        }
    },{
        name:'section4',
        url:'/4',
        templateUrl:'/section4.html',
        controller: "Section4Controller",
        resolve: {
            deps: ['$ocLazyLoad', '$rootScope', '$state', function ($ocLazyLoad, $rootScope, $state) {
                return $ocLazyLoad.load({
                    name: 'App',
                    files: ['/assets/controllers/Section4Controller.js',
                        '/assets/managers/Utils.js'
                    ]
                });
            }]
        }
    },{
        name:'section5',
        url:'/5',
        templateUrl:'/section5.html',
        controller: "Section5Controller",
        resolve: {
            deps: ['$ocLazyLoad', '$rootScope', '$state', function ($ocLazyLoad, $rootScope, $state) {
                return $ocLazyLoad.load({
                    name: 'App',
                    files: ['/assets/controllers/Section5Controller.js',
                        '/assets/managers/Utils.js'
                    ]
                });
            }]
        }
    }
    ];
    
    $stateProvider.state('section1',sections[0]);
    $stateProvider.state('section2',sections[1]);
    $stateProvider.state('section3',sections[2]);
    $stateProvider.state('section4',sections[3]);
    $stateProvider.state('section5',sections[4]);

    $urlRouterProvider.otherwise('/2');
});