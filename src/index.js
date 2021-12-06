'use strict';

import EventHandler from './event-handler.js';

const app = document.querySelector("#app");
const handler = new EventHandler(app);

app.addEventListener("click", function(e) {
    e.preventDefault();

    const handleFunctions = {
        "car-names-submit"() { handler.onCarNameSubmit(); },
        "racing-count-submit"() { handler.onRacingCountSubmit(); },
    };
    if(Object.keys(handleFunctions).includes(e.target.id)) handleFunctions[e.target.id]();
});
