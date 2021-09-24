import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {};

const project = new Project(stage, sprites);
export default project;
