/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Initialize a new ListNode and store it in variable dummy
    let dummy = new ListNode();
    // Set res to point to dummy
    let res = dummy;
    // Initialize total and carry to 0
    let total = 0, carry = 0;

    //While l1 is not null OR l2 is not null OR carry is not 0:
    while (l1 || l2 || carry) {
        // Set total to carry
        total = carry;

        // If l1 is not null:
        if (l1) {
            // Add l1's value to total
            total += l1.val;
            // Move to the next node in l1
            l1 = l1.next;
        }
        // If l2 is not null:
        if (l2) {
            // Add l2's value to total
            total += l2.val;
            // Move to the next node in l2
            l2 = l2.next;
        }

        // Set num to total modulo 10
        let num = total % 10;
        // Update carry to be the integer division of total by 10
        carry = Math.floor(total / 10);
        // Create a new ListNode with value num and set dummy's next to this new node
        dummy.next = new ListNode(num);
        // Move dummy to its next node
        dummy = dummy.next;
    }

    // Return res's next node
    return res.next;    
};