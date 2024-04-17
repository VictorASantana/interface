import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { RentPage } from './rent-page/rent-page';
import { HomePage } from './homepage/homepage';
import { MonitoringPage } from './monitoring-page/monitoring-page';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='rent-page' element={<RentPage />} />
          <Route path='monitoring-page' element={<MonitoringPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
