/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

 /*
var findTarget = function(root, k) {
    if (root === null) return false;
    let queue = [];
    let visited = new Set();
    queue.push(root);
    while (queue.length > 0) {
        const node = queue.shift();
        const diff = k - node.val;
        if (visited.has(diff)) return true;
        visited.add(node.val);
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    } 
    return false;
};
*/
