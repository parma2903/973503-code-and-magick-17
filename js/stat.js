'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 50;
var TEXT_HEIGHT = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var FONT_SIZE = 16;
var statX = CLOUD_X + 5 * GAP;
var statY = CLOUD_Y + GAP;
var lineHeight = FONT_SIZE * 1.25;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

function randColorBlue() {
  var r = 0;
  var g = 0;
  var b = Math.floor(Math.random() * (256));
  return '#' + r + g + b.toString(16);
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = FONT_SIZE + 'px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', statX, statY);
  ctx.fillText('Список результатов:', statX, statY + lineHeight);

  var maxTime = getMaxElement(times);
  var players = ['Вы', 'Иван', 'Юлия'];
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], (CLOUD_X + FONT_GAP) + ((CLOUD_X + FONT_GAP) * i), CLOUD_HEIGHT - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randColorBlue();
    }
    ctx.fillRect((CLOUD_X + FONT_GAP) + ((CLOUD_X + FONT_GAP) * i), CLOUD_HEIGHT - BAR_HEIGHT * Math.round(times[i]) / maxTime - GAP - TEXT_HEIGHT, BAR_WIDTH, BAR_HEIGHT * Math.round(times[i]) / maxTime);
  }
}
