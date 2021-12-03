export default class Component {
    $target;

    $props;

    $state;

    constructor($target, $props) {
        this.$target = $target;
        this.$props = $props;
        this.$state = null;
        this.setup();
        this.render();
    }

    template() {}

    setup() {}

    render() {
        this.$target.innerHTML = this.template();
    }

    setState(newState) {
        this.$state = { ...newState };
        this.render();
    }
}
