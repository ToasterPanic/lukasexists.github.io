/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.insult = "you look like a monkey";
    this.vars.random = 1;
    this.vars.listOfObjects = [
      "a zoo",
      "a monkey",
      "dog poo",
      "cat litter",
      "an idiot",
      "a cow",
      "a gnome",
      "a crappy sandwich",
      "a fatty",
      "a midget",
      "an old man",
      "a baby"
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.loadInsults();
    this.vars.random = this.random(1, 4);
    if (this.vars.random == 1) {
      this.vars.insult = "you look like ";
    }
    if (this.vars.random == 2) {
      this.vars.insult = "you smell like ";
    }
    if (this.vars.random == 3) {
      this.vars.insult = "you act like ";
    }
    if (this.vars.random == 4) {
      this.vars.insult = "you're like ";
    }
    this.vars.insult =
      "" +
      this.vars.insult +
      this.vars.listOfObjects[
        this.random(1, this.vars.listOfObjects.length) - 1
      ];
    alert(this.vars.insult);
  }

  *loadInsults() {
    this.vars.listOfObjects = [];
    this.vars.listOfObjects.push("a zoo");
    this.vars.listOfObjects.push("a monkey");
    this.vars.listOfObjects.push("dog poo");
    this.vars.listOfObjects.push("cat litter");
    this.vars.listOfObjects.push("an idiot");
    this.vars.listOfObjects.push("a cow");
    this.vars.listOfObjects.push("a gnome");
    this.vars.listOfObjects.push("a crappy sandwich");
    this.vars.listOfObjects.push("a fatty");
    this.vars.listOfObjects.push("a midget");
    this.vars.listOfObjects.push("an old man");
    this.vars.listOfObjects.push("a baby");
  }
}
