angular.module("App").controller("Section5Controller",["$scope","$http","Utils",function($scope,$http,Utils){
    $scope.init=function(){
        $http({
            method: 'GET',
            url: contextUrl+'/hashtags/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
            }).then(function successCallback(response) {
                var tmp=[]
                console.log(response.data.Row)
                for(var i=0;i<response.data.Row.length;i++){
                    if(Utils.decode(response.data.Row[i]['key'])!=="und")
                    {
                        console.log((Utils.decode(response.data.Row[i]['key'])))
                        tmp.push({
                            "hashtags":((Utils.decode(response.data.Row[i]['key']))),
                            "tweets":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$']))
                        })
                    }
                }
                tmp.sort(function(x,y){return y.tweets-x.tweets})
                var data=[]
                for(var i=0;i<10;i++){
                    data.push(tmp[i])
                }
                Utils.getAm3DPieChart("hashtags",data,false,"hashtags","tweets","Top 10 hashtags")
            }, function errorCallback(response) {
                console.log("error")
            });
            /*************
             * 
             */

        $http({
            method: 'GET',
            url: contextUrl+'/mentions/*',
            headers: {
                'Accept':'Application/json',
                'Content-type':'charset=utf-8'
            }
            }).then(function successCallback(response) {
                var data=[]
                var tmp=[]
                console.log(response.data.Row)
                for(var i=0;i<response.data.Row.length;i++){
                    if(Utils.decode(response.data.Row[i]['key'])!=="und")
                    {
                        console.log((Utils.decode(response.data.Row[i]['key'])))
                        tmp.push({
                            "mentions":((Utils.decode(response.data.Row[i]['key']))),
                            "tweets":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$']))
                        })
                    }
                }
                tmp.sort(function(x,y){return y.tweets-x.tweets})
                for(var i=0;i<10;i++){
                    data.push(tmp[i])   
                }
                Utils.getAmHorBarChart("mentions",data,false,"mentions","tweets")
            }, function errorCallback(response) {
                console.log("error")
            });

            /*****
             * 
             * 
             */

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
                        'name':'BBCNews',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name':'CNN',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name':'ABC',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name':'Forbes',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name':'2Minteractive',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name':'Yahoo',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name': 'Mashable',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name': 'ESPN',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name': 'NYTimes',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name': 'Time',
                        'tweets':0,
                        'followers':0,
                        'color':Utils.getRandomColor()
                    },
                    {
                        'name':'TheOnion',
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
                            "name":(getPlatform(Utils.decode(response.data.Row[i]['key']))),
                            "tweets":parseInt(Utils.decode(response.data.Row[i].Cell[0]['$'])),
                            "followers":parseInt(Utils.decode(response.data.Row[i].Cell[1]['$'])),
                            "color":Utils.getRandomColor()
                        });
                    }

                    Utils.putMissingBrands(zeroData,data);
                }

                Utils.get3DStackedColumnChart("publishers",data,"name","tweets","followers")
            }, function errorCallback(response) {
                console.log("error")
            });
           
    }
        
}]);

