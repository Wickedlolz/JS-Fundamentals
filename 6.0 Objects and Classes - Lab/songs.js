function printSongs(array) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = array.shift();
    let typeOfSongs = array.pop();
    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let songDetails = array[i].split('_');
        let type = songDetails[0];
        let name = songDetails[1];
        let time = songDetails[2];

        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeOfSongs === 'all') {
        songs.forEach(i => console.log(i.name));
    } else {
        let filtered = songs.filter(i => i.type == typeOfSongs);
        filtered.forEach(i => console.log(i.name));
    }
}

// printSongs(
//     [
//         3,
//         'favourite_DownTown_3:14',
//         'favourite_Kiss_4:16',
//         'favourite_Smooth Criminal_4:01',
//         'favourite'
//     ]
// );

printSongs(
    [
        4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater'
    ]
);