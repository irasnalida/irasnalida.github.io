var cloudinary="https://res.cloudinary.com/dtpybxseq/image/upload/pfp_mcoc/";

function openGmCrystal(x){
    for(var i=0;i<x;i++){
        var n = Math.random()
        if(n>=0.0 && n<0.006){
            document.getElementById("countGmFiveNex").innerHTML=Number(document.getElementById("countGmFiveNex").innerHTML)+1;
        }
        else if(n>=0.006 && n<0.03){
            document.getElementById("countGmFive").innerHTML=Number(document.getElementById("countGmFive").innerHTML)+1;
            var champname = getFiveStarChamp();
            document.getElementById("showChamp").innerHTML="<div class=\"framewithport showpopup\"><img class=\"border\" src=\""+cloudinary+"frame5.png\"><img class=\"head_image\" id=\"i"+champname+"\" src=\""+cloudinary+champname+".png\"></div><br>"+document.getElementById("showChamp").innerHTML;
        }
        else if(n>=0.03 && n<0.06){
            document.getElementById("countGmFourNex").innerHTML=Number(document.getElementById("countGmFourNex").innerHTML)+1;
        }
        else if(n>=0.06 && n<0.18){
            document.getElementById("countGmFour").innerHTML=Number(document.getElementById("countGmFour").innerHTML)+1;
        }
        else{
            document.getElementById("countGmThree").innerHTML=Number(document.getElementById("countGmThree").innerHTML)+1;
        }
        document.getElementById("countGmTotal").innerHTML=Number(document.getElementById("countGmThree").innerHTML)+Number(document.getElementById("countGmFour").innerHTML)+Number(document.getElementById("countGmFourNex").innerHTML)+Number(document.getElementById("countGmFive").innerHTML)+Number(document.getElementById("countGmFiveNex").innerHTML);
    }
}
function clearWindow(){
    document.getElementById("countGmTotal").innerHTML = "0";
    document.getElementById("countGmThree").innerHTML = "0";
    document.getElementById("countGmFour").innerHTML = "0";
    document.getElementById("countGmFourNex").innerHTML = "0";
    document.getElementById("countGmFive").innerHTML = "0";
    document.getElementById("countGmFiveNex").innerHTML = "0";
    document.getElementById("showChamp").innerHTML="";
}