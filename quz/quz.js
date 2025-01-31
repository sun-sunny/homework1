/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
    /** Fill in here **/
    //[ 4 6 7 3 8 3 2 5 9 ]
    function findTail(obj) {
        if (obj.tail == null) {
            obj.tail = B;
        } else {
            findTail(obj.tail);
        }
    }
    findTail(A);
    return A;

}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
    /** Fill in here **/
    let i = 0;
    let B = new List();

    function findTail(obj) {
        if (i == start - 1) {
            B = obj.tail;
        } else if (i == start + len) {
            obj.tail = null;
        } else {
            i++;
            findTail(obj.tail);
        }
    }
    findTail(L);
    return B;
}