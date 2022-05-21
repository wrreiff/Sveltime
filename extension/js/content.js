
const code = `(function() {
console.log('This is the content script');
window.document.addEventListener('SvelteRegisterComponent', (e) => {
  console.log('svelteregisterComponent: e.detail ', e.detail);
  console.log('component ctx', e.detail.component.$$.ctx);
});
})()`;

document.documentElement.setAttribute('onreset', code);
document.documentElement.dispatchEvent(new CustomEvent('reset'));

// chrome.storage.local.set({test: 'test'});
// console.log(chrome.storage.session.get(null));

// window.document.addEventListener('SvelteDOMInsert', e => {
//   console.log('svelteDOMinsert e: ', e);
// });
// window.document.addEventListener('SvelteDOMRemove', e => { console.log('svelteDOMRemove e: ', e); });
// window.document.addEventListener('SvelteDOMAddEventListener', e => {console.log('svelteDOMAddEventListener e :', e);});