const list = new Array(8).fill({ "type": 0, "gl": 0 })
console.log(list)
list[1] = { "type": 1, "gl": "20", 'number': '20', 'count': '100' }
list[2] = { "type": 2, "gl": "80", 'number': '10', 'count': '100', "name": '马克杯', "image": "mkb.png" }
const listDom = document.querySelector('.list')
renderList(list)
function renderList(list) {
    console.log(list)
    for (let [index, item] of list.entries()) {
        let div = document.createElement('div')
        div.setAttribute('class', 'item')
        div.index = index
        if (+item.type !== 0) {
            for (const key of Object.keys(item)) {
                let childDiv = document.createElement('div')
                childDiv.setAttribute('class', key)
                childDiv.innerHTML = `${key}: ${item[key]}`
                div.appendChild(childDiv)
            }
        } else {
            let childDiv = document.createElement('div')
            childDiv.innerHTML = '未中奖 ' + item["gl"]
            div.appendChild(childDiv)
        }

        listDom.appendChild(div)
    }
}
console.log(list)
const intDom = document.querySelector('.int')
const rightLayerDom = document.querySelector('.ral')
listDom.querySelectorAll('.item').forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(e.target.index)
        let index = e.target.index
        if (index || index === 0) {
            let inputs = rightLayerDom.querySelectorAll('input')
            let select = rightLayerDom.querySelector('select')
            select.value = list[index].type
            inputs[0].value = list[index].gl || 0
            inputs[1].value = list[index].number || ''
            inputs[2].value = list[index].count || ''
            inputs[3].value = list[index].name || ''
            // inputs[4].value = list[index].image ? '已存在' : ''
            intDom.innerHTML = index + 1
            console.log(+list[index].type)
            if (+list[index].type === 2) {
                console.log(+list[index].type, 1111)
                sl.style.display = 'block'
                zsl.style.display = 'block'
                mc.style.display = 'block'
                tp.style.display = 'block'
            } else if (+list[index].type === 1) {
                sl.style.display = 'block'
                zsl.style.display = 'block'
                mc.style.display = 'none'
                tp.style.display = 'none'
            } else {
                sl.style.display = 'none'
                zsl.style.display = 'none'
                mc.style.display = 'none'
                tp.style.display = 'none'
            }
            rightLayerDom.style.display = 'block'

        } else {
            rightLayerDom.style.display = 'none'
        }
    }, false)
});
const hide = () => {
    rightLayerDom.style.display = 'none'
}
const save = () => {
    console.log(rightLayerDom.querySelectorAll('input'))
    let type = rightLayerDom.querySelector('select').value
    let inputs = rightLayerDom.querySelectorAll('input')
    let index = intDom.innerHTML - 1
    let listData = { }
    let gl = inputs[0].value || 0
    let number = inputs[1].value
    let count = inputs[2].value
    let name = inputs[3].value
    let image = inputs[4].files[0];
    //效验概率
    console.log(gl, calcGl())
    if (gl > calcGl() && gl > list[index].gl) {
        return alert('概率违法，应该不超过' + calcGl())
    }
    if (+type === 1) {
        if (number.length > 0 && count.length > 0) {
            listData = { type, gl, number, count }
            list[index] = listData
        } else {
            return alert('请填写数量和总数量')
        }
    } else if (+type === 2) {
        if (number.length > 0 && count.length > 0 && name.length > 0 && image) {
            listData = { type, gl, number, count, name, 'image': getObjectURL(image) }
            list[index] = listData
        } else {
            return alert('请填写数量和总数量和名称和图片')
        }
    } else {
        listData = { type, gl }
        list[index] = listData
    }
    changeList(index)
}
//切换奖品类型
let rightLayerSelect = rightLayerDom.querySelector('select')
rightLayerSelect.addEventListener('change', function (e) {
    console.log(e.target.value)
    let type = e.target.value
    let sl = document.getElementById('sl')
    let zsl = document.getElementById('zsl')
    let mc = document.getElementById('mc')
    let tp = document.getElementById('tp')
    if (+type === 2) {
        console.log(sl)
        sl.style.display = 'block'
        zsl.style.display = 'block'
        mc.style.display = 'block'
        tp.style.display = 'block'
    } else if (+type === 1) {
        sl.style.display = 'block'
        zsl.style.display = 'block'
        mc.style.display = 'none'
        tp.style.display = 'none'
    } else {
        sl.style.display = 'none'
        zsl.style.display = 'none'
        mc.style.display = 'none'
        tp.style.display = 'none'
    }
}, false)
//改变listdom
function changeList(e) {
    console.log(listDom.childNodes[e + 1], e)
    let node = listDom.childNodes[e + 1]
    node.innerHTML = ''
    if (+list[e]["type"] === 0) {
        let div = document.createElement('div')
        div.innerHTML = '未中奖 ' + list[e]["gl"]
        node.appendChild(div)
    } else {
        for (const key of Object.keys(list[e])) {
            let div = document.createElement('div')
            div.setAttribute('class', key)
            if (key === 'image') {
                div.innerHTML = `${key}: 'object'`
            } else {
                div.innerHTML = `${key}: ${list[e][key]}`
            }
            node.appendChild(div)
        }
    }
    console.log(lottery.prizeDomCopy[e])
    lottery.prizeInfo = list
    lottery.prizeDomCopy[e].innerHTML = ''
    if (list[e]["type"] > 1) {
        lottery.prizeDomCopy[e].innerHTML = `<div class="item">
        <img src="${list[e].image}" alt="image">
        <span>${list[e].number + "个" + list[e].name}</span>
</div>`
    } else {
        lottery.prizeDomCopy[e].innerHTML = `<div class="item">
        <img src="${list[e].number ? 'test.png' : 'lose.png'}" alt="image">
        <span>${list[e].number ? list[e].number + '矿石' : '没有中奖'}</span>
</div>`
    }

}
//图片地址
function getObjectURL(file) {
    var url = null;
    // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    console.log(url)
    return url;

}
//计算概率
function calcGl() {
    let numCount = 0
    for (const item of list) {
        numCount += +item["gl"]
    }
    return 100 - numCount
}
let coinsDom = document.getElementById('qs')
let expendDom = document.getElementById('ex')
coinsDom.addEventListener('change', function (param) {
    lottery.coins = +coinsDom.value
    console.log(coinsDom, +coinsDom.value)
    document.querySelector('.coins').innerHTML = +coinsDom.value
}, false)
expendDom.addEventListener('change', function (param) {
    lottery.expend = +expendDom.value
    document.querySelector('.expend').innerHTML = +expendDom.value + '矿石/次'
}, false)
