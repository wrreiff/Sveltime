// import { current_component } from 'svelte/internal';


export function main () {document.addEventListener('SvelteRegisterComponent', e => {

    const { component, tagName } = e.detail;
  
    console.log('component', component);
    // console.log('tagName', tagName);
    console.log('e.detail', e.detail);
  })
}
  