# lottery-easy

# 九宫格抽奖静态
# 技术栈
- html
- css
- javascript

# 目录结构
```shell
├── index.css
├── index.css.map
├── index.html
├── index.js
├── index.less
├── lose.png
├── mkb.png
├── test.png
└── util.js
```

# 页面说明
### index.js
   - 首页
   - 需要填写的参数
   - el: '.box-content',//绑定抽奖元素
   - prizeInfo: [{}],//奖品信息，最多8个，多省少补{}，{}未中奖。
   - coinsEl: '.coins',//绑定矿石元素
   - coins: 1000, //初始矿石数
   - expend: 20,//每次抽奖花费矿石数
   - winListEl: '.report',//绑定中奖名单元素
   - winList: [],//中奖名单
   - layerEl: '#leftLayer'//绑定弹窗元素
### pages/index
   - 抽奖页面
   - 使用js封装抽奖构造函数，传入相应的配置，实现抽奖
# 使用方式
1. 从`git`拉取工程：

   ```shell
   git clone git@github.com:qianyongdong/lottery-easy.git
   ```

2. 安装依赖：

   无需安装依赖

3. 运行：

   ```shell
   前端页面运行： 浏览器打开index.html  
   ```
# 实现功能

1. 生成转盘元素
2. 转盘动画
3. 中奖提示弹窗
4. 中奖信息轮播
5. 初始矿石设置
6. 消耗矿石设置
7. 奖品及概率设置
  ...
