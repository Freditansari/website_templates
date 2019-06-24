import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import FullPageIntro from './component/FullPageIntroWithFixedNavbar';
import Header from './component/Header';
import ContactUs from './component/Contactus'
import './App.css';

function App() {
  return (

    <Router>

    
        <Header />
        <Route exact path="/" component={FullPageIntro} />

    
        <Route exact path="/contact" component={ContactUs} />

    </Router>
  

  );
}

export default App;
