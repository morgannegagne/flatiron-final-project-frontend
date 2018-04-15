
(function() {

  chrome.runtime.onMessage.addListener((msg, sender, response) => {
    switch (msg.type) {
      case 'popupInit':
        byebug
        response('first chrome extension!')
        break;
      default:
        response('unknown request');
        break;
    }
  });

}());
