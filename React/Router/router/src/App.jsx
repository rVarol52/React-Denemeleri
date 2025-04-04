import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import Mission from "./components/Mission";
import WrongPath from "./components/WrongPath";
import History from "./components/History";
import Team from "./components/Team";
import Company from "./components/Company";
import Members from "./components/Members";
import MemberDetail from "./components/MemberDetail";
const LazyAboutUs = React.lazy(() => import("./components/AboutUs"));

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/aboutUs"
          element={
            <React.Suspense>
              <LazyAboutUsAboutUs />
            </React.Suspense>
          }
        />
        <Route path="/mission" element={<Mission />} />
        <Route path="/history" element={<History />}>
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="*" element={<WrongPath />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/:memberId" element={<MemberDetail />} />
      </Routes>
    </div>
  );
}

export default App;
