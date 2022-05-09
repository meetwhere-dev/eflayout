import { createUUID, getCookieByName, setCookie } from './util'
// const initatialData = {
//   uuid: uuid(16, 16)
// }

function init () {
  const uuid = getCookieByName('bury_uuid') || createUUID(16, 16);
  setCookie('bury_uuid', uuid, 999);
}

init();



const path = [];





export default function bury (app) {
  app.directive('', {
    // called before bound element's attributes
    // or event listeners are applied
    created(el, binding, vnode, prevVnode) {
      console.log('el, binding, vnode, prevVnode', el, binding, vnode, prevVnode);
      // see below for details on arguments
    },
    // called right before the element is inserted into the DOM.
    beforeMount() {},
    // called when the bound element's parent component
    // and all its children are mounted.
    mounted(el, binding, vnode, prevVnode) {},
    // called before the parent component is updated
    beforeUpdate() {},
    // called after the parent component and
    // all of its children have updated
    updated() {},
    // called before the parent component is unmounted
    beforeUnmount() {},
    // called when the parent component is unmounted
    unmounted() {}
  })
}