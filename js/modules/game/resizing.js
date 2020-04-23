resize = (e) => {
  // Set game to fullscreen
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  canvas.width = width;
  canvas.height = height;

  // Set viewport: equal to width and height of canvas
  viewport.screen = [canvas.width, canvas.height];
};
