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

function Emailch(email){

const mailCh = /^[\w-]+@[\w-]+\.[\w-]+$/g

return mailCh.test(email); 

}


function ifItsImage(name) {

const Tpimage = /^(jpg|jpeg|png|gif|webp)+$/

return Tpimage.test(name);

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

