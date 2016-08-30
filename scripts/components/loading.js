/* eslint no-mixed-operators: 0 */

const duration = 300;

const template = `
  <div class="loading">
    <img class="logo loading-asset" src="https://pbs.twimg.com/profile_images/733481782327300096/XBctEuuu.jpg">
    <div class="loading-asset">War</div>
    <div class="loading-asset">Garble</div>
    <div class="loading-asset">will</div>
    <div class="loading-asset">never</div>
    <div class="loading-asset">die.</div>
    <img class="logo loading-asset" src="https://pbs.twimg.com/profile_images/733481782327300096/XBctEuuu.jpg">
  </div>
`;

export default class Loading {
  constructor() {
    document.body.insertAdjacentHTML('beforeend', template);

    setTimeout(() => {
      this.el = document.querySelector('.loading');
      this.assets = document.querySelectorAll('.loading-asset');
      this.assets.forEach(this.increment.bind(this));
    }, 0);
  }

  hideAsset(i) {
    this.assets[i].classList.remove('is-visible');
  }

  showAsset(i) {
    this.assets[i].classList.add('is-visible');
  }

  endLoading() {
    this.el.classList.add('is-hidden');
  }

  increment(asset, index) {
    if (index === 0) {
      this.showAsset(index);
      return;
    }

    setTimeout(() => {
      this.hideAsset(index - 1);
      this.showAsset(index);
    }, duration * index);

    if (index === this.assets.length - 1) {
      setTimeout(this.endLoading.bind(this), duration * index + duration * 2);
    }
  }
}
