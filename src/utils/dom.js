import { STYLE } from "../constants/constant.js";

export const hideNode = ($node) => {
    $node.style.display = "none";
};
export const showNode = ($node) => {
    $node.style.display = "block";
};

export const createProgressNode = (name, position) => {
    const $node = document.createElement("span");
    const $brNode = document.createElement("br");
    let paragraph = name + ": ";
    while (position--) {
        paragraph += "-";
    }
    const textNode = document.createTextNode(paragraph);
    $node.appendChild(textNode);
    $node.appendChild($brNode);
    return $node;
};

export const createResultNode = (cars) => {
    const $resultNode = document.createElement("div");
    cars.forEach((car) => {
        $resultNode.appendChild(car.positionElement);
    });
    $resultNode.style.margin = STYLE.RESULT_MARGIN_VERTICAL + " " + STYLE.RESULT_MARGIN_HORIZONTAL;

    return $resultNode;
};

export const disableForm = ($form) => {
    $form.childNodes.forEach((node) => (node.disabled = true));
};
