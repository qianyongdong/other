import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Lottery from './components/lottery/Lottery';

class App extends Component {
  render() {
    const state = {
      // 九宫格内容list
      list: [
        {
          text: '10矿石',
          image:
            'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
          win: 1,
        },
        {
          text: '20矿石',
          image:
            'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
          win: 1,
        },
        {
          text: '30矿石',
          image:
            'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
          win: 1,
        },
        {
          win: 0,
        },
        {
          text: '40矿石',
          image:
            'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
          win: 1,
        },
        {
          text: '50矿石',
          image:
            'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
          win: 1,
        },
        {
          text: '60矿石',
          image:
            'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
          win: 1,
        },
        {
          win: 0,
        },
      ],
      // 被选中的格子的ID
      activedId: '',
      // 中奖ID
      prizeId: null,
      // 获得prizeId之后计算出的动画次数
      times: 0,
      // 当前动画次数
      actTimes: 0,
      // 是否正在抽奖
      isRolling: false,
    };
    return (
      <div className="view-container">
        <Nav />
        <section className="main-container container">
          <Lottery {...state} />
        </section>
      </div>
    );
  }
}
export default App;
