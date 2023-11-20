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
    console.log("end");
  }
  if ((h_l == h_r && current == 'h') || (s_l == s_r && current == 's') || (l_l == l_r && current == 'l')) {
    current = current == 'h' ? 's' : current == 's' ? 'l' : 'h';
    return;
  }
  var left_h = h_l;
  var left_s = s_l;
  var left_l = l_l;
  var right_h = h_r;
  var right_s = s_r;
  var right_l = l_r;
  if (current == 'h') {
    left_s = right_s = Math.round((s_l + s_r) / 2);
    left_l = right_l = Math.round((l_l + l_r) / 2);
  } else if (current == 's') {
    left_h = right_h = Math.round((h_l + h_r) / 2);
    left_l = right_l = Math.round((l_l + l_r) / 2);
  } else if (current == 'l') {
    left_h = right_h = Math.round((h_l + h_r) / 2);
    left_s = right_s = Math.round((s_l + s_r) / 2);
  }
  var left_color = 'hsl(' + left_h + 'deg, ' + left_s + '%, ' + left_l + '%)';
  var right_color = 'hsl(' + right_h + 'deg, ' + right_s + '%, ' + right_l + '%)';
  left.style.backgroundColor = left.getElementsByTagName("h2")[0].innerHTML = left_color;
  right.style.backgroundColor = right.getElementsByTagName("h2")[0].innerHTML = right_color;
  console.log(left_color, right_color);
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
        h_l = Math.ceil((h_l + h_r) / 2);
      }
      current = 's';
      break;
    case 's':
      s_l = Math.ceil((s_l + s_r) / 2);
      current = 'l';
      break;
    case 'l':
      l_l = Math.ceil((l_l + l_r) / 2);
      current = 'h';
      break;
  }
  updateColor();
}
