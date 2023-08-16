import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';



function App() {
  return (
    <>
    <Navbar />
    <Header title="TY CSE"/>
    <Dashboard/>
    <Footer />
    </>
  );
}

export default App;
