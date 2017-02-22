myApp.factory('Utils',function(){
    return {
        getRandomColor: function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        encode: function (data) {
            if (typeof data !== "undefined")
                return btoa(data);
            return null;
        },
        decode: function (data) {
            if (typeof data !== "undefined")
                return atob(data);
            return null;
        },
        putMissingBrands:function(allBrands,availableBrands){

            for(var i=0;i<allBrands.length;i++){
                var brand = allBrands[i];
                var exists = false;
                for(var j=0;j<availableBrands.length;j++){
                    if(brand.name == availableBrands[j].name){
                        exists=true;
                        break;
                    }
                }
                if (!exists) availableBrands.push(brand);
            }
        },
        zoomChart: function zoomChart(chart) {
            chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
        },
        getAmBarChart: function (id, data, flag, x, y) {  // flag : export or not, x: x_name, y: y_name
            AmCharts.makeChart(id, {
                "type": "serial",
                "theme": "light",
                "dataProvider": data,
                "valueAxes": [{
                    "gridColor": "#FFFFFF",
                    "gridAlpha": 0.2,
                    "dashLength": 0
                }],
                "gridAboveGraphs": true,
                "startDuration": 1,
                "graphs": [{
                    "balloonText": "[[category]]: <b>[[value]] "+y+"</b>",
                    "fillAlphas": 0.8,
                    "lineAlpha": 0.2,
                    "type": "column",
                    "valueField": y
                }],
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
        getAm3DBarChart: function (id, data, flag, x, y) {

            AmCharts.makeChart(id, {
                "theme": "light",
                "type": "serial",
                "startDuration": 2,
                "dataProvider": data,
                "valueAxes": [{
                    "position": "left",
                    "axisAlpha": 0,
                    "gridAlpha": 0
                }],
                "graphs": [{
                    "balloonText": "[[category]]: <b>[[value]] "+y+"</b>",
                    "colorField": "color",
                    "fillAlphas": 0.85,
                    "lineAlpha": 0.1,
                    "type": "column",
                    "topRadius": 1,
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
                    "axisAlpha": 0,
                    "gridAlpha": 0

                },
                "export": {
                    "enabled": flag
                }
            }, 0);
        },
        getAmLineChart: function (id, data, flag, x, y) {
            var chart = AmCharts.makeChart(id, {
                "type": "serial",
                "theme": "light",
                "marginRight": 40,
                "marginLeft": 40,
                "autoMarginOffset": 20,
                "mouseWheelZoomEnabled": true,
                "valueAxes": [{
                    "id": "v1",
                    "axisAlpha": 0,
                    "position": "left",
                    "ignoreAxisWidth": true
                }],
                "balloon": {
                    "borderThickness": 1,
                    "shadowAlpha": 0
                },
                "graphs": [{
                    "id": "g1",
                    "balloon": {
                        "drop": true,
                        "adjustBorderColor": false,
                        "color": "#ffffff"
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
                    "balloonText": "<span style='font-size:18px;'>[[value]] "+y+"</span>"
                }],

                "chartCursor": {
                    "pan": true,
                    "valueLineEnabled": true,
                    "valueLineBalloonEnabled": true,
                    "cursorAlpha": 1,
                    "cursorColor": "#258cbb",
                    "limitToGraph": "g1",
                    "valueLineAlpha": 0.2,
                    "valueZoomable": true
                },
                "valueScrollbar": {
                    "oppositeAxis": false,
                    "offset": 50,
                    "scrollbarHeight": 10
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
                "dataProvider": data
            });
            chart.addListener("rendered", this.zoomChart);
            this.zoomChart(chart);
        },
        getClusteredBarChar: function (id, data, category, value1, value2) {
            AmCharts.makeChart(id, {
                "type": "serial",
                "theme": "light",
                "categoryField": category,
                "rotate": true,
                "startDuration": 1,
                "categoryAxis": {
                    "gridPosition": "start",
                    "position": "left"
                },
                "trendLines": [],
                "graphs": [
                    {
                        "balloonText": value1 + ":[[value]]",
                        "fillAlphas": 0.8,
                        "id": "AmGraph-1",
                        "lineAlpha": 0.2,
                        "title": value1,
                        "type": "column",
                        "valueField": value1
                    },
                    {
                        "balloonText": value2 + ":[[value]]",
                        "fillAlphas": 0.8,
                        "id": "AmGraph-2",
                        "lineAlpha": 0.2,
                        "title": value2,
                        "type": "column",
                        "valueField": value2
                    }
                ],
                "guides": [],
                "valueAxes": [
                    {
                        "id": "ValueAxis-1",
                        "position": "top",
                        "axisAlpha": 0
                    }
                ],
                "allLabels": [],
                "balloon": {},
                "titles": [],
                "dataProvider": data,
                "export": {
                    "enabled": true
                }

            });
        },
        get3DStackedColumnChart: function (id, data, category, value1, value2) {
            var chart = AmCharts.makeChart(id, {
                "theme": "light",
                "type": "serial",
                "dataProvider": data,
                "valueAxes": [{
                    "stackType": "3d",
                    "unit": "",
                    "position": "left",
                    "title": "Numbers",
                }],
                "startDuration": 1,
                "graphs": [{
                    "balloonText": "Number of " + value1 + " for [[category]] : <b>[[value]]</b>",
                    "fillAlphas": 0.9,
                    "lineAlpha": 0.2,
                    "title": value1,
                    "type": "column",
                    "valueField": value1
                }, {
                    "balloonText": "Number of " + value2 + " for [[category]] : <b>[[value]]</b>",
                    "fillAlphas": 0.9,
                    "lineAlpha": 0.2,
                    "title": value2,
                    "type": "column",
                    "valueField": value2
                }],
                "plotAreaFillAlphas": 0.1,
                "depth3D": 60,
                "angle": 30,
                "categoryField": category,
                "categoryAxis": {
                    "gridPosition": "start"
                },
                "export": {
                    "enabled": true
                }
            });
            jQuery('.chart-input').off().on('input change', function () {
                var property = jQuery(this).data('property');
                var target = chart;
                chart.startDuration = 0;

                if (property == 'topRadius') {
                    target = chart.graphs[0];
                    if (this.value == 0) {
                        this.value = undefined;
                    }
                }
                target[property] = this.value;
                chart.validateNow();
            });
        },
        getPieChartWithLegend: function (id, data, title, value) {
            var chart = AmCharts.makeChart(id, {
                "type": "pie",
                "startDuration": 0,
                "theme": "light",
                "addClassNames": true,
                "legend": {
                    "position": "right",
                    "marginRight": 100,
                    "autoMargins": false
                },
                "innerRadius": "30%",
                "defs": {
                    "filter": [{
                        "id": "shadow",
                        "width": "200%",
                        "height": "200%",
                        "feOffset": {
                            "result": "offOut",
                            "in": "SourceAlpha",
                            "dx": 0,
                            "dy": 0
                        },
                        "feGaussianBlur": {
                            "result": "blurOut",
                            "in": "offOut",
                            "stdDeviation": 5
                        },
                        "feBlend": {
                            "in": "SourceGraphic",
                            "in2": "blurOut",
                            "mode": "normal"
                        }
                    }]
                },
                "dataProvider": data,
                "valueField": value,
                "titleField": title,
                "export": {
                    "enabled": true
                }
            });

            chart.addListener("init", handleInit);

            chart.addListener("rollOverSlice", function (e) {
                handleRollOver(e);
            });

            function handleInit() {
                chart.legend.addListener("rollOverItem", handleRollOver);
            }

            function handleRollOver(e) {
                var wedge = e.dataItem.wedge.node;
                wedge.parentNode.appendChild(wedge);
            }
        },
        get3DPieChart: function (id, data, title, value) {
            AmCharts.makeChart( id, {
                "type": "pie",
                "theme": "light",
                "dataProvider": data,
                "valueField": value,
                "titleField": title,
                "outlineAlpha": 0.4,
                "depth3D": 15,
                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                "angle": 30,
                "export": {
                    "enabled": true
                }
            })
        },
        getZoomableValueAxis:function (id,data,category,value) {
            AmCharts.makeChart(id, {
                "type": "serial",
                "theme": "light",
                "marginRight": 40,
                "marginLeft": 40,
                "autoMarginOffset": 20,
                "dataDateFormat": "YYYY-MM-DD",
                "valueAxes": [ {
                    "id": "v1",
                    "axisAlpha": 0,
                    "position": "left",
                    "ignoreAxisWidth": true
                } ],
                "balloon": {
                    "borderThickness": 1,
                    "shadowAlpha": 0
                },
                "graphs": [ {
                    "id": "g1",
                    "balloon": {
                        "drop": true,
                        "adjustBorderColor": false,
                        "color": "#ffffff",
                        "type": "smoothedLine"
                    },
                    "fillAlphas": 0.2,
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "bulletSize": 5,
                    "hideBulletsCount": 50,
                    "lineThickness": 2,
                    "title": "red line",
                    "useLineColorForBulletBorder": true,
                    "valueField": value,
                    "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
                } ],
                "chartCursor": {
                    "valueLineEnabled": true,
                    "valueLineBalloonEnabled": true,
                    "cursorAlpha": 0,
                    "zoomable": false,
                    "valueZoomable": true,
                    "valueLineAlpha": 0.5
                },
                "valueScrollbar": {
                    "autoGridCount": true,
                    "color": "#000000",
                    "scrollbarHeight": 50
                },
                "categoryField": category,
                "categoryAxis": {
                    "parseDates": true,
                    "dashLength": 1,
                    "minorGridEnabled": true
                },
                "export": {
                    "enabled": true
                },
                "dataProvider": data
            } );
        },
        getRadarChart:function (id,data,category,value) {
            AmCharts.makeChart( id, {
                "type": "radar",
                "theme": "light",
                "dataProvider":data,
                "valueAxes": [ {
                    "axisTitleOffset": 20,
                    "minimum": 0,
                    "axisAlpha": 0.15,
                } ],
                "startDuration": 2,
                "graphs": [ {
                    "balloonText": "[[category]] : [[value]] "+value,
                    "bullet": "round",
                    "lineThickness": 2,
                    "valueField": value
                } ],
                "categoryField": category,
                "export": {
                    "enabled": true
                }
            } );
        },
        getAmHorBarChart:function(id,data,flag,x,y){
            var chart = AmCharts.makeChart(id, {
                    "type": "serial",
                    "theme": "light",
                    "categoryField": x,
                    "rotate": true,
                    "startDuration": 1,
                    "categoryAxis": {
                        "gridPosition": "start",
                        "position": "left"
                    },
                    "trendLines": [],
                    "graphs": [
                        {
                            "balloonText": "Income:[[value]]",
                            "fillAlphas": 0.8,
                            "id": "AmGraph-1",
                            "lineAlpha": 0.2,
                            "title": "Income",
                            "type": "column",
                            "valueField": y
                        }
                    ],
                    "guides": [],
                    "valueAxes": [
                        {
                            "id": "ValueAxis-1",
                            "position": "top",
                            "axisAlpha": 0
                        }
                    ],
                    "allLabels": [],
                    "balloon": {},
                    "titles": [],
                    "dataProvider": data,
                    "export": {
                        "enabled": flag
                    }

                });
        },
        isValid:function(input){
            return true
            return /^[ -~]+$/.test(input)
        },
        getAmPieChart:function(id,data,flag,x,y){
            var chart = AmCharts.makeChart(id, {
                "type": "pie",
                "startDuration": 0,
                "theme": "light",
                "addClassNames": true,
                "legend":{
                    "position":"right",
                    "marginRight":100,
                    "autoMargins":false
                },
                "innerRadius": "30%",
                "defs": {
                    "filter": [{
                    "id": "shadow",
                    "width": "200%",
                    "height": "200%",
                    "feOffset": {
                        "result": "offOut",
                        "in": "SourceAlpha",
                        "dx": 0,
                        "dy": 0
                    },
                    "feGaussianBlur": {
                        "result": "blurOut",
                        "in": "offOut",
                        "stdDeviation": 5
                    },
                    "feBlend": {
                        "in": "SourceGraphic",
                        "in2": "blurOut",
                        "mode": "normal"
                    }
                    }]
                },
                "dataProvider": data,
                "valueField": y,
                "titleField": x,
                "export": {
                    "enabled": flag
                }
                });

                chart.addListener("init", handleInit);

                chart.addListener("rollOverSlice", function(e) {
                handleRollOver(e);
                });

                function handleInit(){
                chart.legend.addListener("rollOverItem", this.handleRollOver);
                }

                var handleRollOver=function(e){
                var wedge = e.dataItem.wedge.node;
                wedge.parentNode.appendChild(wedge);
                }
        },
        getAm3DPieChart:function(id,data,flag,x,y,title){
            var chart = AmCharts.makeChart(id, {
                    "type": "pie",
                    "theme": "light",
                    "titles": [ {
                        "text": title,
                        "size": 16
                    } ],
                    "dataProvider":data,
                    "valueField": y,
                    "titleField": x,
                    "startEffect": "elastic",
                    "startDuration": 2,
                    "labelRadius": 15,
                    "innerRadius": "50%",
                    "depth3D": 10,
                    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                    "angle": 15,
                    "export": {
                        "enabled": flag
                    }
                    } );
        },
        isValid:function(input){
            return /^[a-zA-Z0-9\-\'\ \:\"\(\)\.]+$/i.test(input)
        }
    }
});