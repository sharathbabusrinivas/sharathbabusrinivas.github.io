$(document).ready(function(){
    var ctx = $("#lang").get(0).getContext("2d");

    var data = [

        {
            value: 270,
            color: "cornflowerblue",
            highlight: "lightskyblue",
            label: "Java"
        },
        {
            value: 270,
            color: "cornflowerblue",
            highlight: "lightskyblue",
            label: "C++"
        },


        {
            value: 270,
            color: "cornflowerblue",
            highlight: "lightskyblue",
            label: "JavaScript"
        },
        {
            value: 50,
            color: "lightgreen",
            highlight: "yellowgreen",
            label: "HTML"
        },
        {
            value: 40,
            color: "orange",
            highlight: "darkorange",
            label: "CSS"
        },
        {
            value: 50,
            color: "lightgreen",
            highlight: "yellowgreen",
            label: "HTML"
        },
    ];

    var chart = new Chart(ctx).Doughnut(data);
});

$(document).ready(function(){
    var ctx = $("#ide").get(0).getContext("2d");

    var data = [

        {
            value: 270,
            color: "cornflowerblue",
            highlight: "lightskyblue",
            label: "Java"
        },
        {
            value: 270,
            color: "cornflowerblue",
            highlight: "lightskyblue",
            label: "C++"
        },


        {
            value: 270,
            color: "cornflowerblue",
            highlight: "lightskyblue",
            label: "JavaScript"
        },
        {
            value: 50,
            color: "lightgreen",
            highlight: "yellowgreen",
            label: "HTML"
        },
        {
            value: 40,
            color: "orange",
            highlight: "darkorange",
            label: "CSS"
        },
        {
            value: 50,
            color: "lightgreen",
            highlight: "yellowgreen",
            label: "HTML"
        },
    ];

    var chart = new Chart(ctx).Doughnut(data);
});

$(document).ready(function(){
    var ctx = $("#os").get(0).getContext("2d");

    var data = [

        {
            value: 270,
            color: "cornflowerblue",
            highlight: "lightskyblue",
            label: "Windows"
        },
        {
            value: 150,
            color: "cornflowerblue",
            highlight: "lightskyblue",
            label: "Android"
        },


        {
            value: 200,
            color: "cornflowerblue",
            highlight: "lightskyblue",
            label: "Linux"
        },
        {
            value: 200,
            color: "lightgreen",
            highlight: "yellowgreen",
            label: "Unix"
        },
        {
            value: 150,
            color: "orange",
            highlight: "darkorange",
            label: "JNachos"
        },
        
    ];

    var chart = new Chart(ctx).Doughnut(data);
});

$(document).ready(function(){
    var ctx = $("#db").get(0).getContext("2d");

    var data = [

        {
            value: 270,
            color: "cornflowerblue",
            highlight: "lightskyblue",
            label: "Java"
        },
        {
            value: 270,
            color: "cornflowerblue",
            highlight: "lightskyblue",
            label: "C++"
        },


        {
            value: 270,
            color: "cornflowerblue",
            highlight: "lightskyblue",
            label: "JavaScript"
        },
        {
            value: 50,
            color: "lightgreen",
            highlight: "yellowgreen",
            label: "HTML"
        },
        {
            value: 40,
            color: "orange",
            highlight: "darkorange",
            label: "CSS"
        },
        {
            value: 50,
            color: "lightgreen",
            highlight: "yellowgreen",
            label: "HTML"
        },
    ];

    var chart = new Chart(ctx).Doughnut(data);
});




Chart.pluginService.register({
    beforeDraw: function(chart) {
      var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;
  
      ctx.restore();
      var fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";
  
      var text = "75%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
  
      ctx.fillText(text, textX, textY);
      ctx.save();
  }  });