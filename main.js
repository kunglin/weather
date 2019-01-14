$(function () {
    $.getJSON("http://t.weather.sojson.com/api/weather/city/101280800", function (data) {
        $("#updateTime").html(data.cityInfo.updateTime); //更新时间
        //昨天天气
        for (var x in data.data.yesterday) {
            if ($("#" + x + "Y").length > 0) {
                if (x == "sunrise")
                    $("#" + x + "Y").html("日出：" + data.data.yesterday[x]);
                else if (x == "sunset")
                    $("#" + x + "Y").html("日落：" + data.data.yesterday[x]);
                else
                    $("#" + x + "Y").html(data.data.yesterday[x]);
            }
        }
        //今天部分天气
        $("#aqiT").html("aqi：" + data.data.forecast[0].aqi)
        for (var x in data.data) {
            //console.log(x);
            if ($("#" + x + "T").length > 0) {
                if (x == "wendu")
                    $("#" + x + "T").html("温度：" + data.data[x]);
                else if (x == "shidu")
                    $("#" + x + "T").html("湿度：" + data.data[x]);
                else if (x == "quality")
                    $("#" + x + "T").html("空气质量：" + data.data[x]);
                else
                    $("#" + x + "T").html(data.data[x]);
            }
        }
        //预测天气
        var time = -1;
        for (var i = 0; i < 5; i++) {
            time++;
            for (var x in data.data.forecast[i]) {
                if ($("#" + x + time).length > 0) {
                    if (x == "sunrise")
                        $("#" + x + time).html("日出：" + data.data.forecast[i][x]);
                    else if (x == "sunset")
                        $("#" + x + time).html("日落：" + data.data.forecast[i][x]);
                    else
                        $("#" + x + time).html(data.data.forecast[i][x]);
                }
            }
        }
    })
});