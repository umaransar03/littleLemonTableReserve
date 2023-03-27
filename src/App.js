import { ReserveTable } from "./screens/ReserveTable/ReserveTable";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './screens/Home/Home';


function App() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Routes>
            <Route exact path="/" element={(<Home/>)} />
            {/* <Route exact path="/contact" element={(<Contact />)} /> */}
            <Route exact path="/reserveTable" element={(<ReserveTable />)} />
          </Routes>
        </Router>
      </LocalizationProvider>
    </div>
  );
}

export default App;
