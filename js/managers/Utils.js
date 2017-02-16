myApp.factory('Utils',function(){
    return{
        getRandomColor:function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        encode:function(data){
            if(typeof data!=="undefined")
                return btoa(data);
            return null;
        },
        decode:function(data){
            if(typeof data!=="undefined")
                return atob(data);
            return null;
        },
        zoomChart:function zoomChart(chart) {
           chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
        },
        getAmBarChart:function(id,data,flag,x,y){  // flag : export or not, x: x_name, y: y_name 
            console.log(data)
            AmCharts.makeChart(id,{
                "type": "serial",
                "theme": "light",
                "dataProvider": data,
                "valueAxes": [ {
                    "gridColor": "#FFFFFF",
                    "gridAlpha": 0.2,
                    "dashLength": 0
                } ],
                "gridAboveGraphs": true,
                "startDuration": 1,
                "graphs": [ {
                    "balloonText": "[[category]]: <b>[[value]]</b>",
                    "fillAlphas": 0.8,
                    "lineAlpha": 0.2,
                    "type": "column",
                    "valueField": y
                } ],
                "chartCursor": {
                    "categoryBalloonEnabled": false,
                    "cursorAlpha": 0,
                    "zoomable": false
                },
                "categoryField": x,
                "categoryAxis": {
                    "gridPosition": "start",
                    "gridAlpha": 0,
                    "tickPosition": "start",
                    "tickLength": 20
                },
                "export": {
                    "enabled": flag
                }
            })
        },
        getAm3DBarChart:function(id,data,flag,x,y){
            
             AmCharts.makeChart(id, {
                "theme": "light",
                "type": "serial",
                "startDuration": 2,
                "dataProvider":data,
                "valueAxes": [{
                    "position": "left",
                    "axisAlpha":0,
                    "gridAlpha":0
                }],
                "graphs": [{
                    "balloonText": "[[category]]: <b>[[value]]</b>",
                    "colorField": "color",
                    "fillAlphas": 0.85,
                    "lineAlpha": 0.1,
                    "type": "column",
                    "topRadius":1,
                    "valueField": y
                }],
                "depth3D": 40,
                "angle": 30,
                "chartCursor": {
                    "categoryBalloonEnabled": false,
                    "cursorAlpha": 0,
                    "zoomable": false
                },
                "categoryField": x,
                "categoryAxis": {
                    "gridPosition": "start",
                    "axisAlpha":0,
                    "gridAlpha":0

                },
                "export": {
                    "enabled": flag
                }
            }, 0);
        },
        getAmLineChart:function(id,data,flag,x,y){
                var chart=AmCharts.makeChart(id, {
                    "type": "serial",
                    "theme": "light",
                    "marginRight": 40,
                    "marginLeft": 40,
                    "autoMarginOffset": 20,
                    "mouseWheelZoomEnabled":true,
                    "valueAxes": [{
                        "id": "v1",
                        "axisAlpha": 0,
                        "position": "left",
                        "ignoreAxisWidth":true
                    }],
                    "balloon": {
                        "borderThickness": 1,
                        "shadowAlpha": 0
                    },
                    "graphs": [{
                        "id": "g1",
                        "balloon":{
                        "drop":true,
                        "adjustBorderColor":false,
                        "color":"#ffffff"
                        },
                        "bullet": "round",
                        "bulletBorderAlpha": 1,
                        "bulletColor": "#FFFFFF",
                        "bulletSize": 5,
                        "hideBulletsCount": 50,
                        "lineThickness": 2,
                        "title": "red line",
                        "useLineColorForBulletBorder": true,
                        "valueField": y,
                        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
                    }],
                    
                    "chartCursor": {
                        "pan": true,
                        "valueLineEnabled": true,
                        "valueLineBalloonEnabled": true,
                        "cursorAlpha":1,
                        "cursorColor":"#258cbb",
                        "limitToGraph":"g1",
                        "valueLineAlpha":0.2,
                        "valueZoomable":true
                    },
                    "valueScrollbar":{
                    "oppositeAxis":false,
                    "offset":50,
                    "scrollbarHeight":10
                    },
                    "categoryField": x,
                    "categoryAxis": {
                        "parseDates": false,
                        "dashLength": 1,
                        "minorGridEnabled": true
                    },
                    "export": {
                        "enabled": flag
                    },
                    "dataProvider":data
                });
                chart.addListener("rendered", this.zoomChart);
                this.zoomChart(chart);
        }
    }
})