am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
   
    var chartData = {
        "2019": [
            {
                "sector": "30under_juu",
                "size": 26.6
            }, {
                "sector": "11_hyeon",
                "size": 10.6
            }, {
                "sector": "soubii_g",
                "size": 23.2
            }, {
                "sector": "z_yooon2da",
                "size": 12.2
            }, {
                "sector": "Public Money",
                "size": 27.4
            }
        ],

        "2018": [
            {
                "sector": "30under_juu",
                "size": 12.2
            }, {
                "sector": "11_hyeon",
                "size": 23.2
            }, {
                "sector": "soubii_g",
                "size": 10.6
            }, {
                "sector": "z_yooon2da",
                "size": 26.6
            }, {
                "sector": "Public Money",
                "size": 27.4
            }
        ]
    };

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add data
    chart.data = [
        {
            "sector": "Agriculture",
            "size": 6.6
        }, {
            "sector": "Mining and Quarrying",
            "size": 0.6
        }, {
            "sector": "Manufacturing",
            "size": 23.2
        }, {
            "sector": "Electricity and Water",
            "size": 2.2
        }, {
            "sector": "Construction",
            "size": 4.5
        }, {
            "sector": "Trade (Wholesale, Retail, Motor)",
            "size": 14.6
        }
    ];

    // Add label
    chart.innerRadius = 60;
    var label = chart
        .seriesContainer
        .createChild(am4core.Label);
    label.text = "2019";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 30;

    // Add and configure Series
    var pieSeries = chart
        .series
        .push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "size";
    pieSeries.dataFields.category = "sector";

    // Animate chart data
    var currentNum = 2019;
    function getCurrentData() {
        label.text = currentNum;
        var data = chartData[currentNum];
        currentNum--;
        if (currentNum < 2018) 
            currentNum = 2019;
        return data;
    }

    function loop() {
        //chart.allLabels[0].text = currentYear;
        var data = getCurrentData();
        for (var i = 0; i < data.length; i++) {
            chart
                .data[i]
                .size = data[i]
                .size;
        }
        chart.invalidateRawData();
        chart.setTimeout(loop, 4000);
    }

    loop();

}); 
