import { ajax } from './axios.js'


export async function Mainlist() {

const response2 = await ajax.get(`/data/list/`);

return response2.data;

}
