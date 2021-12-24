function solveForSecondTime(bandName, albumName, songName){

let durationInSeconds = (albumName.length* bandName.length) * songName.length /2;

let rotations = durationInSeconds/2.5;
console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);


}

solveForSecondTime('Black Sabbath', 'Paranoid', 'War Pigs')