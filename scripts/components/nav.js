const keys = [
  'ArrowDown',
  'ArrowUp',
];

export default {
  init() {
    this.$nav = document.querySelector('.nav');
    this.$links = document.querySelectorAll('.nav a');

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
    const active = this.$nav.querySelector('.is-active');
    let el;

    if (active) {
      const index = this.$links.indexOf(active);

      active.classList.remove('is-active');

      if (this.$links[index + 1]) {
        el = this.$links[index + 1];
      }
    }

    if (!el) {
      el = this.$links[0];
    }

    el.classList.add('is-active');
  },

  prev() {
    const active = this.$nav.querySelector('.is-active');
    let el;

    if (active) {
      const index = this.$links.indexOf(active);

      active.classList.remove('is-active');

      if (this.$links[index - 1]) {
        el = this.$links[index - 1];
      }
    }

    if (!el) {
      el = this.$links[this.$links.length - 1];
    }

    el.classList.add('is-active');
  },
};
