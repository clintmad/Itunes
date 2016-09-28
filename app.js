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
        template += `<div id="song" class="songText">
    <div class ="text-container container-fluid">
        <div class="row card-white">            
            <div class="col-xs-12 col-md-2">
                <img class="art img-thumbnail" src="${song.albumArt}" alt=""/>
            </div>
            <div class="col-xs-12 col-md-6">
                <h3>${song.title}</h3>
                <p>By: ${song.artist}</h2>
                <p>Album: ${song.collection}</p>
            </div>
            <div class="col-xs-12 col-md-3">                
                <audio controls>
                    <source src="${song.preview}" type = ""/>
                </audio>
            </div>
            <div class="col-xs-12 col-md-1">
                <p><a href="#">$${song.price}</a></p>
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