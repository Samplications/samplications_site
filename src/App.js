import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';

import {BrowserView, MobileView} from 'react-device-detect';

import Header from './components/Header'
import MainMenuBar from './components/MainMenuBar'
import Footer from "./components/Footer";

import NotFoundPage from "./pages/NotFoundPage";

import Homepage from "./pages/Homepage";
import WebAppDevPage from "./pages/WebAppDevPage";
import DroneServicesPage from "./pages/DroneServicesPage";
import CustomSolutions from "./pages/CustomSolutions";
import SpacecraftConsulting from "./pages/SpacecraftConsulting";

import ScoreBoardPage from "./pages/Apps/ScoreBoardPage";
import BucketListerPage from "./pages/Apps/BucketListerPage";
import GoalReacherPage from "./pages/Apps/GoalReacherPage";
import HeurecaPage from "./pages/Apps/HeurecaPage";
import MealPicker from "./pages/Apps/MealPicker";
import PandaPointsTracker from "./pages/Apps/PandaPointsTracker";
import TikTakPage from "./pages/Apps/TikTakPage";
import AppsPage from "./pages/AppsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <BrowserView>
            <MainMenuBar/>
        </BrowserView>
        <MobileView>
          <div class="mobileNavbar"></div>
        </MobileView>

        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/WebAppDev" element={<WebAppDevPage />} />
            <Route exact path="/DroneServices" element={<DroneServicesPage />} />
            <Route exact path="/CustomSolutions" element={<CustomSolutions />} />
            <Route exact path="/SpacecraftConsulting" element={<SpacecraftConsulting />} />

            <Route exact path="/Apps" element={<AppsPage />} /> 
            <Route exact path="/Apps/ScoreBoard" element={<ScoreBoardPage />} /> 
            <Route exact path="/Apps/BucketLister" element={<BucketListerPage />} /> 
            <Route exact path="/Apps/GoalReacher" element={<GoalReacherPage />} /> 
            <Route exact path="/Apps/Heureca" element={<HeurecaPage />} /> 
            <Route exact path="/Apps/MealPicker" element={<MealPicker />} /> 
            <Route exact path="/Apps/PandaPointsTracker" element={<PandaPointsTracker />} /> 
            <Route exact path="/Apps/TikTak" element={<TikTakPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
