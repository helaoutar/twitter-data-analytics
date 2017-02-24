angular.module("App").controller("Section2Controller",["$scope","$http","Utils",function($scope,$http,Utils){
    $scope.init=function(){
        /* Countries activity*/
        $http({
            method: 'GET',
            url: contextUrl+'/countries/*',
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
                            "tweets":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                            "color":Utils.getRandomColor()
                        })
                    }
                }
                data.sort(function(x,y){return y.value-x.value})
                Utils.getAm3DBarChart("countries_tweets",data,true,"country","tweets")
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
            url: contextUrl+'/hourly_activity/*',
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
                            "tweets":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$']))
                        })
                    }
                }
                data.sort(function(x,y){return x.hour-y.hour})
                Utils.getAmLineChart("hourly_activity",data,true,"hour","tweets")
            }, function errorCallback(response) {
                console.log("error")
            });
            /*************
             *
             ***
             ****/

            $http({
            method: 'GET',
            url: contextUrl+'/users_country/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
            }).then(function successCallback(response) {
                var tmp=[]
                console.log(response.data.Row)
                for(var i=0;i<response.data.Row.length;i++){
                    if(Utils.decode(response.data.Row[i]['key'])!=="und" && Utils.isValid(Utils.decode(response.data.Row[i]['key'])))
                    {
                        console.log(Utils.decode(response.data.Row[i]['key']))
                        tmp.push({
                            "country":(getCountryName(Utils.decode(response.data.Row[i]['key']))),
                            "tweets":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$']))
                        })
                    }
                }
                tmp.sort(function(x,y){return y.tweets-x.tweets})
                var data=[]
                for(var i=0;i<10;i++){
                    data.push(tmp[i])
                }
                Utils.getAmPieChart("users_country",data,true,"country","tweets")
            }, function errorCallback(response) {
                console.log("error")
            });
    }
       
}]);
