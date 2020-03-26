/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

 //bfs
var levelOrderBottom = function(root) {
    if (root === null) {return [];}
    let res = [];
    let queue = [root];
    while (queue.length > 0) {
        let size = queue.length;
        let currArr = [];
        for (let i=0; i<size; i++) {
            let currNode = queue.shift();
            currArr.push(currNode.val);
            if (currNode.left !== null) queue.push(currNode.left);
            if (currNode.right !== null) queue.push(currNode.right);
        }
        if (currArr) res.unshift(currArr);
    }
    return res;
};

//dfs
var levelOrderBottom = function(root) {
    if (!root) return [];
    let res = [];
    helper(root, 0);
    function helper(node, level) {
        if (!node) return;
        if (!res[level]) {
            let currArray = [];
            currArray.push(node.val);
            res.push(currArray);
        } else {
            res[level].push(node.val);
        }
        helper(node.left, level+1);
        helper(node.right, level+1);
    }
    res = res.reverse();
    return res;
};