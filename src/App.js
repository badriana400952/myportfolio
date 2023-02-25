
import Layout from './page/Layout';
import './App.css';
import Home from './page/Home';
import About from './page/About';
import Skils from './page/Skils';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './page/Footer';
import Notfound from './page/Notfound';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skils" element={<Skils />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
      {/* <Content/> */}
      {/* <Teknologi/> */}

      <Footer />

    </BrowserRouter>
  )
}

export default App;
