import { App } from "./components/app.js";
import { SELECTOR } from "./constants/constant.js";

const app = document.getElementById(SELECTOR.ID.APP);
new App(app);
