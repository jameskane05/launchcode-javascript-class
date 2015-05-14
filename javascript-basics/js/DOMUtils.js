DOMUtils = {

    flattenDOM: function (node) {

        node = node || document.body.parentNode;

        //base case - if there are no children, return only that node
        if (node.children.length < 1)
            return [node];

        var children = node.children;
        var arr = Array.prototype.slice.call(children);
        var nodeArr = arr.map(
            function(child){
                return DOMUtils.flattenDOM(child)
            });

        nodeArr.push([node]);
        return Array.prototype.concat.apply([], nodeArr);

    },

    getIds: function (node) {

        /* From the pset: "To check this, you'll need to use the `instanceof` operator with the appropriate constructor name (which you're left to figure out)" - but isn't this line just as effective? */
        node = node || document.body.parentNode;
        if (!(node instanceof HTMLElement))
            throw "Exception thrown!";

        var flatDOM = DOMUtils.flattenDOM(node);

        var idArr = flatDOM.filter(
            function (element) {
                return element.id.length > 0
        }).map(
            function (arg) {
                return arg.id;
            });

        return idArr;
    },


    getClasses: function (node) {

        node = node || document.body.parentNode;

        var flatDOM = DOMUtils.flattenDOM(node);

        var classArr = flatDOM.filter(
            function (element) {
                return element.className.length > 0
        }).map(
            function(arg) {
                return arg.classList;
            });

        return classArr;
    }

};