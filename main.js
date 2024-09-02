// <!-- HTML -->
// <button class="btn" id="subscribe-btn">Subscribe</button>
// <button class="btn" id="watch-video-btn">Watch Video</button>

// <!-- JavaScript -->
// <script>
  // Get the buttons
  const subscribeBtn = document.getElementById('subscribe-btn');
  const watchVideoBtn = document.getElementById('watch-video-btn');

  // Add event listeners
  subscribeBtn.addEventListener('click', subscribeToChannel);
  watchVideoBtn.addEventListener('click', watchVideo);

  // Function to subscribe to channel
  function subscribeToChannel() {
    // TO DO: implement channel subscription logic here
    console.log('Subscribed to channel!');
  }

  // Function to watch video
  function watchVideo() {
    // TO DO: implement video playback logic here
    console.log('Watching video!');
  }
// </script>