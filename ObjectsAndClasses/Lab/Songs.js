function songs (arrInput){
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const songs = [];
    const typeOfSong = arrInput.pop();
    let numberOfSongs = arrInput.shift();

   for (let i = 0; i < numberOfSongs; i++) {
       let [type, name, time] = arrInput[i].split('_');
       let song = new Song(type, name, time);
       songs.push(song);
   }

    if (typeOfSong === 'all') {
        songs.forEach(song => console.log(song.name));
    } else {
        songs.filter(song => song.typeList === typeOfSong).forEach(song => console.log(song.name))
    }

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])