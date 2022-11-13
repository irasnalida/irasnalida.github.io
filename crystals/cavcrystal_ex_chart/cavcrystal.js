var threeCavCount = 0;
var fourCavCount = 0;
var fiveCavCount = 0;
var fiveNexCavCount = 0;
var sixNexCavCount = 0;
var sixCavCount = 0;
var totalCavCount = 0;
var addchmp;
var hist;
var x;
var champ;
var cloudinary = "https://res.cloudinary.com/dtpybxseq/image/upload/pfp_mcoc/";
var git = "https://irasnalida.github.io/crystals/";
var myChart;
var xValues = ["6*Nexus", "5*Nexus", "6*", "5*", "4*", "3*"];
var yValues = [0, 0, 0, 0, 0, 0];

function upChart() {
	let chartData = {
		type: "bar",
		data: {
			labels: xValues,
			datasets: [
				{
					backgroundColor: [
						"rgba(255, 99, 132, 0.2)",
						"rgba(255, 159, 64, 0.2)",
						"rgba(255, 205, 86, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(54, 162, 235, 0.2)",
						"rgba(153, 102, 255, 0.2)",
					],
					borderColor: [
						"rgb(255, 99, 132)",
						"rgb(255, 159, 64)",
						"rgb(255, 205, 86)",
						"rgb(75, 192, 192)",
						"rgb(54, 162, 235)",
						"rgb(153, 102, 255)",
					],
					borderWidth: 1,
					data: yValues,
				},
			],
		},
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							fontColor: "rgb(170,170,170)",
							beginAtZero: true,
							steps: 10,
							stepValue: 5,
							max: 100,
						},
					},
				],
				xAxes: [
					{
						ticks: {
							fontColor: "rgb(170,170,170)"
						},
					},
				],
			},
			legend: { display: false },
			title: {
				display: true,
				fontColor: "rgb(170,170,170)",
				text: "Drop Rate",
			},
		},
	};
	if (typeof this.myChart != "undefined") {
		this.myChart.destroy();
	}
	var targetCanvas = document.getElementById("myChart").getContext("2d");
	myChart = new Chart(targetCanvas, chartData);
	myChart.update();
}

function openCavCrystal(x) {
	for (var i = 0; i < x; i++) {
		n = Math.random();
		if (n >= 0.0 && n < 0.006) {
			sixNexCavCount += 1;
			//var nexpoolsix = get3NexSixChamp();
			//document.getElementById("showChamp").innerHTML ="<div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame6.png\"><img class=\"head_image\" src=\""+cloudinary+nexpoolsix[0]+".png\"></div><div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame6.png\"><img class=\"head_image\" src=\""+cloudinary+nexpoolsix[1]+".png\"></div><div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame6.png\"><img class=\"head_image\" src=\""+cloudinary+nexpoolsix[2]+".png\"></div><br>"+document.getElementById("showChamp").innerHTML;
		} else if (n >= 0.006 && n < 0.03) {
			sixCavCount += 1;
			//var sixchamp = getSixStarChamp();
			//document.getElementById("showChamp").innerHTML="<div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame6.png\"><img class=\"head_image\" src=\""+cloudinary+sixchamp+".png\"></div><br>"+document.getElementById("showChamp").innerHTML;
		} else if (n >= 0.03 && n < 0.062) {
			fiveNexCavCount += 1;
			//var nexpoolsix = get3NexFiveChamp();
			//document.getElementById("showChamp").innerHTML ="<div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" src=\""+cloudinary+nexpoolsix[0]+".png\"></div><div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" src=\""+cloudinary+nexpoolsix[1]+".png\"></div><div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" src=\""+cloudinary+nexpoolsix[2]+".png\"></div><br>"+document.getElementById("showChamp").innerHTML;
		} else if (n >= 0.062 && n < 0.19) {
			fiveCavCount += 1;
			//var fivechamp = getFiveStarChamp()
			//document.getElementById("showChamp").innerHTML="<div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" src=\""+cloudinary+fivechamp+".png\"></div><br>"+document.getElementById("showChamp").innerHTML;
		} else if (n >= 0.19 && n < 0.5) {
			fourCavCount += 1;
		} else {
			threeCavCount += 1;
		}
		totalCavCount =
			threeCavCount +
			fourCavCount +
			fiveCavCount +
			fiveNexCavCount +
			sixCavCount +
			sixNexCavCount;
	}
	document.getElementById("countCavTotal").innerHTML = totalCavCount;
	document.getElementById("countCavThree").innerHTML = threeCavCount;
	document.getElementById("countCavFour").innerHTML = fourCavCount;
	document.getElementById("countCavFive").innerHTML = fiveCavCount;
	document.getElementById("countCavFiveNex").innerHTML = fiveNexCavCount;
	document.getElementById("countCavSix").innerHTML = sixCavCount;
	document.getElementById("countCavSixNex").innerHTML = sixNexCavCount;
	yValues[0] = ((sixNexCavCount * 100) / totalCavCount).toFixed(2);
	yValues[1] = ((fiveNexCavCount * 100) / totalCavCount).toFixed(2);
	yValues[2] = ((sixCavCount * 100) / totalCavCount).toFixed(2);
	yValues[3] = ((fiveCavCount * 100) / totalCavCount).toFixed(2);
	yValues[4] = ((fourCavCount * 100) / totalCavCount).toFixed(2);
	yValues[5] = ((threeCavCount * 100) / totalCavCount).toFixed(2);
	document.getElementById("countCavSixNexPerc").innerHTML = yValues[0]+"%"
	document.getElementById("countCavFiveNexPerc").innerHTML = yValues[1]+"%"
	document.getElementById("countCavSixPerc").innerHTML = yValues[2]+"%"
	document.getElementById("countCavFivePerc").innerHTML = yValues[3]+"%"
	document.getElementById("countCavFourPerc").innerHTML = yValues[4]+"%"
	document.getElementById("countCavThreePerc").innerHTML = yValues[5]+"%"
	upChart();
}

function clearWindow() {
	document.getElementById("countCavTotal").innerHTML = totalCavCount =0;
	document.getElementById("countCavThree").innerHTML = threeCavCount =0;
	document.getElementById("countCavFour").innerHTML = fourCavCount =0;
	document.getElementById("countCavFive").innerHTML = fiveCavCount =0;
	document.getElementById("countCavFiveNex").innerHTML = fiveNexCavCount =0;
	document.getElementById("countCavSix").innerHTML = sixCavCount =0;
	document.getElementById("countCavSixNex").innerHTML = sixNexCavCount =0;
	//document.getElementById("showChamp").innerHTML="";
	yValues[0] = 0;
	yValues[1] = 0;
	yValues[2] = 0;
	yValues[3] = 0;
	yValues[4] = 0;
	yValues[5] = 0;
	document.getElementById("countCavSixNexPerc").innerHTML = yValues[0] + "%";
	document.getElementById("countCavFiveNexPerc").innerHTML = yValues[1] + "%";
	document.getElementById("countCavSixPerc").innerHTML = yValues[2] + "%";
	document.getElementById("countCavFivePerc").innerHTML = yValues[3] + "%";
	document.getElementById("countCavFourPerc").innerHTML = yValues[4] + "%";
	document.getElementById("countCavThreePerc").innerHTML = yValues[5] + "%";
	upChart();
}
