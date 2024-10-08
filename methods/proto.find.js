// Name: find
// Method: Prototype
// Desc: Finds child nodes of the first node that match a specific selector.
// Type: Traversal
// Example: Q(selector).find(".child");
Q.prototype.find = function (selector) {
    const foundNodes = this.nodes[0].querySelectorAll(selector);
    return foundNodes.length ? Q(foundNodes) : null;
};