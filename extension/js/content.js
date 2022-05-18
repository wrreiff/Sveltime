

// console.log("This is the content script");
// chrome.runtime.sendMessage('contentScript');

// document.addEventListener('SvelteRegisterComponent', e => {


//   // console.log('component', component);
//   // console.log('tagName', tagName);
//   console.log('e.detail', e);
// })

const code = `(function() {
  window.document.addEventListener('SvelteRegisterComponent', (e) => {
    console.log('svelteregisterComponent: e.detail ', e.detail); });
  })()`;
  
  document.documentElement.setAttribute('onreset', code);
  document.documentElement.dispatchEvent(new CustomEvent('reset'));
  console.log(document.documentElement.attributes);
  
  
  // window.document.addEventListener('SvelteDOMInsert', e => {
  //   console.log('svelteDOMinsert e: ', e);
  // });
  // window.document.addEventListener('SvelteDOMRemove', e => { console.log('svelteDOMRemove e: ', e); });
  // window.document.addEventListener('SvelteDOMAddEventListener', e => {console.log('svelteDOMAddEventListener e :', e);});
  
