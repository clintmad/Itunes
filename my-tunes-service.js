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

    this.sortByRating = function(myTracks){
        debugger
        return myTracks.sort(function (a, b){
            if(a.rating > b.rating){
                return -1
            }
            if(a.rating < b.rating){
                return 1
            }
            if(a.rating == b.rating){
                return 0
            }
        })
    }

    this.promoteTrack = function (id) {
        debugger
        for (var i = 0; i < myTracks.length; i++) {
            
            var goodSong = myTracks[i];
            if (id == goodSong.id) {
                goodSong.rating ++
            }
        }
        this.sortByRating(myTracks)
    }

    this.demoteTrack = function (id) {
        debugger
        for (var i = 0; i < myTracks.length; i++) {
            
            var worseSong = myTracks[i];
            if (id == worseSong.id && myTracks.rating > 0) {
                worseSong.rating --
            }
        }
        this.sortByRating(myTracks)
    }

    this.loadTracks = function () {
        var localData = localStorage.getItem("my-tracks");
            if(localData){
                myTracks = JSON.parse(localData);
            }
    }
    this.saveTracks = function () {
        localStorage.setItem("my-tracks", JSON.stringify(myTracks));
    }

}