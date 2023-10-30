/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

    traverse(root)
    return root
};
   var traverse = function(root){
        if (root === null){
            return;
        }
        var temp = root.left
        root.left = root.right
        root.right = temp

        traverse(root.left)
        traverse(root.right)
    }