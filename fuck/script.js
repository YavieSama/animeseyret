function openAnime(location, name){
    $('html, body').animate({ scrollTop: 10 }, 500);
    document.getElementById("mainPage").style.display = "none"
    document.getElementById(location).style.display = "block"

    //animenin resmi, ismi ve açıklamasını koyar
    document.getElementById("animeTitle").innerText = eval(name).name
    document.getElementById("animeDesc").innerText = eval(name).description
    document.getElementById("animeImg").src = eval(name).img

    if(location == "episodeSelect"){
        currentAnime = eval(name) //açık olan anime
        for(var i = 1; i < eval(name).seasonAmount + 1; i++){ //sezonlardaki bölüm sayısını alır
            var newButton = document.createElement("button")
            newButton.innerText = i+".Sezon"
            newButton.classList.add("seasonButton")
            newButton.setAttribute("onclick", "openAnimeSeason("+eval(name+"."+"season"+i)+", "+i+")")
            document.getElementById("infoAboutAnime").appendChild(newButton)
        }
        openAnimeSeason(currentAnime.season1, 1);
    }
}
function openAnimeSeason(episodeAmount, seasonNumber){
    document.getElementById("seasonEpisode").innerHTML = ''
    for(var i = 1; i < episodeAmount + 1; i++){
        var newButton = document.createElement("button")
        newButton.innerText = seasonNumber+".Sezon: "+i+".Bölüm "
        newButton.classList.add("seasonEpisodeButton")
        //todo OPEN VIDEO PLAYER
        document.getElementById("seasonEpisode").appendChild(newButton)
        
    }
}

//NEW STUFF I THINK

//slider
let sliderX1 = 0
let sliderX2 = 0
let sliderX3 = 0

function sliderMove(x, y, z){
    var j = eval(z)
    if(x == true){
        if(j < 0) j -= -45
    }
    else if(x == false){
        if(j > -90) j += -45 
    }
    y.style.transform = "translateX("+j+"%)"
    eval(z + "=" + j)
}
//slider

//sayfa açıcı

function openAnimeSeason(episodeAmount, seasonNumber){
    document.getElementById("seasonEpisode").innerHTML = ''
    for(var i = 1; i < episodeAmount + 1; i++){
        var newButton = document.createElement("button")
        newButton.innerText = seasonNumber + ".Sezon: " + i + ".Bölüm "
        newButton.classList.add("seasonEpisodeButton")
        //todo OPEN VIDEO PLAYER
        document.getElementById("seasonEpisode").appendChild(newButton)
    }
}
