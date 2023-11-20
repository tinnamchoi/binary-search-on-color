var r_l = 0;
var r_r = 255;
var g_l = 0;
var g_r = 255;
var b_l = 0;
var b_r = 255;

var current = 'r';

var left = document.getElementById("left");
var right = document.getElementById("right");

function updateColor() {
  if (r_l == r_r && g_l == g_r && b_l == b_r) {
    window.location.href = '../result/index.html?type=rgb&r=' + r_l + '&g=' + g_l + '&b=' + b_l;
  }
  var left_r = r_l;
  var left_g = g_l;
  var left_b = b_l;
  var right_r = r_r;
  var right_g = g_r;
  var right_b = b_r;
  if (current == 'r') {
    left_g = right_g = Math.round((g_l + g_r) / 2);
    left_b = right_b = Math.round((b_l + b_r) / 2);
  } else if (current == 'g') {
    left_r = right_r = Math.round((r_l + r_r) / 2);
    left_b = right_b = Math.round((b_l + b_r) / 2);
  } else if (current == 'b') {
    left_r = right_r = Math.round((r_l + r_r) / 2);
    left_g = right_g = Math.round((g_l + g_r) / 2);
  }
  var left_color = 'rgb(' + left_r + ',' + left_g + ',' + left_b + ')';
  var right_color = 'rgb(' + right_r + ',' + right_g + ',' + right_b + ')';
  left.style.backgroundColor = left.getElementsByTagName("h2")[0].innerHTML = left_color;
  right.style.backgroundColor = right.getElementsByTagName("h2")[0].innerHTML = right_color;
  console.log(left_color, right_color);
}

left.onmousedown = function () {
  switch (current) {
    case 'r':
      r_r = Math.floor((r_l + r_r) / 2);
      current = 'g';
      break;
    case 'g':
      g_r = Math.floor((g_l + g_r) / 2);
      current = 'b';
      break;
    case 'b':
      b_r = Math.floor((b_l + b_r) / 2);
      current = 'r';
      break;
  }
  updateColor();
};

right.onmousedown = function () {
  switch (current) {
    case 'r':
      r_l = Math.ceil((r_l + r_r) / 2);
      current = 'g';
      break;
    case 'g':
      g_l = Math.ceil((g_l + g_r) / 2);
      current = 'b';
      break;
    case 'b':
      b_l = Math.ceil((b_l + b_r) / 2);
      current = 'r';
      break;
  }
  updateColor();
}
