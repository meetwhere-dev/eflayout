import cloneDeep from "lodash/cloneDeep";
import { ref } from "vue";

const componentMap = {
    'ef-layout' : {
        name: 'ef-layout',
        childrens: ['test text'],
        class: [],
        props: [],
        events: [],
        styles: []
      }
}


export let userPage = ref([]);
export let allLayouts = {

};

export let activeData = {
    currentCompontent: null
};


export function addComponent () {
    const item = activeData.currentCompontent;
    console.log('item', item);
    if (!item) return;
    console.log('componentMap[item]', componentMap[item.name]);
    const cloneItem = cloneDeep(item)
    userPage.value.push(cloneItem);
}