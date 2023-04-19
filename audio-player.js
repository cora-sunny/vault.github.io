// Create an array of audio file URLs
const audioFiles = [  'audios/c10.10-2-2.wav',  
'audios/aline had scissors in her mouth.wav',  
"audios/beatrice and sad bugs-final.mp3",  
'audios/the gap in the crimson tower.mp3',  
'audios/let heaven fall.mp3',  
'audio6.mp3',  
'audio7.mp3',  
'audio8.mp3',  
'audio9.mp3'];

// Keep track of the currently playing audio
let currentAudio = null;

// Add a click event listener to each square
const squares = document.querySelectorAll('.square');
squares.forEach((square, index) => {
  square.addEventListener('click', () => {
    // Stop any previously playing audio
    if (currentAudio) {
      currentAudio.pause();
    }
    // Create a new audio element and set its source to the corresponding audio file URL
    const audio = new Audio(audioFiles[index]);
    // Play the audio
    audio.play();
    // Set the current audio to the new audio element
    currentAudio = audio;
  });
});

// Add a click event listener to the "Stop Audio" button
const stopButton = document.querySelector('#stop-button');
stopButton.addEventListener('click', () => {
  // Stop any currently playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
});
