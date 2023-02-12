interface Route {
    predicate: (res: XMLHttpRequest, json: Object) => boolean;
    handler: (res: XMLHttpRequest, json: Object) => void;
}
