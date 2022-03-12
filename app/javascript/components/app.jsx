import React from "react"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Airlines from "./Airlines/Airlines";
import Airline from "./Airline/Airline";
import Blogs from "./Blogs/Blogs"
const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path = "/react/index" element={<Blogs/>}/>                  {/* DEFAULT */}
                <Route exact path = "/air" element={<Airlines/>}/>
                <Route exact path = "/airlines/:slug" element={<Airline/>}/>
                <Route exact path = "/blogs/" element={<Blogs/>}/>
            </Routes>
        </Router>
    )
}

export default App