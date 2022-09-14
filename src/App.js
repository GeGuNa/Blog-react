import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './page/Home.js'
import Post from './page/Post.js'
import Contact from './page/Contact.js'
import About from './page/About.js'
import Users from './page/Users.js'
import Login from './page/Login.js'


function Error_Detected(){
return <div> Page doesn't exists </div>
}



export default function App() {

return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/post/:id" element={<Post />} />
<Route path="/contact" element={<Contact />} />
<Route path="/About" element={<About />} />
<Route path="/Users" element={<Users />} />
<Route path="/Login" element={<Login />} />
<Route path="*" element={<Error_Detected />} />
</Routes>
)

}



