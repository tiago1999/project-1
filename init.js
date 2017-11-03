'use strict';

function start() {
  var container = document.getElementById('container');
  var app = new App(container);
  app.buildIntro();
}

window.addEventListener('DOMContentLoaded', start);
