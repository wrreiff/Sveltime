chrome.devtools.panels.create("tool-test", null, "/public/index.html", null);

chrome.runtime.onConnect.addListener(port => {
  console.assert(port.name === 'svelte-devtools-connection');
  port.onMessage.addListener((msg) => {
    let arrSvelteFiles;
    if (msg.name === 'start') {
      chrome.devtools.inspectedWindow.eval(
        ''
      )
      chrome.devtools.inspectedWindow.getResources((resources) => {
        console.log('resources: ', resources);
        arrSvelteFiles = resources.filter((file) => !!file.url.match(/.svelte$/));
        console.log('svelte files array: ', arrSvelteFiles);
        const newArr = [];
        function recursiveCreateNewArr(arrSvelteFiles, index = 0) {
          if (arrSvelteFiles[index] === undefined) {
            port.postMessage({ newArr });
            return;
          }
          arrSvelteFiles[index].getContent((source) => {
            newArr.push({
              url: arrSvelteFiles[index].url,
              type: arrSvelteFiles[index].type,
              source,
            });
            recursiveCreateNewArr(arrSvelteFiles, index + 1);
          });
        }
        recursiveCreateNewArr(arrSvelteFiles);
        console.log('newArr: ', newArr);
      });
    }
  });
});
