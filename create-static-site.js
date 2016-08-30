const fs = require('fs');

// Paths.
const paths = {
  dist: './dist',
  pages: './pages',
  template: './template',
};

fs.readdir(paths.dist, (err, data) => {
	if (err) {
		fs.mkdir(paths.dist);
	}

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

	// CNAME
	fs.readFile('./web-config/CNAME', 'utf-8', (err, data) => {
		fs.writeFile(`${paths.dist}/CNAME`, data);
	});

	// favicon
	fs.readFile('./web-config/favicon.ico', 'utf-8', (err, data) => {
		fs.writeFile(`${paths.dist}/favicon.ico`, data);
	});
});
