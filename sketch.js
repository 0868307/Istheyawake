
var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,
    search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);
    urlParams = {};
    while (match = search.exec(query))

        urlParams[decode(match[1])] = decode(match[2]);
})();
var x = 300;
var y = 100;
var texxt;
var sleepy;
var happy;
var back;
var d = new Date(parseInt(urlParams.time));
var uur = d.getHours();
var xtratext = "";
var buttonX = 0;
var buttonY = 0;
var buttonWidth = 200;
var buttonHeight = 100;

var temp = Math.round(urlParams.temp - 273.15)+ " degrees";
var humidity = urlParams.humidity + "%";
var sunrise = urlParams.sunrise;
var sunset = urlParams.sunset;
var winddeg = urlParams.winddeg + " degrees";
var windspeed = urlParams.windspeed + " m/s";
var weatherdesc = urlParams.weatherdesc;
var weather = urlParams.weather;
var weatherimg;
function preload() {
    sleepy = loadImage("./img/sleepy.png");
    happy = loadImage("./img/happy.jpg");
    back = loadImage("./img/back.png");
    sun = loadImage("./img/sun.jpg");
    sun2 = loadImage("./img/sun2.jpg");
    rain = loadImage("./img/rain.jpg");
    rain2 = loadImage("./img/rain2.jpg");
    cloudy = loadImage("./img/cloudy.jpg");
    storm = loadImage("./img/storm.jpg");
    fog = loadImage("./img/fog.jpg");
    snow = loadImage("./img/snow.jpg");
}
function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    if(weather.toLowerCase().indexOf("cloud") != -1){
        weatherimg = cloudy;
    }else if(weather.toLowerCase().indexOf("sun") != -1 || weather.toLowerCase().indexOf("clear") != -1){
        weatherimg = sun;
    }else if(weather.toLowerCase().indexOf("storm") != -1){
        weatherimg = storm;
    }else if(weather.toLowerCase().indexOf("rain") != -1){
        weatherimg = rain;
    }else if(weather.toLowerCase().indexOf("fog") != -1){
        weatherimg = fog;
    }else if(weather.toLowerCase().indexOf("snow") != -1){
        weatherimg = snow;
    }else{
        weatherimg = sun2;
    }
    image(weatherimg,0,0,width,height);
    fill(0);
    if(weatherdesc)
    image(back,buttonX,buttonY,buttonWidth,buttonHeight);
    if(d.getHours() < 23 && d.getHours() > 9){
        xtratext = "THEY BE AWAKE";
    }else{
        xtratext = "THEY BE SLEEPIN";
    }
    init();
}
function init(){
    frameRate(10);
    tsize = 24;
    lineheight = 48;
    textSize(tsize);
    fill(0);
    noStroke();
    var x=0;
    //weer
    addText("temp: " +temp,50,height/4+lineheight*x++);
    addText("humidity: " +humidity,50,height/4+lineheight*x++);
    addText("sunrise: " +new Date(sunrise*1).toLocaleString(),50,height/4+lineheight*x++);
    addText("sunset: " +new Date(sunset*1).toLocaleString(),50,height/4+lineheight*x++);
    addText("wind angle: " +winddeg,50,height/4+lineheight*x++);
    addText("windspeed: " +windspeed,50,height/4+lineheight*x++);
    addText("weatherdesc: " +weatherdesc,50,height/4+lineheight*x++);
    tsize = 48;
    textSize(tsize);
    lineheight = 80;

    textSize(tsize);
    //tijd
    addText(xtratext,width/4 ,height/6);
    addText(urlParams.name,width/4 ,height/4*3-lineheight);
    addText(d.toLocaleString(),width/4 ,height/4*3);
}
var tsize,lineheight;
function draw() {

}
function addText(txt,x,y){

	var c = color(0, 0, 0, 150);
	fill(c);
	var textlength = txt.length * tsize/1.5 ;
	rect(x-lineheight/5,y+lineheight/5,textlength,-(lineheight-tsize/2));
	fill(255);
	text(txt,x,y);
}

function mouseClicked(){
    if(mouseX >= buttonX && mouseY > buttonY && mouseX < buttonX+buttonWidth && mouseY < buttonY+buttonHeight){
        window.location = "./";
    }
}