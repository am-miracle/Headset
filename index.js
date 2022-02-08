let icon = document.getElementById("icon");
let audio = document.getElementById("audio")

icon.onClick = function(){
    audio.play()
}

// const songs = ['back-to-life','beretta-lake','pet-cheetah']

// //keep track of songs
// let songIndex = 1

// //initially load song into DOM
// loadSong(songs[songIndex])

// // update song details
// function loadSong(song){
//     audio.src = `music/${song}.mp3`
// }


// function playSong(){
//     icon.querySelector('i.fas').classList.remove('fa-play')
//     icon.querySelector('i.fas').classList.add('fa-pause')

//     audio.play()
// }

// function pauseSong(){
//     icon.querySelector('i.fas').classList.add('fa-play')
//     icon.querySelector('i.fas').classList.remove('fa-pause')

//     audio.pause()
// }

// icon.addEventListener('click', () => {

//     if (true){
//         pauseSong()
//     }else{
//         playSong()
//     }
// })

// icon.onClick = function(){
//     if(audio.paused){
//         audio.play();
//         // icon.src = `<i id="icon" class="fas fa-pause-circle text-5xl cursor-pointer"></i>`
//     }else{
//         audio.pause();
//         // icon.src.append = `<i id="icon" class="fas fa-play-circle text-5xl cursor-pointer"></i>`
//     }
// }