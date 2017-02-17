angular.module("App").controller("Section4Controller",["$scope","$http","Utils",function($scope,$http,Utils){
    $scope.init=function(){

        /* Technology companies*/
        $http({
            method: 'GET',
            url: 'http://localhost:8080/technology/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
            }).then(function successCallback(response) {
                var data_statuses=[];
                var data_followers=[];
                console.log(response.data.Row.length)
                for(var i=0;i<response.data.Row.length;i++){

                    data_statuses.push({
                        "name":(getPlatform(Utils.decode(response.data.Row[i]['key']))),
                        "tweets":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                        "color":Utils.getRandomColor()
                    });

                    data_followers.push({
                        "name":(getPlatform(Utils.decode(response.data.Row[i]['key']))),
                        "followers":parseInt(Utils.decode(response.data.Row[i].Cell[1]['$'])),
                        "color":Utils.getRandomColor()
                    })
                }

                Utils.getAmBarChart("technology_statuses",data_statuses,false,"nname","tweets")
                Utils.getAmBarChart("technology_followers",data_statuses,false,"name","followers")
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
            url: 'http://localhost:8080/video_games/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
        }).then(function successCallback(response) {
            var data_statuses=[];
            var data_followers=[];
            console.log(response.data.Row.length)
            for(var i=0;i<response.data.Row.length;i++){

                data_statuses.push({
                    "name":(getPlatform(Utils.decode(response.data.Row[i]['key']))),
                    "tweets":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                    "color":Utils.getRandomColor()
                });

                data_followers.push({
                    "name":(getPlatform(Utils.decode(response.data.Row[i]['key']))),
                    "followers":parseInt(Utils.decode(response.data.Row[i].Cell[1]['$'])),
                    "color":Utils.getRandomColor()
                })
            }

            Utils.getAmBarChart("video_games_statuses",data_statuses,false,"name","tweets")
            Utils.getAmBarChart("video_games_followers",data_statuses,false,"name","followers")
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
            url: 'http://localhost:8080/fashion/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
        }).then(function successCallback(response) {
            var data_statuses=[];
            var data_followers=[];
            console.log(response.data.Row.length)
            for(var i=0;i<response.data.Row.length;i++){

                data_statuses.push({
                    "name":(getPlatform(Utils.decode(response.data.Row[i]['key']))),
                    "tweets":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                    "color":Utils.getRandomColor()
                });

                data_followers.push({
                    "name":(getPlatform(Utils.decode(response.data.Row[i]['key']))),
                    "followers":parseInt(Utils.decode(response.data.Row[i].Cell[1]['$'])),
                    "color":Utils.getRandomColor()
                })
            }

            Utils.getAmBarChart("fashion_statuses",data_statuses,false,"Brand's name","tweets")
            Utils.getAmBarChart("fashion_followers",data_statuses,false,"Brand's name","followers")
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
            url: 'http://localhost:8080/foods/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
        }).then(function successCallback(response) {
            var data_statuses=[];
            var data_followers=[];
            console.log(response.data.Row.length)
            for(var i=0;i<response.data.Row.length;i++){

                data_statuses.push({
                    "name":(getPlatform(Utils.decode(response.data.Row[i]['key']))),
                    "tweets":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                    "color":Utils.getRandomColor()
                });

                data_followers.push({
                    "name":(getPlatform(Utils.decode(response.data.Row[i]['key']))),
                    "followers":parseInt(Utils.decode(response.data.Row[i].Cell[1]['$'])),
                    "color":Utils.getRandomColor()
                })
            }

            Utils.getAmBarChart("foods_statuses",data_statuses,false,"name","tweets")
            Utils.getAmBarChart("foods_followers",data_statuses,false,"name","followers")
        }, function errorCallback(response) {
            console.log("error")
        });
        /*************
         *
         ***
         ****/
    }
}]);
