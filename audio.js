'use strict';

chrome.audio.onLevelChanged.addListener(function(event) {
  var audioProps = {level: 25};
  chrome.audio.setProperties(event.id, audioProps, function(){
    console.log(`Audio changed to ${audioProps.level}`);
  });
});
