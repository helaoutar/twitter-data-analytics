var myApp = angular.module("App", [
    "ui.router",
    "oc.lazyLoad",
    "restangular"
]);

myApp.controller("Section1Controller",function($scope,$http){
    $scope.init=function(){
        var ctx=document.getElementById('myChart');   
        $http({
            method: 'GET',
            url: 'http://localhost:8080/lang/*',
            headers: {
                'Accept':'Application/json'
            }
            }).then(function successCallback(response) {
                var labels=[]
                var dataa=[]
                for(var i=0;i<response.data.Row.length;i++){
                    labels.push(atob(response.data.Row[i]['key']))
                    dataa.push(parseInt(atob(response.data.Row[i].Cell[0]['$'])))
                }
                    var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '# of Votes',
                        data: dataa,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            })
    
            }, function errorCallback(response) {
                
            });
    }
        
});
