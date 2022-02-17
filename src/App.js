
// import './App.css';
import Destaques from './components/Destaques';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
     <Header />
     <Navbar />
     <Hero />
     <Destaques />
     <Newsletter />
     <Footer />
    </div>
  );
}

export default App;
