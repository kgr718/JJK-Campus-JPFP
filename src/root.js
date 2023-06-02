import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./components/Main";
import Students from "./components/Students"
import Campuses from "./components/Campuses"
import Navbar from "./components/Navbar";
import SingleCampus from "./components/SingleCampus"

const Root = () => {
    return(
        <div>
            <Navbar />
            <Routes>
            <Route exact path="/" element={<Main />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/campuses/:campusId" element={<SingleCampus />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:studentId" element={<singleStudent />} />
        {/* Other routes */}
            </Routes>
        </div>
    )
}

export default Root;