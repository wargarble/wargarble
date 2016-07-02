const keys = [
  'ArrowDown',
  'ArrowUp',
];

export default {
  init() {
    this.$header = document.querySelector('.header');
    this.$nav = document.querySelector('.nav');
    this.$links = document.querySelectorAll('.header a, .nav a');

    this.bindUI();
  },

  bindUI() {
    document.addEventListener('keydown', (e) => {
      if (keys.indexOf(e.key) > -1) {
        e.preventDefault();
        this.handleArrow(e.key);
      }
    });
  },

  handleArrow(key) {
    if (key === 'ArrowDown') {
      this.next();
    } else if (key === 'ArrowUp') {
      this.prev();
    }
  },

  next() {
    this.increment('next');
  },

  prev() {
    this.increment('prev');
  },

  increment(direction) {
    const active = this.$header.querySelector('.is-active');
    let el;

    if (active) {
      let index = this.$links.indexOf(active);
      index = direction === 'next' ? index + 1 : index - 1;

      active.classList.remove('is-active');

      if (this.$links[index]) {
        el = this.$links[index];
      }
    }

    if (!el) {
      if (direction === 'next') {
        el = this.$links[0];
      } else {
        el = this.$links[this.$links.length - 1];
      }
    }

    el.classList.add('is-active');
    el.focus();
  },
};
