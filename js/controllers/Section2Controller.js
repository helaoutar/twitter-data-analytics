angular.module("App").controller("Section2Controller",["$scope","$http","Utils",function($scope,$http,Utils){
    $scope.init=function(){
        /* Countries activity*/
        $http({
            method: 'GET',
            url: 'http://localhost:8080/countries/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
            }).then(function successCallback(response) {
                var data=[]
                console.log(response.data.Row)
                for(var i=0;i<response.data.Row.length;i++){
                    if(Utils.decode(response.data.Row[i]['key'])!=="und")
                    {
                        data.push({
                            "country":(getCountryName(Utils.decode(response.data.Row[i]['key']))),
                            "value":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                            "color":Utils.getRandomColor()
                        })
                    }
                }
                Utils.getAm3DBarChart("countries_tweets",data,false,"country","value")
            }, function errorCallback(response) {
                console.log("error")
            });
            /*************
             *
             ***
             ****/

            /*Hourly activity*/
            $http({
            method: 'GET',
            url: 'http://localhost:8080/hourly_activity/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
            }).then(function successCallback(response) {
                var data=[]
                console.log(response.data.Row)
                for(var i=0;i<response.data.Row.length;i++){
                    if(Utils.decode(response.data.Row[i]['key'])!=="und")
                    {
                        data.push({
                            "hour":(getCountryName(Utils.decode(response.data.Row[i]['key']))),
                            "value":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$']))
                        })
                    }
                }
                Utils.getAmLineChart("hourly_activity",data,false,"hour","value")
            }, function errorCallback(response) {
                console.log("error")
            });
            /*************
             *
             ***
             ****/
    }
       
}]);
