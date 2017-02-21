angular.module("App").controller("Section3Controller",["$scope","$http","Utils",function($scope,$http,Utils){
    $scope.init=function(){
        /* Used platforms*/
        $http({
            method: 'GET',
            url: contextUrl+'/used_platforms/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
            }).then(function successCallback(response) {
                var data=[];
                var other=0;
                var total=0;
               // console.log(response.data.Row.length);

                for(var i=0;i<response.data.Row.length;i++){
                    if(Utils.isValid(getPlatform(Utils.decode(response.data.Row[i]['key']))))
                        total+=parseInt(Utils.decode(response.data.Row[i].Cell[0]['$']));
                }

                for(i=0;i<response.data.Row.length;i++){
                    if(!Utils.isValid(getPlatform(Utils.decode(response.data.Row[i]['key'])))) continue;
                    var count = parseInt(Utils.decode(response.data.Row[i].Cell[0]['$']));

                    if(count < 100){
                        other += count;
                    }
                    else
                        data.push({
                            "platform":(getPlatform(Utils.decode(response.data.Row[i]['key']))),
                            "count":(count/total).toFixed(2)*100,
                            "color":Utils.getRandomColor()
                        })
                }
                data.push({
                    "platform":'others',
                    "count":(other/total).toFixed(2)*100,
                    "color":Utils.getRandomColor()
                });
                Utils.get3DPieChart("used_platforms",data,"platform","count")
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
            url: contextUrl+'/length_engagement/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
        }).then(function successCallback(response) {
            var data=[];;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; // are you ok ? xD
            console.log(response.data.Row.length);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            for(var i=0;i<response.data.Row.length;i++){
                        
                data.push({
                    "length":Utils.decode(response.data.Row[i]['key']),
                    "retweets_average":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                    "color":Utils.getRandomColor()
                })

            }
            data.sort(function(x,y){return x.length-y.length})
            Utils.getAmLineChart("tweet_length_engagement",data,false,"length","retweets_average")
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
            url: contextUrl+'/account_year/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
        }).then(function successCallback(response) {
            var data=[];;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            console.log(response.data.Row.length);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            for(var i=0;i<response.data.Row.length;i++){
                if(parseInt(Utils.decode(response.data.Row[i]['key']))>=2006)
                data.push({
                    "accountsCount":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                    "year":parseInt(Utils.decode(response.data.Row[i]['key'])),
                    "color":Utils.getRandomColor()
                })
            }
            data.sort(function(x,y){return x.year-y.year})
            Utils.getAm3DBarChart("accounts_year",data,false,"accountsCount","year")
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
            url: contextUrl+'/type_engagement/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
        }).then(function successCallback(response) {
            var data=[];;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            console.log(response.data.Row.length);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            for(var i=0;i<response.data.Row.length;i++){
                var type = Utils.decode(response.data.Row[i]['key']);
                var a = type.split(',');
                type='|';

                for(var j=0;j<a.length;j++){
                    if (a[j] == 'no media'){
                        type=a[j];
                    }
                    else if(a[j] != ''){
                        var tp = a[j];
                        var n=1;

                        for(var k=j+1;k<a.length;k++){
                            if (tp == a[k]){
                                n++;
                                a[k]='';
                            }
                        }
                        type+=n+' '+tp+'|';
                    }
                }
                data.push({
                    "type":type,
                    "retweets":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                    "color":Utils.getRandomColor()
                })
            }
            Utils.getRadarChart("type_engagement",data,"type","retweets")
        }, function errorCallback(response) {
            console.log("error")
        });
        /*************
         *
         ***
         ****/
    }
}]);
