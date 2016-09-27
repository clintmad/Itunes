//Do Not Modify the getMusic function
function getMusic() {
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList) {
    var template = "";
    var songElement = document.getElementById('song')
    for (var i = 0; i < songList.length; i++) {
        var song = songList[i]
        template += `<div id="song">
    <div class ="text-container container-fluid">
        <div class="row card-white">            
            <div class="col-xs-12 col-md-2">
                <img class="art" src="${song.albumArt}" alt=""/>
            </div>
            <div class="col-xs-12 col-md-6">
                <h3>${song.title}</h3>
                <p>${song.artist}</h2>
                <p>${song.collection}</p>
            </div>
            <div class="col-xs-12 col-md-3">
                <audio controls>
                    <source src="${song.preview}" type = ""/>
                </audio>
            </div>
            <div class="col-xs-12 col-md-1">
                <p>${song.price}</p>
            </div>
        </div>
    </div>
  </div>`

        songElement.innerHTML = template
    }
}

window.addEventListener("play", function(evt)
{
    if(window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target)
    {
        window.$_currentlyPlaying.pause();
    } 
    window.$_currentlyPlaying = evt.target;
}, true);