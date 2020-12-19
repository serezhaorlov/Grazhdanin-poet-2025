export class Section {
    constructor({items, modifier, renderer}, container){
        this._items = items,
        this._modifer = modifier,
        this._renderer = renderer,
        this._container = container;
    }

    render() {
        this._items.forEach(element => {
            this._renderer(element, this._modifer)
        });
    }

    addItem(element) {
        this._container.prepend(element);
    }
}