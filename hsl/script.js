var h_l = 0;
var h_r = 180;
var s_l = 0;
var s_r = 100;
var l_l = 0;
var l_r = 100;

var current = 'h';

var left = document.getElementById("left");
var right = document.getElementById("right");

var first = true;

function updateColor() {
  if (h_l == h_r && s_l == s_r && l_l == l_r) {
    window.location.href = '../result/index.html?type=hsl&h=' + h_l + '&s=' + s_l + '&l=' + l_l;
  }
  if (current == 'h') {
    left.style.backgroundColor = 'hsl(' + h_l + 'deg, ' + (s_l + s_r) / 2 + '%, ' + (l_l + l_r) / 2 + '%)';
    right.style.backgroundColor = 'hsl(' + h_r + 'deg, ' + (s_l + s_r) / 2 + '%, ' + (l_l + l_r) / 2 + '%)';
    console.log("hue");
    console.log('hsl(' + h_l + 'deg, ' + (s_l + s_r) / 2 + '%, ' + (l_l + l_r) / 2 + '%)', 'hsl(' + h_r + 'deg, ' + (s_l + s_r) / 2 + '%, ' + (l_l + l_r) / 2 + '%)');
  } else if (current == 's') {
    left.style.backgroundColor = 'hsl(' + (h_l + h_r) / 2 + 'deg, ' + s_l + '%, ' + (l_l + l_r) / 2 + '%)';
    right.style.backgroundColor = 'hsl(' + (h_l + h_r) / 2 + 'deg, ' + s_r + '%, ' + (l_l + l_r) / 2 + '%)';
    console.log("saturation");
    console.log('hsl(' + (h_l + h_r) / 2 + 'deg, ' + s_r + '%, ' + (l_l + l_r) / 2 + '%)', 'hsl(' + (h_l + h_r) / 2 + 'deg, ' + s_l + '%, ' + (l_l + l_r) / 2 + '%)');
  } else if (current == 'l') {
    left.style.backgroundColor = 'hsl(' + (h_l + h_r) / 2 + 'deg, ' + (s_l + s_r) / 2 + '%, ' + l_l + '%)';
    right.style.backgroundColor = 'hsl(' + (h_l + h_r) / 2 + 'deg, ' + (s_l + s_r) / 2 + '%, ' + l_r + '%)';
    console.log("lightness");
    console.log('hsl(' + (h_l + h_r) / 2 + 'deg, ' + (s_l + s_r) / 2 + '%, ' + l_l + '%)', 'hsl(' + (h_l + h_r) / 2 + 'deg, ' + (s_l + s_r) / 2 + '%, ' + l_r + '%)');
  }
  console.log(left.style.backgroundColor, right.style.backgroundColor);
}

left.onmousedown = function () {
  switch (current) {
    case 'h':
      if (first) {
        h_l = -90;
        h_r = 90;
        first = false;
      } else {
        h_r = Math.floor((h_l + h_r) / 2);
      }
      current = 's';
      break;
    case 's':
      s_r = Math.floor((s_l + s_r) / 2);
      current = 'l';
      break;
    case 'l':
      l_r = Math.floor((l_l + l_r) / 2);
      current = 'h';
      break;
  }
  updateColor();
};

right.onmousedown = function () {
  switch (current) {
    case 'h':
      if (first) {
        h_l = 90;
        h_r = 270;
        first = false;
      } else {
        h_l = Math.floor((h_l + h_r) / 2);
      }
      current = 's';
      break;
    case 's':
      s_l = Math.floor((s_l + s_r) / 2);
      current = 'l';
      break;
    case 'l':
      l_l = Math.floor((l_l + l_r) / 2);
      current = 'h';
      break;
  }
  updateColor();
}
