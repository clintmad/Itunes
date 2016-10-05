function MyTunes() {
    


    var myTracks = []
    

    this.getTracks = function () {
        return iTunesSongList
    }

    this.getMyTracks = function () {
        return myTracks
    }

    this.addTrack = function (id) {
        
        for (var i = 0; i < iTunesSongList.length; i++) {
            var songIWant = iTunesSongList[i];
            if (id == songIWant.id) {
                myTracks.push(songIWant)
                iTunesSongList.splice(i, 1)
                break;
            }
        }
        console.log(myTracks)
    }

    this.removeTrack = function (id) {
        
        for (var i = 0; i < myTracks.length; i++) {
            var oldSong = myTracks[i];
            if (id == oldSong.id) {
                myTracks.splice(i, 1)
                iTunesSongList.push(oldSong)
                break;
            }
        }
        

    }
    this.promoteTrack = function () {

    }
    this.demoteTrack = function () {

    }
}

function saveTracks() {
    myTunes.addTrack(track)
    return
}

function loadTracks() {

}