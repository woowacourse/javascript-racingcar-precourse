//기능을 사용가능하게
export function enalbedElement(element){
    element.removeAttribute('disabled');
}
//기능을 사용불가능하게
export function disabledElement(element){
    element.setAttribute('disabled', true);
}