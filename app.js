//Do Not Modify the getMusic function

var myTunes = new MyTunes()
myTunes.loadTracks()

function getMusic() {
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}

$('#song').on('click', '.add', function () {
    myTunes.addTrack(this.id)
    drawSongs(myTunes.getMyTracks(), '#my-song')
    drawSongs(myTunes.getTracks(), '#song')
})

$('#my-song').on('click', '.remove', function () {
    myTunes.removeTrack(this.id)
    drawSongs(myTunes.getMyTracks(), '#my-song')
    drawSongs(myTunes.getTracks(), '#song')
})

$('#my-song').on('click', '.promote', function () {
    myTunes.promoteTrack(this.id)
    drawSongs(myTunes.getMyTracks(), '#my-song')
})

$('#my-song').on('click', '.demote', function () {
    myTunes.demoteTrack(this.id)
    drawSongs(myTunes.getMyTracks(), '#my-song')
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
        myTemplate += `
                        <div class ="text-container">
                            <div class="row card-white">            
                                <div class="col-xs-12 col-md-2">
                                    <img class="img-thumbnail" src="${song.albumArt}" alt=""/>
                                </div>
                                <div class="col-xs-12 col-md-5">
                                    <h3>${song.title}</h3>
                                    <p>By: ${song.artist}</h2>
                                    <p>Album: ${song.collection}</p>
                                    <button class="btn promote stroke2" id="${song.id}">Promote</button>                                    
                                    <button class="btn demote stroke2" id="${song.id}">Demote</button>                                   
                                    <p>${song.rating}</p>
                                       
                                </div>
                            <div class="col-xs-12 col-md-4">                
                                <audio controls preload="none">
                                    <source src="${song.preview}" type = ""/>
                                </audio>
                                <button class="btn remove stroke2" id="${song.id}">Remove from Playlist</button>
                            </div>
                            <div class="col-xs-12 col-md-1">
                                <p><a href="#">$${song.price}</a></p>
                            </div>
                        </div>
                    </div>
                `

        iTunesTemplate += `
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
                                <button class="btn add stroke2" id="${song.id}">Add to Playlist</button>
                            </div>
                            <div class="col-xs-12 col-md-1">
                                <p><a href="#">$${song.price}</a></p>
                            </div>
                        </div>
                    </div>
                `

        elem.append(target == '#song' ? iTunesTemplate : myTemplate)
    }
        myTunes.saveTracks()


    window.addEventListener("play", function (evt) {
        if (window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target) {
            window.$_currentlyPlaying.pause();
        }
        window.$_currentlyPlaying = evt.target;
    }, true);
}









// Still works at this point in time.

