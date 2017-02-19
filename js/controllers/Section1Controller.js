angular.module("App").controller("Section1Controller",["$scope","$http","Utils",function($scope,$http,Utils){
    $scope.init=function(){
        $http({
            method: 'GET',
            url: contextUrl+'/lang/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
            }).then(function successCallback(response) {
                var data=[]
                for(var i=0;i<response.data.Row.length;i++){
                    if(Utils.decode(response.data.Row[i]['key'])!=="und")
                    {
                        console.log(Utils.decode(response.data.Row[i]['key']))
                        data.push({
                            "language":(getLanguageName(Utils.decode(response.data.Row[i]['key']))),
                            "tweets":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$']))
                        })
                    }
                }
                Utils.getAmBarChart("lang_dist",data,false,"language","tweets")
            }, function errorCallback(response) {
                console.log("error")
            });
                /****
                 * 
                 * 
                 * 
                 */
             $http({
                method: 'GET',
                url: contextUrl+'/tweets_types/*',
                headers: {
                    'Accept':'Application/json',
                    'Content-type':'charset=utf-8'
                }
                }).then(function successCallback(response) {
                    var data=[]
                    //console.log(response.data.Row)
                    for(var i=0;i<response.data.Row.length;i++){
                        if(Utils.decode(response.data.Row[i]['key'])!=="und")
                        {
                            data.push({
                                "type":((Utils.decode(response.data.Row[i]['key']))),
                                "count":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$']))
                            })
                        }
                    }
                    Utils.getAm3DPieChart("tweets_types",data,false,"type","count","tweets types")
                }, function errorCallback(response) {
                    console.log("error")
                });
    }
        
}]);
