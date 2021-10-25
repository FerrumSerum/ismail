"use srict";
class Guns {
  constructor(caliber, type = "Rifle",){
    this.caliber = caliber;
    this.type = type;
  };
  Model(name){
    return this.name = name;
  };
  get
};
//
class Ak extends Guns {
  country(country){
  return this.country = "Russia";
  };
};
//
class Ar extends Guns {
  Customisation(Custom) {
    return this.Custom = this.Custom;
  };
};
//
class Saiga extends Guns {
  forHunting(forHunters){
    this.forHunters = true
  }
};
//
let ak = new Ak("7.62");
ak.Model("Ak-47")
ak.country();
//
let ar = new Ar("5.56");
ar.Model("Ar-15");
ar.Customisation(true);
//
let saiga = new Saiga("12");
saiga.Model("Saiga");
saiga.forHunting(true);
//