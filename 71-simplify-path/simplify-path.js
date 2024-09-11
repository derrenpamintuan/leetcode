/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    // assign empty array to stack
    const stack = [];
    // split path with / and assign to directories
    const directories = path.split("/");
    // // iterate over directories
    for (const dir of directories) {
        // if dir is equal to . or not dir
        if (dir === "." || !dir) {
            // continue iteration
            continue;
            // otherwise if dir is equal to ..
        } else if (dir === "..") {
            // if the length of stack is 0
            if (stack.length > 0) {
                // remove last element
                stack.pop();
            }
            // otherwise
        } else {
            // push dir into stack
            stack.push(dir);
        }
    }
    // return / plus stack joined with /
    return "/" + stack.join("/");
};