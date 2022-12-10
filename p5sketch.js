let cnv;

let initialanimation = function (ia) {
  ia.setup = function () {
    cnv = ia.createCanvas(ia.windowWidth, ia.windowHeight);
    cnv.class("initialanimation");
  };

  ia.draw = function () {
    ia.ellipse(100, 100, 100);
  };

  ia.windowResized = function () {
    ia.resizeCanvas(ia.windowWidth, 2 * ia.windowHeight);
  };
};

let ia = new p5(initialanimation);
