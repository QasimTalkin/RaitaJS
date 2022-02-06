import React from "react"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Airlines from "./Airlines/Airlines";
import Airline from "./Airline/Airline";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path = "/react/index" element={<Airlines/>}/>
                <Route exact path = "/air" element={<Airlines/>}/>
                <Route exact path = "/airlines/:slug" element={<Airline/>}/>
            </Routes>
        </Router>
    )
}

export default App