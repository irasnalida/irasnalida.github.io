var totalCount=0;
var champ;
var champNex=[3];
var r=[3];
var res;
var hist="";
var cloudinary="https://res.cloudinary.com/dtpybxseq/image/upload/pfp_mcoc/";
var git="https://irasnalida.github.io/crystals/";

function openNexFiveCrystal(n){
    document.getElementById("showChamp").style.display = "block";
    var nexchamp = get3NexFiveChamp();
    totalCount+=1;
    //hist=document.getElementById("showChamp").innerHTML;
    //document.getElementById("showChamp2").innerHTML=hist+"<br>"+document.getElementById("showChamp2").innerHTML;
    //document.getElementById("showChamp").innerHTML = "<div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" src=\""+cloudinary+nexchamp[0]+".png\"><div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" src=\""+cloudinary+nexchamp[1]+".png\"><div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" src=\""+cloudinary+nexchamp[2]+".png\"><br>-------------------";
    //document.getElementById("countTotal").innerHTML = totalCount;
    document.getElementById("showChamp").innerHTML = "<div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" src=\""+cloudinary+nexchamp[0]+".png\"><div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" src=\""+cloudinary+nexchamp[1]+".png\"><div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" src=\""+cloudinary+nexchamp[2]+".png\">";
}

function clearWindow(){
    document.getElementById("showChamp").style.display = "none";
    totalCount=0;
    document.getElementById("countTotal").innerHTML=0;
    document.getElementById("showChamp").innerHTML="";
    document.getElementById("showChamp2").innerHTML="";
}