import logo from './logo.svg';
import './App.css';
import Headpage from './components/Headpage';
import Midpage from './components/Midpage';
import Footer from './components/Footpage';
import './css/style.css';

function App() {
  return (
    <div className="body">
      <Headpage />
      <Midpage />
      <Footer />
    </div>
  );
}

export default App;
