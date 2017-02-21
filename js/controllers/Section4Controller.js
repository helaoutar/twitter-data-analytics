angular.module("App").controller("Section4Controller",["$scope","$http","Utils",function($scope,$http,Utils){
    $scope.init=function(){

        /* Technology companies*/
        $http({
            method: 'GET',
            url: contextUrl+'/technology/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
            }).then(function successCallback(response) {
                var data=[];
                var zeroData=[
                    {
                        'name':'Microsoft',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name':'Google',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name':'Twitter',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name':'Android',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name':'Apple',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name':'SamsungMobile',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name': 'instagram',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name': 'facebook',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name': 'Sony',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name': 'jetbrains',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name':'oracle',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    }
                ];
                console.log(response.data.Row.length);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

                if(response.data.Row.length == 0){
                    data=zeroData;
                }
                else{
                    for(var i=0;i<response.data.Row.length;i++){

                        data.push({
                            "name":((Utils.decode(response.data.Row[i]['key']))),
                            "tweets":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                            "followers":parseInt(Utils.decode(response.data.Row[i].Cell[1]['$'])),
                            "color":Utils.getRandomColor()
                        });
                    }

                    Utils.putMissingBrands(zeroData,data);
                }
                console.log(data)
                Utils.get3DStackedColumnChart("technology",data,"name","tweets","followers")
            }, function errorCallback(response) {
                console.log("error")
            });
            /*************
             *
             ***
             ****/

        /* Video games companies */
        $http({
            method: 'GET',
            url: contextUrl+'/video_games/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
        }).then(function successCallback(response) {
            var data=[];
            var zeroData=[
                {
                    'name':'PlayStation',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'Xbox',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'RockstarGames',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'NintendoAmerica',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'Ubisoft',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'EA',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name': 'EASPORTSFIFA',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name': 'LeagueOfLegends',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name': 'CallofDuty',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name': 'Treyarch',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                }];

            console.log(response.data.Row.length);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

            if(response.data.Row.length == 0){
                data=zeroData;
            }
            else {
                for (var i = 0; i < response.data.Row.length; i++) {

                    data.push({
                        "name": (Utils.decode(response.data.Row[i]['key'])),
                        "tweets": parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                        "followers": parseInt(Utils.decode(response.data.Row[i].Cell[1]['$'])),
                        "color": Utils.getRandomColor()
                    });
                }
               
                Utils.putMissingBrands(zeroData,data);
            }
            Utils.getClusteredBarChar("video_games",data,"name","tweets","followers")
        }, function errorCallback(response) {
            console.log("error")
        });
        /*************
         *
         ***
         ****/

        /* Fashion Brands */
        $http({
            method: 'GET',
            url: contextUrl+'/fashion/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
        }).then(function successCallback(response) {
            var data=[];
            var zeroData=[
                {
                    'name':'CHANEL',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'VictoriasSecret',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'hm',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'marcjacobs',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'Burberry',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'Dior',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name': 'dolcegabbana',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name': 'LouisVuitton',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name': 'gucci',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name': 'YSL',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name': 'ZARA',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name': 'MichaelKors',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                }];

            console.log(response.data.Row.length)

            if(response.data.Row.length == 0){
                data=zeroData;
            }
            else {
                for (var i = 0; i < response.data.Row.length; i++) {

                    data.push({
                        "name": (Utils.decode(response.data.Row[i]['key'])),
                        "tweets": parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                        "followers": parseInt(Utils.decode(response.data.Row[i].Cell[1]['$'])),
                        "color": Utils.getRandomColor()
                    });
                }
                Utils.putMissingBrands(zeroData,data);
            }

            Utils.get3DStackedColumnChart("fashion",data,"name","tweets","followers")
        }, function errorCallback(response) {
            console.log("error")
        });
        /*************
         *
         ***
         ****/

        /* Food chains */
        $http({
            method: 'GET',
            url: contextUrl+'/foods/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
        }).then(function successCallback(response) {
            var data=[];
            var zeroData=[
                {
                    'name':'SUBWAY',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'McDonalds',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'WholeFoods',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'Starbucks',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'Wendys',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                },
                {
                    'name':'BurgerKing',
                    'tweets':0,
                    'followers':0,
                    'color':Utils.getRandomColor()
                }];

            console.log(response.data.Row.length);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

            if(response.data.Row.length == 0){
                data=zeroData;
            }
            else {

                for (var i = 0; i < response.data.Row.length; i++) {

                    data.push({
                        "name": (Utils.decode(response.data.Row[i]['key'])),
                        "tweets": parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                        "followers": parseInt(Utils.decode(response.data.Row[i].Cell[1]['$'])),
                        "color": Utils.getRandomColor()
                    });
                }
                Utils.putMissingBrands(zeroData,data);
            }
            Utils.getClusteredBarChar("foods",data,"name","tweets","followers")
        }, function errorCallback(response) {
            console.log("error")
        });
        /*************
         *
         ***
         ****/
    }
}]);
