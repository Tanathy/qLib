// Name: parent
// Method: Prototype
// Desc: Returns the parent node of the first node.
// Type: Traversal
// Example: Q(selector).parent();
Q.prototype.parent = function () {
    return new Q(this.nodes[0].parentNode);
};