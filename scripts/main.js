/* eslint no-new: 0 */

// Styles
import 'styles/main.less';

// Polyfills & Libs
import 'scripts/polyfills';
import Params from 'query-params';

// Components
import LoadingScreen from 'scripts/components/loading.js';

const Main = {
  init() {
    const params = Params.decode(location.search.replace(/\?/, ''));
    if (params.splash || !JSON.parse(localStorage.getItem('wargarble')).hasSeenSplash) {
      localStorage.setItem(JSON.stringify({
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
