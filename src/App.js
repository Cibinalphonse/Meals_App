
import './App.css';
import Navbar from './Navbar'
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <div className="MealsApp">
    <Navbar />
    <div className="body-content">
    <Body />
    </div>
    <Footer/>
    </div>

    
  );
}

export default App;
