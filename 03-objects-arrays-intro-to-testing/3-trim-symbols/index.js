/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if (size === undefined) { return string; }
    if (size ===  0) { return ''; }
    let counter = 0;
    let result = '';
    let cur = undefined;
    for (let symbol of string) {
        if (counter == 0) {
            cur = symbol;
            result += symbol;
            counter += 1;
        }
        else {
            if (cur == symbol && counter < size) {
                result += symbol;
                counter += 1;
            }
            else if (cur == symbol && counter >= size) {
                counter += 1;
            }
            else {
                cur = symbol;
                result += symbol;
                counter = 1;
            }

        }
    }
    return result;
}
