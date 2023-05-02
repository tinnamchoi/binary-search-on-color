const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type');
if (type == 'rgb') {
  const r = urlParams.get('r');
  const g = urlParams.get('g');
  const b = urlParams.get('b');
  document.body.style.backgroundColor = `RGB(${r}, ${g}, ${b})`;
  document.getElementById('result').innerHTML = `RGB(${r}, ${g}, ${b})`;
} else if (type == 'hsl') {
  const h = urlParams.get('h');
  const s = urlParams.get('s');
  const l = urlParams.get('l');
  document.body.style.backgroundColor = `HSL(${h}, ${s}%, ${l}%)`;
  document.getElementById('result').innerHTML = `HSL(${h}, ${s}%, ${l}%)`;
} else {
  document.getElementById('result').innerHTML = 'Invalid type';
}
