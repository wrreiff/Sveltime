console.log('this is the background script')


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request.domTree);
    sendResponse();
  });