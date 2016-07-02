/* eslint no-new: 0 */

// Styles
import 'styles/main.less';

// Polyfills & Libs
import 'scripts/polyfills';
import Params from 'query-params';

// Components
import LoadingScreen from 'scripts/components/loading.js';
import Nav from 'scripts/components/nav.js';

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
