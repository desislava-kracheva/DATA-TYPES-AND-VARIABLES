function solve(bandName,albumName, songName ){

let songDurationInSeconds = (albumName.length * bandName.length ) * songName.length / 2;

console.log(`The plate was rotated ${Math.ceil(songDurationInSeconds / 2.5)} times.`);


}

solve('Black Sabbath', 'Paranoid', 'War Pigs')