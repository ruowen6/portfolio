import { useState } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Add routes here */}
          {/* element = the pages to render */}
          <Route index element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
