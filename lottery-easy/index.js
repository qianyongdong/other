let lottery = {
    init: function (options) {//初始化函数
        this.initData(options)
        this.render()
        this.handle()
    },
    initData: function (options) { //初始化数据
        [
            this.el,//获取元素
            this.prizeInfo,//奖品信息
            this.coinsEl,//获取矿石元素
            this.coins, //初始矿石数
            this.expend,//每次抽奖花费矿石数
            this.winListEl,//绑定中奖名单元素
            this.winList,//中奖名单
            this.layerEl // 获取弹窗元素
        ] =
            [
                document.querySelector(options.el),
                options.prizeInfo.length > 7 ? options.prizeInfo.slice(0, 8) : options.prizeInfo.concat(new Array(8 - options.prizeInfo.length).fill({ })),
                document.querySelector(options.coinsEl),
                options.coins,
                options.expend,
                document.querySelector(options.winListEl),
                options.winList,
                document.querySelector(options.layerEl),
            ]
        console.log(this.el, this.prizeInfo)
    },
    render: function () {//渲染
        //渲染矿石数
        this.setCoins = (num) => {
            this.coinsEl.innerHTML = num
        }
        //渲染初始矿石数
        this.setCoins(this.coins)
        //抽奖元素定位
        let prizeInfoCopy = [...this.prizeInfo]
        prizeInfoCopy = [prizeInfoCopy[0], prizeInfoCopy[7], prizeInfoCopy[6], prizeInfoCopy[1], null, prizeInfoCopy[5], prizeInfoCopy[2], prizeInfoCopy[3], prizeInfoCopy[4]];
        console.log(this.prizeInfo, this.prizeInfoCopy)
        //渲染抽奖元素
        //设置抽奖按钮
        let lotteryButton = `<div class="item lottery">
                    <span class="lottery-text">抽奖</span>
                    <span class='expend'>${this.expend}矿石/次</span>
                </div>`
        let prizeInfoHtml = `<div class="item-content">`
        for (const item of prizeInfoCopy) {
            // console.log(item)
            if (item) {
                if (item.type > 1) {
                    prizeInfoHtml += `<div class="item">
                    <img src="${item.image}" alt="image">
                    <span>${item.number + "个" + item.name}</span>
            </div>`
                } else {
                    prizeInfoHtml += `<div class="item">
                    <img src="${item.number ? 'test.png' : 'lose.png'}" alt="image">
                    <span>${item.number ? item.number + '矿石' : '没有中奖'}</span>
            </div>`
                }
            } else {
                prizeInfoHtml += lotteryButton //插入抽奖按钮
            }
        }
        prizeInfoHtml += '</div>'
        this.el.innerHTML = prizeInfoHtml
        let prizeDomCopy = document.querySelector('.item-content').childNodes
        this.prizeDomCopy = [prizeDomCopy[0], prizeDomCopy[3], prizeDomCopy[6], prizeDomCopy[7], prizeDomCopy[8], prizeDomCopy[5], prizeDomCopy[2], prizeDomCopy[1]]
        console.log(this.prizeDomCopy)
    },
    handle: function () {//处理事件
        //绑定抽奖按钮点击事件
        document.querySelector('.lottery').onclick = () => {
            if (!Roll.isRoll) {
                Roll.isRoll = true
                let arr = this.el.children[0].childNodes
                this.prizeInfoDom = [arr[0], arr[3], arr[6], arr[7], arr[8], arr[5], arr[2], arr[1]];
                this.newRoll = new Roll(this.prizeInfoDom)
                this.setCoins(this.coins -= this.expend) //扣除矿石
                this.newRoll.start()
                // let prize = Number.parseInt(Math.random() * 8)
                let prize = calcPrize()
                setTimeout(() => {
                    this.newRoll.end(prize)
                }, 2000)
            }
        }
          function calcPrize() {
            let prizeWeight = []
            for (const item of lottery.prizeInfo) {

                if (item.type > 0) {
                    prizeWeight.push(+item.count > 0 ? item.gl : 0) //过滤总数量小于0的
                } else {
                    prizeWeight.push(item.gl)
                }
            }
            var leng = 0;
            for (var i = 0; i < prizeWeight.length; i++) {
                leng += +prizeWeight[i]                                     //获取总数
            }
            console.log(leng)
            for (var i = 0; i < prizeWeight.length; i++) {
                var random = parseInt(Math.random() * leng);       //获取 0-总数 之间的一个随随机整数
                console.log(random, prizeWeight[i])
                if (random < prizeWeight[i]) {
                    return i                                     //如果在当前的概率范围内,得到的就是当前概率
                }
                else {
                    leng -= prizeWeight[i]                                 //否则减去当前的概率范围,进入下一轮循环
                }
            }
        }
        //抽奖事件
        class Roll {
            curIndex = 0
            speed = 200
            static isRoll = false
            constructor(arr) {
                this.items = arr;
            }
            start() {
                this.startTime = setTimeout(() => {
                    if (this.curIndex > 0) this.items[this.curIndex - 1].className = "item"
                    if (this.curIndex >= this.items.length) this.curIndex = 0
                    this.items[this.curIndex].className = "item current"
                    this.curIndex++
                    if (this.speed >= 60) this.speed -= 20
                    this.start()
                }, this.speed)
            }
            end(prize) {
                console.log(prize)
                this.startTime && clearTimeout(this.startTime)
                this.startTime = setTimeout(() => {
                    if (this.curIndex > 0) this.items[this.curIndex - 1].className = "item"
                    if (this.curIndex >= this.items.length) this.curIndex = 0
                    this.items[this.curIndex].className = "item current"
                    if (this.curIndex === prize) {
                        Roll.isRoll = false
                        this.curIndex = 0
                        this.speed = 200
                        setTimeout(() => {
                            leftLayer.show(prize) //结束抽奖并弹出中奖框
                            this.lastPrize = this.items[prize]
                        }, 1000)
                        return
                    }
                    this.curIndex++
                    this.speed += 100
                    this.end(prize)
                }, this.speed)
            }
        }
        //渲染中奖名单
        this.winListEl.innerHTML = `<div class ='report-content'></div>`
        const reportParent = document.querySelector(".report-content");
        class Report {
            static length = 0;
            constructor(name, type, number, message, date) {
                this.name = name;
                this.type = type;
                this.number = isFinite(number) ? number : number;
                this.message = message
                this.date = date
            }
            addElement() {
                const div = document.createElement("div");
                div.setAttribute("class", "report-item")
                if (this.type == 1) {
                    div.innerHTML = `
                <div>🎉 恭喜&nbsp;<div>${this.name}</div>&nbsp;抽中${this.number}矿石</div>
                <span>${this.date}</span>
                `
                } else {
                    div.innerHTML = `
                    <div>🎉 恭喜&nbsp;<div>${this.name}</div>&nbsp;抽中${this.number} 个${this.message} </div>
                    <span>${this.date}</span>
                    `
                }

                reportParent.appendChild(div)
                Report.length++
                return this;
            }
            changeAnimation() {
                if (Report.length > 1) {
                    reportParent.style.animationDuration = Report.length + "s"
                }
            }
        }
        //弹出框
        this.layerEl.innerHTML = `<div class="left-layer-warpper"></div>
                                <div class="left-layer">
                                    <div class="left-layer-header">
                                        <span class='layer-title'>🎉 恭喜中奖！</span>
                                        <span class="close"></span>
                                    </div>
                                    <div class="left-layer-content">
                                        <img  class='layer-img' src="test.png" alt="image">
                                        <span class='layer-text'>恭喜你获得99矿石</span>
                                        <button class="repeate">再抽一次</button>
                                    </div>
                                </div>`
        const leftLayerContent = document.querySelector(".left-layer")
        const leftLayerShade = document.querySelector(".left-layer-warpper")
        const leftLayerObj = { shade: leftLayerShade, content: leftLayerContent } //初始化左弹出框
        //日期格式化
        let formatDateTime = (date) => {
            console.log(date)
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            minute = minute < 10 ? ('0' + minute) : minute;
            var second = date.getSeconds();
            second = second < 10 ? ('0' + second) : second;
            return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
        };
        //生成弹出层
        class LayerSwitch {
            constructor(obj) {
                this.obj = obj
            }
            show(e) {
                for (const [key, ele] of Object.entries(this.obj)) {
                    if (isFinite(e) && key === 'content') {
                        ele.innerHTML = `<div class="left-layer-header">
                            <span class='layer-title'>${lottery.prizeInfo[e].number ? '🎉 恭喜中奖！' : '很遗憾！'}</span>
                            <span class="close"></span>
                        </div>
                        <div class="left-layer-content">
                            <img  class='layer-img' src="${lottery.prizeInfo[e].image ? lottery.prizeInfo[e].image : lottery.prizeInfo[e].number ? 'test.png' : 'lose.png'}" alt="image">
                            <span class='layer-text'>${lottery.prizeInfo[e].type == 0 ? '没有中奖' : ''} ${lottery.prizeInfo[e].type == 1 ? lottery.prizeInfo[e].number + '矿石' : ''} ${lottery.prizeInfo[e].type == 2 ? lottery.prizeInfo[e].number + '个' + lottery.prizeInfo[e].name : ''}</span>
                            <button class="repeate">再抽一次</button>
                        </div>`
                        if (isFinite(lottery.prizeInfo[e].number) && lottery.prizeInfo[e].type == 1) {
                            lottery.coins += parseInt(lottery.prizeInfo[e].number)
                            lottery.setCoins(lottery.coins)
                        }
                        if (lottery.prizeInfo[e].number) {
                            lottery.winList.push([lottery.prizeInfo[e].number, lottery.prizeInfo[e].name, formatDateTime(new Date())])
                            lottery.winListEl.style.display = 'flex'
                            new Report('测试用户', lottery.prizeInfo[e].type, lottery.prizeInfo[e].number, lottery.prizeInfo[e].name, formatDateTime(new Date())).addElement().changeAnimation()
                            lottery.prizeInfo[e].count--
                            const listsDom = document.querySelector('.list').childNodes
                            listsDom[e + 1].querySelector('.count').innerHTML = 'count' + lottery.prizeInfo[e].count
                            console.log(listsDom)
                        }
                        //关闭弹窗并再来一次
                        const repeateButton = document.querySelector(".repeate")
                        console.log(repeateButton)
                        repeateButton.onclick = () => {
                            lottery.newRoll.lastPrize.className = 'item'
                            leftLayer.hide()
                            document.querySelector('.lottery').onclick()
                        }
                    } else {
                        if (key == 'content' && e === 'report') {
                            let reportHtml = '<ul>'
                            for (let item of lottery.winList) {
                                reportHtml += `
                                <li>恭喜测试用户 获得 ${item[1] ? item[0] + '个' + item[1] : item[0] + '矿石'} ${item[2]}</li>
                                `
                            }
                            reportHtml += '</ul>'
                            ele.innerHTML = `<div class="left-layer-header">
                            <span class='layer-title'>中奖名单</span>
                            <span class="close"></span>
                        </div>
                        <div class="left-layer-content">
                            ${reportHtml}
                        </div >`
                        }
                    }
                    //关闭弹窗
                    const closeButton = document.querySelector(".close")
                    closeButton.onclick = () => {
                        lottery.newRoll.lastPrize.className = 'item'
                        leftLayer.hide()
                    }
                    ele.style.display = "block"
                }
            }
            hide() {
                for (const [key, ele] of Object.entries(this.obj)) {
                    ele.style.display = "none"
                }
            }
        }
        const leftLayer = new LayerSwitch(leftLayerObj)//初始化弹窗
        //中奖名单点击事件
        this.winListEl.onclick = () => {
            leftLayer.show('report')
        }

    }
}
