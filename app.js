//Do Not Modify the getMusic function

var myTunes = new MyTunes()


function getMusic() {
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}

$('#song').on('click', '.btn-success', function () {
    myTunes.addTrack(this.id)
    drawSongs(myTunes.getMyTracks(), '#my-song')
    drawSongs(myTunes.getTracks(), '#song')
})

$('#my-song').on('click', '.btn-danger', function () {
    myTunes.removeTrack(this.id)
    drawSongs(myTunes.getMyTracks(), '#my-song')
    drawSongs(myTunes.getTracks(), '#song')
})


    var iTunesSongList = [];

function drawSongs(songList, target) {    
    if (!target) {
        iTunesSongList = songList
        target = '#song'
    }
    var elem = $(target)
    elem.empty()

    for (var i = 0; i < songList.length; i++) {
    var iTunesTemplate = "";
    var myTemplate = "";
        var song = songList[i]
        myTemplate += `<div id="foo" class="songText2">
                        <div class ="text-container">
                            <div class="row card-white">            
                                <div class="col-xs-12 col-md-2">
                                    <img class="img-thumbnail" src="${song.albumArt}" alt=""/>
                                </div>
                                <div class="col-xs-12 col-md-5">
                                    <h3>${song.title}</h3>
                                    <p>By: ${song.artist}</h2>
                                    <p>Album: ${song.collection}</p>
                                </div>
                            <div class="col-xs-12 col-md-4">                
                                <audio controls preload="none">
                                    <source src="${song.preview}" type = ""/>
                                </audio>
                                <button class="btn-danger" id="${song.id}">Remove from my Tracks</button>
                            </div>
                            <div class="col-xs-12 col-md-1">
                                <p><a href="#">$${song.price}</a></p>
                            </div>
                        </div>
                    </div>
                </div>`

        iTunesTemplate += `<div id="foo-too" class="songText2">
                        <div class ="text-container">
                            <div class="row card-white">            
                                <div class="col-xs-12 col-md-2">
                                    <img class="img-thumbnail" src="${song.albumArt}" alt=""/>
                                </div>
                                <div class="col-xs-12 col-md-5">
                                    <h3>${song.title}</h3>
                                    <p>By: ${song.artist}</h2>
                                    <p>Album: ${song.collection}</p>
                                </div>
                            <div class="col-xs-12 col-md-4">                
                                <audio controls preload="none">
                                    <source src="${song.preview}" type = ""/>
                                </audio>
                                <button class="btn-success" id="${song.id}">Add to my Tracks</button>
                            </div>
                            <div class="col-xs-12 col-md-1">
                                <p><a href="#">$${song.price}</a></p>
                            </div>
                        </div>
                    </div>
                </div>`

        elem.append(target == '#song' ? iTunesTemplate : myTemplate)
    }







    window.addEventListener("play", function (evt) {
        if (window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target) {
            window.$_currentlyPlaying.pause();
        }
        window.$_currentlyPlaying = evt.target;
    }, true);
}










// Still works at this point in time.
