var x;
var nex=[3];
var git="https://irasnalida.github.io/crystals/";
var cloudinary="https://res.cloudinary.com/dtpybxseq/image/upload/pfp_mcoc/";

var champ = {
    "fsbp":[
        "abominationimmortal","aegon","agentvenom","airwalker","angela","annihilus","antman","appocalypse","archangel",
        "beast","bishop","blackpanther","blackpanthercivilwar","blackwidowclairevoyant","blackwidowdeadlyorigin","blade",
        "cable","captainamerica","captainamericainfinitywar","captainmarvelmovie","captainmarvelogclassic","carnage","civilwarrior","colossus","corvusglave","cosmicghostrider","crossbones","cullobsidian","cyclopsblueteam","cyclopsxavierschool",
        "daredevilnetflix","darkhawk","diablo","doctoroctopus","doctorvoodoo","domino","doom","dormammu","dragonman","drax",
        "ebonymaw","elektra","elsabloodstone","emmafrost",
        "falcon",
        "gambit","ghost","ghostrider","greengoblin","groot","guardianportrait","guillotine","guillotine2099","gwenpool",
        "havok","hawkeye","heimdall","hela","hitmonkey","howardtheduck","hulk","hulkragnarok","hulkbuster","hulkimmortal","humantorch","hyperion",
        "iceman","invisiblewomen","ironfist","ironman","ironmaninfinitywar","ironpatriot",
        "jabaripanther","jubilee","juggernaut",
        "karnak","killmonger","kinggroot","kingpin","korg",
        "loki","longshot","lukecage",
        "magik","magneto","mangog","manthing","masacre","medusa","mephisto","misterfantastic","misternegative","mistersinister","modok","mojo","moleman","moonknight","mordo","morningstar","msmarvelkamalakhan","mysterio",
        "namor","nebula","nickfury","nightthrasher","nightcrawler","nova",
        "odin","oldmanlogan","omegared",
        "phoenix","professorx","proximamidnight","psylocke","psychoman","punisher2099",
        "quake",
        "redgoblin","redguardian","redhulk","redskull","rhino","rocketraccoon","rogue","ronan","ronin",
        "sabretooth","sasquatchportrait","sentinel","sentry","shangchi","shehulk","silvercenturionportrait","silversurfer","sorcerersupreme","spidergwen","spidermanclassic","spidermanmilesmorales","spidermanstarkenhanced","spidermanstealthsuite","spidermansymbiote","spiderham","squirrelgirl","starlord","storm","stormpyramidx","stryfe","sunspot","superskrull","superiorironman","symbiotesupreme",
        "taskmaster","terrax","thechampion","thehood","thing","thorjanefoster","thorragnarok","tigra","ultronprime",
        "venom","venomtheduck","venompool","visionaarkus","void","vulture",
        "warlock","wasp","wintersoldier","wolverinex23",
        "yellowjacket","yondu"
    ],
    "ssbp":[
        "abomination","abominationimmortal","aegon","agentvenom","airwalker","angela","annihilus","antman","appocalypse","archangel",
        "beast","bishop","blackbolt","blackpanther","blackpanthercivilwar","blackwidowclairevoyant","blackwidowdeadlyorigin",
        "cable","captainamerica","captainamericainfinitywar","captainamericaworldwar2","captainmarvelmovie","captainmarvelogclassic","carnage","civilwarrior","colossus","corvusglave","cosmicghostrider","crossbones","cullobsidian","cyclopsblueteam","cyclopsxavierschool",
        "daredevilclassicog","daredevilnetflix","darkhawk","deadpoolxforce","diablo","doctoroctopus","doctorstrange","doctorvoodoo","domino","doom","dormammu","dragonman","drax",
        "ebonymaw","electro","elektra","elsabloodstone","emmafrost",
        "falcon",
        "gambit","gamora","ghost","ghostrider","greengoblin","groot","guardianportrait","guillotine","guillotine2099","gwenpool",
        "havok","hawkeye","heimdall","hela","hitmonkey","howardtheduck","hulk","hulkbuster","hulkimmortal","hulkragnarok","humantorch",
        "invisiblewomen","ironfist","ironman","ironmaninfinitywar","ironpatriot",
        "joefixit","jubilee","juggernaut",
        "karnak","killmonger","kingpin","kinggroot","korg",
        "loki","longshot","lukecage",
        "magik","magneto","magnetomarvelnow","manthing","masacre","medusa","mephisto","misterfantastic","mistersinister","modok","mojo","moleman","moonknight","mordo","morningstar","msmarvelkamalakhan","msparvel","mysterio",
        "namor","nebula","nickfury","nightcrawler","nightthrasher","nova",
        "oldmanlogan","omegared",
        "phoenix","professorx","proximamidnight","psylocke","punisher2099",
        "redgoblin","redguardian","redhulk","redskull","rhino","rocketraccoon","rogue","ronan","ronin",
        "sabretooth","sasquatchportrait","sentinel","sentry","shehulk","silversurfer","sorcerersupreme","spiderham","spidergwen","spidermanclassic","spidermanmilesmorales","spidermanstealthsuite","spidermansymbiote","squirrelgirl","starlord","storm","stormpyramidx","stryfe","sunspot","superiorironman",
        "taskmaster","terrax","thechampion","thehood","thing","thor","thorjanefoster","thorragnarok","tigra",
        "ultronprime",
        "venom","venompool","venomtheduck","visionaarkus","visionageofultron","void","vulture",
        "warlock","warmachine","wasp","wintersoldier","wolverine","wolverinex23",
        "yellowjacket","yondu"
    ],
    "fsfp":[
        "abomination","abominationimmortal","aegon","agentvenom","airwalker","angela","annihilus","antman","appocalypse","archangel",
        "beast","bishop","blackbolt","blackpanther","blackpanthercivilwar","blackwidowclairevoyant","blackwidowdeadlyorigin",
        "cable","captainamerica","captainamericainfinitywar","captainamericaworldwar2","captainmarvelmovie","captainmarvelogclassic","carnage","civilwarrior"
    ]
}

