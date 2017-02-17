angular.module("App").controller("Section3Controller",["$scope","$http","Utils",function($scope,$http,Utils){
    $scope.init=function(){
        /* Used platforms*/
        $http({
            method: 'GET',
            url: 'http://localhost:8080/used_platforms/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
            }).then(function successCallback(response) {
                var data=[]
                console.log(response.data.Row.length)
                for(var i=0;i<response.data.Row.length;i++){

                    data.push({
                        "platform":(getPlatform(Utils.decode(response.data.Row[i]['key']))),
                        "count":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                        "color":Utils.getRandomColor()
                    })

                }
                //Utils.getPieChart("used_platforms",data,'platform','count')
                Utils.getAmBarChart("used_platforms",data,false,"platform","count")
            }, function errorCallback(response) {
                console.log("error")
            });
            /*************
             *
             ***
             ****/

        /* a tweet’s length and its impact on the retweet count */
        $http({
            method: 'GET',
            url: 'http://localhost:8080/length_engagement/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
        }).then(function successCallback(response) {
            var data=[]
            console.log(response.data.Row.length)
            for(var i=0;i<response.data.Row.length;i++){

                data.push({
                    "length":Utils.decode(response.data.Row[i]['key'])+' characters',
                    "retweets_average":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                    "color":Utils.getRandomColor()
                })

            }
            Utils.getAmBarChart("tweet_length_engagement",data,false,"length","retweets_average")
        }, function errorCallback(response) {
            console.log("error")
        });
        /*************
         *
         ***
         ****/

        /* Number of twitter account created per year */
        $http({
            method: 'GET',
            url: 'http://localhost:8080/account_year/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
        }).then(function successCallback(response) {
            var data=[]
            console.log(response.data.Row.length)
            for(var i=0;i<response.data.Row.length;i++){

                data.push({
                    "year":parseInt(Utils.decode(response.data.Row[i]['key'])),
                    "accountsCount":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                    "color":Utils.getRandomColor()
                })

            }
            Utils.getAmBarChart("accounts_year",data,false,"year","accountsCount")
        }, function errorCallback(response) {
            console.log("error")
        });
        /*************
         *
         ***
         ****/

        /* type of tweet and engagement rate */
        $http({
            method: 'GET',
            url: 'http://localhost:8080/type_engagement/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
        }).then(function successCallback(response) {
            var data=[]
            console.log(response.data.Row.length)
            for(var i=0;i<response.data.Row.length;i++){

                data.push({
                    "type":Utils.decode(response.data.Row[i]['key']),
                    "engagement":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                    "color":Utils.getRandomColor()
                })

            }
            Utils.getAmBarChart("type_engagement",data,false,"type","engagement")
        }, function errorCallback(response) {
            console.log("error")
        });
        /*************
         *
         ***
         ****/

    }
}]);
