import { ajax } from './axios.js'

export async function Post_details(id) {

const response2 = await ajax.get('/post/'+id);

return response2.data;

}



export async function Catlist() {

const response2 = await ajax.get('/cat');

return response2.data;

}


export async function CatlistPdt2(id) {

const response2 = await ajax.get(`/cat/${id}`);

return response2.data;

}



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


export function Is_Num(num) {

if (num[0] == 0)return false;

const qid = /[0-9]+/g

return qid.test(num)
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

