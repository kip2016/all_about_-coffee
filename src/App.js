import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Roasting from './pages/Roasting'
import Grinding from './pages/Grinding'
import Brewing from './pages/Brewing'
import Drinks from './pages/Drinks'
import Survey from './pages/Survey'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
     
      <div className="App">
        <Router> 
          <Header />
          <Routes>
            <Route path='/' element={<Home /> } />
            <Route path='/roast' element={<Roasting />} />
            <Route path='/grind' element={<Grinding />} />
            <Route path='/brew' element={<Brewing /> } />
            <Route path='/drinks' element={<Drinks />} />
            <Route path='/survey' element={<Survey />} />
          </Routes>
          <Footer />
        </Router>
      </div>
   
  );
}

export default App;
