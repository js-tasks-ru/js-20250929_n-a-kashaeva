/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const pathArr = path.split('.');
    
    return function(obj) {
        let result = obj;
        for (let key of pathArr) {
            if (result == null) { return; }

            if (!result.hasOwnProperty(key)) {
                return;
            }
            else {
                result = result[key];
            }
        }
        return result;
    }
}
