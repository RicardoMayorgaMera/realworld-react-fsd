import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import styles from '../styles/themes.tsx';

const Layout = () => {
  return (
    <Router>
      <Switch>
        {/* Routes and components go here */}
        <Route path='/'>
          <div style={{ padding: '20px' }}>
            {/* Main content here */}.
          </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Layout;
