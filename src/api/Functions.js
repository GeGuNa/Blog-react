import { ajax } from './axios.js'


export async function Mainlist() {

const response2 = await ajax.get(`/data/list/`);

return response2.data;

}

export async function Randomposts() {

const response2 = await ajax.get(`/data/random_posts/`);

return response2.data;

}


export async function Mostviewed() {

const response2 = await ajax.get(`/data/viewed/`);

return response2.data;

}


var SpecialSymbols =  {
    '<': '&lt;',
    '>': '&gt;',
    '(': '&#40;',
    ')': '&#41;',
    '#': '&#35;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;'
};

