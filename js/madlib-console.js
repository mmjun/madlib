var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var savedstartup = []

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

document.getElementById('create').onclick = createStartup;

function createStartup () {
  event.preventDefault();
  document.getElementById('xForY').innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
}



//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
