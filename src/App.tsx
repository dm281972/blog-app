import { Routes, Route } from "react-router-dom";

import './global.css'
import {  Home, PostPage,  } from './_root/pages'
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
   <main className='flex'>
    <Routes>

      {/* private routes */}
      <Route element={<RootLayout />}>
        <Route index element={<Home/>} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Route>
    </Routes>
   </main>
  )
}

export default App
