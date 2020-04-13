var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let queue = [];
    queue.push([root, 0]);
    let res = [[]];
    while (queue.length > 0) {
        const item = queue.shift();
        const node = item[0], level = item[1];
        if (!res[level]) res.push([node.val]);
        else {
            if (level % 2 === 0) {
                res[level].push(node.val);
            } else {
                res[level].unshift(node.val);
            };
        }
        if (node.left) queue.push([node.left, level+1]);
        if (node.right) queue.push([node.right, level+1]);
        
    }
    return res;
};