const express = require('express');

express().use(express.static('dist', {
  extensions: ['html', 'htm'],
})).listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
