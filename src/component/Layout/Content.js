import {Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import CompanyProfile from "../AboutUs/CompanyProfile";
import DirectorsMessage from "../AboutUs/DirectorsMessage";
import MissionAndVision from "../AboutUs/MissionAndVision";
import RND from "../AboutUs/R&D";
import Applications from "../Applications/Applications"
import SilicaSand from "../Products/SilicaSand";

const ContentPage = () => {
    return (
        <Routes>
          <Route index element={<Home />} />
          <Route path="company-profile" element={<CompanyProfile />} />
          <Route path="director-message" element={<DirectorsMessage />} />
          <Route path="mission-vision" element={<MissionAndVision />} />
          <Route path="r-d" element={<RND />} />
          <Route path="applications" element={<Applications />} />
          <Route path="silica-sand" element={<SilicaSand/>} />
        
      </Routes> 
    )
}

export default ContentPage