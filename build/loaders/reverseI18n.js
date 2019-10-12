
/**
 * 将以下这种格式(vux组件里的写法)
 * <i18n>
 * {
 *      "back_text": {
 *          "en": "Back",
 *          "zh-CN": "返回"
 *      }
 * }
 * </i18n>
 * 
 * 转换为
 * <i18n>
 * {
 *      "en": {
 *          "back_text": "Back"
 *      },
 *      "zh-CN": {
 *          "back_text": "返回"
 *      }
 * }
 * </i18n>
 */

// 遍历对象的工具函数
function traverse(obj = {}, callback = (key, value, path) => {}) {
    let path = [];

    function recursive(obj) {
        for(let [key, value] of Object.entries(obj)) {
            path.push(key);
            if( '[object Object]' === Object.prototype.toString.call(value) ) {
                recursive(value);
            } else {
                callback(key, value, path.slice(0));
            }
            path.pop();
        }
    }
    recursive(obj);
}

// 根据path数组获取对象值的工具函数
function getObject(obj = {}, path = []) {
    return path.reduce((result, item) => {
        return result[item];
    }, obj);
}

// 根据path数组设置对象值的工具函数
function setObject(obj = {}, path = [], value) {
    let len = path.length;
    if(1 !== len) {
        if( !obj.hasOwnProperty(path[0]) ) obj[path[0]] = {};
        setObject(obj[path[0]], path.slice(1), value);
    } else {
        obj[path[0]] = value;
    }
    return value
}

// 变换为 vue-i18n 可以处理的对象
function transfer(source = {}) {
    let target = {};

    traverse(source, (key, value, path) => {
        const [first, ...rest] = path;
        path = [rest.pop(), ...rest, first];
        setObject(target, path, value);
    });

    return target;
}

module.exports = function(source) {
    const callback = this.async();

    const target = transfer(JSON.parse(source));

    callback(null, JSON.stringify(target, null, 4));
}
