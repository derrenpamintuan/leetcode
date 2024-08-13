/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // if list1 is empty, return list2
    if (!list1) { return list2 }
    // if list2 is empty, return list1
    if (!list2) { return list1 }
    // if value at list1 is less than or equal to value at list2
    if (list1.val <= list2.val) {
        // call mergeTwoLists function with next value of list1 and list2 and assign it to next value of list1
        list1.next = mergeTwoLists(list1.next, list2);
        // return list1
        return list1;
    }
    // call mergeTwoLists function with list1 and next value of list2 and assign it to next value of list2
    list2.next = mergeTwoLists(list1, list2.next);
    // return list2
    return list2;

};