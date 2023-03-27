import { ReserveTable } from "./screens/ReserveTable/ReserveTable";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function App() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ReserveTable/>
      </LocalizationProvider>
    </div>
  );
}

export default App;
