/* eslint no-new: 0 */

// Polyfills & Libs
import Params from 'query-params';
import './polyfills';

// Styles
import '../styles/main.less';

// Components
import LoadingScreen from './components/loading.js';
import Nav from './components/nav.js';

const Main = {
  init() {
    Nav.init();

    const params = Params.decode(location.search.replace(/\?/, ''));
    let storage = JSON.parse(localStorage.getItem('wargarble'));
    if (!storage) {
      storage = {};
    }

    if (params.splash || !storage.hasSeenSplash) {
      localStorage.setItem('wargarble', JSON.stringify({
        hasSeenSplash: true,
      }));

      new LoadingScreen();
    }
  },
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  Main.init();
} else {
  document.addEventListener('DOMContentLoaded', Main.init);
}
