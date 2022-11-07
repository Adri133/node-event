import App from './App.js';

let app = App.start(3000);

app.on('home', function (res) {
  res.write('Je suis sur la home page');
})