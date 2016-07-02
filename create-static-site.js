const fs = require('fs');

// Paths.
const paths = {
  dist: './dist',
  pages: './pages',
  template: './template',
};

// Template files.
const header = fs.readFileSync(`${paths.template}/header.html`);
const footer = fs.readFileSync(`${paths.template}/footer.html`);

// Pages.
const pages = fs.readdirSync('./pages');

pages.forEach((page) => {
  fs.readFile(`${paths.pages}/${page}`, (err, data) => {
    fs.writeFile(`${paths.dist}/${page}`, `${header}${data}${footer}`);
  });
});
