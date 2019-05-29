function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const randColor = `rgb(${r}, ${g}, ${b})`;
  return randColor;
}

export { getRandomColor };
