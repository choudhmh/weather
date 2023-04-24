import "./App.css";
import DisplayDifferentLocation from "./component/displayDifferentLocation";
import SearchCities from "./component/SearchCities";
import { Route, Routes, NavLink , BrowserRouter, } from "react-router-dom";
import Test from "./component/test";
import Dropdown from "./component/DropDown";
import WeekForecast from "./component/weekForecast";

function App() {
 

  return (
    <>
    <BrowserRouter>
        <div style={{
            display: "flex",
            background: 'black',
            padding: '5px 0 5px 5px',
            fontSize: '20px',
            justifyContent: "center"
        }}>

            <div style={{ margin: '10px' }}>
                <NavLink to="/App
                " style={({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'white' })}>
                    Home
                </NavLink>
            </div>

            <div style={{ margin: '10px' }}>
                <NavLink to="/displayDifferentLocation" style={({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'white' })}>
                    Selective Location
                </NavLink>
            </div>
            <div style={{ margin: '10px' }}>
                <NavLink to="/SearchCities" style={({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'white' })}>
                    Specific City
                </NavLink>
            </div>
            <div style={{ margin: '10px' }}>
                <NavLink to="/weekForecast" style={({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'white' })}>
                    Week Forecast
                </NavLink>
            </div>
            
        </div>
        
        <Routes>
           
            <Route exact path="/displayDifferentLocation" element={<DisplayDifferentLocation />} />
            <Route exact path="/SearchCities" element={<SearchCities />} />
            <Route exact path="/weekForecast" element={<WeekForecast />} />
           
          
        </Routes>
    </BrowserRouter>
   
</>

  );
}

export default App;
