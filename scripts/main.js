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
    if (params.splash) {
      const loader = new LoadingScreen();
      console.log(loader);
    }
  },
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  Main.init();
} else {
  document.addEventListener('DOMContentLoaded', Main.init);
}
