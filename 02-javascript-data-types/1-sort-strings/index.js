/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param='asc') {
    function compare(a, b) {
        return a.localeCompare(
            b,
            ['ru', 'en'],
            { sensitivity: "variant", caseFirst: "upper", numeric: true }
        );
    }
    let sortedArr;
    if (param === 'asc') {
        sortedArr = [...arr].sort((a, b) => compare(a, b));
    }
    else if (param === 'desc') {
        sortedArr = [...arr].sort((a, b) => -compare(a, b));
    }
    return sortedArr;
}
