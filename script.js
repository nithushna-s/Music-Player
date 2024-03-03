document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  const playPauseButton = document.getElementById('play-pause');
  const stopButton = document.getElementById('stop');
  const nextButton = document.getElementById('next');
  const albumCover = document.getElementById('album-cover');
  const audioSource = document.getElementById('audio-source');

  let currentTrack = 0;
  const tracks = [
    { title: 'Katchi Sera', src: './music/Katchi Sera.mp3', cover: './music/3cb358d3af7b40368fed2f66193f70f0_464_464.jpg' },
    { title: 'Kesariya Brahmastra', src: './music/Kesariya Brahmastra 128 Kbps.mp3', cover: './music/kesariya-song-from-brahmastra-out-1.jpg' },
    { title: 'ennai_thalata', src: './music/ennai_thalata_music.mp3', cover: './music/vijay.jpeg' },
    { title: 'En Rojaa Neeye', src: './music/En Rojaa Neeye Kushi 128 Kbps.mp3', cover: './music/maxresdefault .jpg' },
  ];

  playPauseButton.addEventListener('click', togglePlayPause);
  stopButton.addEventListener('click', stopAudio);
  nextButton.addEventListener('click', playNextTrack);
  audio.addEventListener('timeupdate', rotateImage); // Listen to the timeupdate event

  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseButton.innerHTML = '<i id="play-pause-icon" class="fas fa-pause"></i>';
    } else {
      audio.pause();
      playPauseButton.innerHTML = '<i id="play-pause-icon" class="fas fa-play"></i>';
    }
  }

  function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
    playPauseButton.innerHTML = '<i id="play-pause-icon" class="fas fa-play"></i>';
  }

  function playNextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    audio.pause(); 
    updateAudioSource();
    audio.load();
    audio.play(); 
  }

  function updateAudioSource() {
    const track = tracks[currentTrack];
    audioSource.src = track.src;
    albumCover.src = track.cover;
  }

function rotateImage() {
  const duration = audio.duration;
  const currentTime = audio.currentTime;
  let rotationAngle;

  if (!audio.paused) {
    rotationAngle = (currentTime / duration) * 360;
  } else {
    rotationAngle = (currentTime / duration) * 10500; 
  }

  albumCover.style.transform = `rotate(${rotationAngle}deg)`;
}

  
  

  updateAudioSource();
});