function readjson(level){
    x=level;
    //let requestURL =git+'script/poolinfo.json';
    let requestURL ='../script/poolinfo.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onloadend = function(){
        //const champTemp=request.response;
        //champ=champTemp;
        champ=request.response;
        //console.log(champ['featfivestarpool'][0]);
    }
    //console.log(champ['featfivestarpool'][0]);
}

function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function getFiveStarChamp(){
    var r=randomInt(0,champ['fsbp'].length-1);
    return champ['fsbp'][r];
}

function getFeatFiveStarChamp(){
    var r=randomInt(0,champ['fsfp'].length-1);
    return champ['fsfp'][r];
}

function getSixStarChamp(){
    var r=randomInt(0,champ['ssbp'].length-1);
    return champ['ssbp'][r];
}

function getChamp(len){
    nex[0]=randomInt(0,len);
    nex[1]=randomInt(0,len);
    nex[2]=randomInt(0,len);
    while(nex[0]==nex[1]){
        nex[1]=randomInt(0,len);
    }
    while(nex[2]==nex[0] || nex[2]==nex[1]){
        nex[2]=randomInt(0,len);
    }
}

function get3NexFiveChamp(){
    getChamp(champ['fsbp'].length-1);
    var nexpool=[champ['fsbp'][nex[0]], champ['fsbp'][nex[1]],champ['fsbp'][nex[2]]];
    return nexpool;
}
function get3NexSixChamp(){
    getChamp(champ['ssbp'].length-1);
    var nexpool=[champ['ssbp'][nex[0]], champ['ssbp'][nex[1]],champ['ssbp'][nex[2]]];
    return nexpool;
}
function getStructure(frametype, champid){
    return ("<div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame"+frametype+".png\"><img class=\"head_image\" src=\""+cloudinary+champid+".png\"></div>")
}
function getNexusStructure(frametype, champid){
    return ("<div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame"+frametype+".png\"><img class=\"head_image\" src=\""+cloudinary+champid[0]+".png\"></div><div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame"+frametype+".png\"><img class=\"head_image\" src=\""+cloudinary+champid[1]+".png\"></div><div class=\"framewithport\"><img class=\"border\" src=\""+cloudinary+"frame"+frametype+".png\"><img class=\"head_image\" src=\""+cloudinary+champid[2]+".png\"></div>")
}