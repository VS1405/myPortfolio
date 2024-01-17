import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './component/NavBar';
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
import { Projects } from './component/Projects';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </Fragment>
  );
}

export default App;
