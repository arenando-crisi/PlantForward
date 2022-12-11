/*let cnv;
let img = [];
let index;

let initialanimation = function (ia) {
  ia.preload = function () {
    for (let i = 0; i < 180; i++) {
      img[i] = ia.loadImage("Assets/Initialanim/" + i + ".png");
    }
  };

  ia.setup = function () {
    cnv = ia.createCanvas(ia.windowWidth, ia.windowHeight);
    cnv.parent("initialanimationcont");
    cnv.class("initialanimation");
  };

  ia.draw = function () {
    ia.clear();
    ia.imageMode(ia.CENTER);
    index = ia.round(ia.mouseX / (ia.windowWidth / 179));
    ia.image(
      img[index],
      ia.windowWidth / 2,
      ia.windowHeight / 2,
      ia.windowHeight * 1.77,
      ia.windowHeight
    );
  };

  ia.windowResized = function () {
    ia.resizeCanvas(ia.windowWidth, 2 * ia.windowHeight);
  };
};

let ia = new p5(initialanimation);*/
