angular.module("App").controller("Section1Controller",["$scope","$http","Utils",function($scope,$http,Utils){
    $scope.init=function(){
        $http({
            method: 'GET',
            url: 'http://localhost:8080/lang/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
            }).then(function successCallback(response) {
                var data=[]
                for(var i=0;i<response.data.Row.length;i++){
                    if(Utils.decode(response.data.Row[i]['key'])!=="und")
                    {
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
    }
        
}]);
