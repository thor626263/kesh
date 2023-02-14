import React, { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import Navigation from './navigation';
import store from './redux/store';

import './App.css';

const App = () => {

  window.onscroll = () => {
    const scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop >= 400) {
      document.querySelector('.nav-bar').classList.add('fixed-nav');
      document.querySelector('.mobile-nav').classList.add('fixed-mobile-nav');
    } else {
      document.querySelector('.nav-bar').classList.remove('fixed-nav');
      document.querySelector('.mobile-nav').classList.remove('fixed-mobile-nav');
    }
  }

  return (<ReduxProvider store={store}>
    <Navigation />
  </ReduxProvider>);
}

export default App;

