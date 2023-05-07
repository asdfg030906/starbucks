var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  function onYouTubeIframeAPIReady() {
    // <div id='player><div>
     new YT.Player('player', {
      videoId: '  An6LvwQuj_8',
      playerVars: true, // 자동 재생 유무
      loop:true, //반복 재생 여부
      playlist:'  An6LvwQuj_8'
     },
     events, {
      onReady: function(event){
        event.target.mute() //음소거
      }
     }
    );
  }

  