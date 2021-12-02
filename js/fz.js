/**
 * @description: 封装获取Style函数
 * @param {obj：对象 name：属性名}
 * @return {属性值}
 */
function getStyle(obj, name) {
    return window.getComputedStyle ? getComputedStyle(obj, null)[name] : obj.currentStyle[name];
}
/**
 * @description:封装绑定响应事件函数
 * @param {obj：对象 eventStr：事件字符串 callback：回调事件}
 * @return {*}
 */
function bind(obj, eventStr, callback) {
    window.addEventListener ? obj.addEventListener(eventStr, callback, false) : obj.attachEvent("on" + eventStr, callback);
}