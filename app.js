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
    <div class ="text-container">
      <h2>${song.title}</h2>
      <img src="${song.albumArt}" alt=""/>
      <p>${song.artist}</h2>
      <p>${song.collection}</p>
      <p>${song.price}</p>
      <audio controls>
        <source src="${song.preview}" type = ""/>
      </audio>  
    </div>
  </div>`

        songElement.innerHTML = template
    }
}