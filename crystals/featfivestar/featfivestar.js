var totalCount=0;
var x=24;
var champ;
var fullpool;
var r;
var nl="";
var n;
var hist="";
var t;
var cloudinary="https://res.cloudinary.com/dtpybxseq/image/upload/pfp_mcoc/";
var git="https://irasnalida.github.io/crystals/";

function makeArray(){
    for(var i=0;i<24;i++){
        t="<div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" src=\""+cloudinary+cname['fsfp'][i]+".png\"><span class=\"dot\" id=\""+cname['fsfp'][i]+"\">0</span></div>";
        document.getElementById("reveal_pool").innerHTML= t.concat(document.getElementById("reveal_pool").innerHTML);
    }
}
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function openCrystal(p){
    document.getElementById("countTotal").innerHTML = Number(document.getElementById("countTotal").innerHTML)+p;
    //document.getElementById("dispChamp").innerHTML="";
    for(var i=0;i<p;i++){
        //nl="";
        //r=randomInt(0,champ.length-1);
        //totalCount+=1;
        //nl=nl+r;
        //n=Number(document.getElementById("champ"+nl).innerHTML);
        //n+=1;
        //document.getElementById("champ"+nl).style.display='';
        //document.getElementById("champ"+nl).innerHTML=n;
        var champname=getFeatFiveStarChamp();
        hist="<div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" src=\""+cloudinary+champname+".png\"><span class=\"dot\" id=\""+champname+"\"></span></div>";
        document.getElementById("dispChamp").innerHTML= hist.concat(document.getElementById("dispChamp").innerHTML);
    }
}
function clearWindow(){
    totalCount=0;
    document.getElementById("countTotal").innerHTML=0;
    document.getElementById("dispChamp").innerHTML="";
    for(var i=0;i<x;i++){
        document.getElementById("champ"+i).innerHTML="0";
    }
}