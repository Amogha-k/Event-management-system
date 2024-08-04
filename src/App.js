
import './App.css';
import Navbar from './components/NavBar';
import HeaderImage from "./components/HeaderImage";
import { Frame } from "./components/Frame";
import Event_card from './components/Event_card';
import Footer from "./components/Footer";
function App() {
  return (
    <div className="">
      <Navbar />
      <HeaderImage />
      <Frame />
      <Event_card />
      <Footer />
    </div>
  );
}

export default App;
