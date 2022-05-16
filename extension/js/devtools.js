
chrome.devtools.panels.create("tool-test", null, "/public/index.html", null);


chrome.runtime.onConnect.addListener(port => {
  console.assert(port.name === "svelte-devtools-connection");
  port.onMessage.addListener(msg => {
    if (msg.name === 'start') {
      chrome.devtools.inspectedWindow.getResources((resources) => {
        console.log('resources: ', resources);
        const arrSvelteFiles = resources.filter((file) => !!file.url.match(/.svelte$/));
        console.log('svelte files array: ', arrSvelteFiles);
        const svelteFilesToSend = [];
        arrSvelteFiles.forEach(svelteFile => {
          svelteFile.getContent((source) => {
            if (source) {
              // console.log('source: ', source);
              svelteFilesToSend.push(source)
            }
          });
        });
        port.postMessage({ source: svelteFilesToSend })
      }); 
    }
  })
});