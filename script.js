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
  if (current == 'r') {
    left.style.backgroundColor = 'rgb(' + r_l + ', ' + (g_l + g_r) / 2 + ', ' + (b_l + b_r) / 2 + ')';
    right.style.backgroundColor = 'rgb(' + r_r + ', ' + (g_l + g_r) / 2 + ', ' + (b_l + b_r) / 2 + ')';
  } else if (current == 'g') {
    left.style.backgroundColor = 'rgb(' + (r_l + r_r) / 2 + ', ' + g_l + ', ' + (b_l + b_r) / 2 + ')';
    right.style.backgroundColor = 'rgb(' + (r_l + r_r) / 2 + ', ' + g_r + ', ' + (b_l + b_r) / 2 + ')';
  } else if (current == 'b') {
    left.style.backgroundColor = 'rgb(' + (r_l + r_r) / 2 + ', ' + (g_l + g_r) / 2 + ', ' + b_l + ')';
    right.style.backgroundColor = 'rgb(' + (r_l + r_r) / 2 + ', ' + (g_l + g_r) / 2 + ', ' + b_r + ')';
  }
  console.log(left.style.backgroundColor, right.style.backgroundColor);
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
