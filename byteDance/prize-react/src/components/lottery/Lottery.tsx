import React, { Component } from 'react';
import './Lottery.css';

class RowItem extends Component {
  render() {
    const itemData = this.props;
    return (
      <div className="turntable-item item">
        <div className="image">
          <img src={itemData.win ? itemData.image : ''} />
        </div>
        <div className="text">{itemData.win ? itemData.text : ''}</div>
      </div>
    );
  }
}

class Lottery extends Component {
  //   handleBegin() {
  //     // this.state.isRolling为false的时候才能开始抽，不然会重复抽取，造成无法预知的后果
  //     if (!this.state.isRolling) {
  //       // 点击抽奖之后，我个人做法是将于九宫格有关的状态都还原默认
  //       this.setState(
  //         {
  //           activedId: '',
  //           prizeId: null,
  //           times: 0,
  //           actTimes: 0,
  //           isRolling: true,
  //         },
  //         () => {
  //           // 状态还原之后才能开始真正的抽奖
  //           this.handlePlay();
  //         },
  //       );
  //     }
  //   }
  //   handlePlay() {
  //     // 随机获取一个中奖ID
  //     let prize = Math.floor(Math.random() * 12);
  //     console.log(prize);
  //     this.setState({
  //       prizeId: prize,
  //       activedId: 0,
  //     });
  //     // 随机算出一个动画执行的最小次数，这里可以随机变更数值，按自己的需求来
  //     let times = this.state.list.length * Math.floor(Math.random() * 5 + 4);
  //     this.setState({
  //       times: times,
  //     });
  //     // 抽奖正式开始↓↓
  //     this.begin = setInterval(() => {
  //       let num;

  //       if (
  //         this.state.activedId === this.state.prizeId &&
  //         this.state.actTimes > this.state.times
  //       ) {
  //         // 符合上述所有条件时才是中奖的时候，两个ID相同并且动画执行的次数大于(或等于也行)设定的最小次数
  //         clearInterval(this.begin);
  //         this.setState({
  //           isRolling: false,
  //         });
  //         return;
  //       }

  //       // 以下是动画执行时对id的判断
  //       if (this.state.activedId === '') {
  //         num = 0;
  //         this.setState({
  //           activedId: num,
  //         });
  //       } else {
  //         num = this.state.activedId;
  //         if (num === 11) {
  //           num = 0;
  //           this.setState({
  //             activedId: num,
  //           });
  //         } else {
  //           num = num + 1;
  //           this.setState({
  //             activedId: num,
  //           });
  //         }
  //       }

  //       this.setState({
  //         actTimes: this.state.actTimes + 1,
  //       });
  //     }, 40);
  //   }
  render() {
    const { list, as } = this.props;
    return (
      <div className="lottery-container">
        <h1 className="h1-title">幸运抽奖</h1>
        <div className="box">
          <div className="left-part">
            <div className="lottery-count">
              <p>
                当前矿石数：<span> &infin;</span>
              </p>
              <button>已签到</button>
            </div>
            <div className="lottery">
              <div className="turntable-box">
                <div className="up-border up-down">
                  <div className="dot vertex"></div>
                  <div className="dot border left-border-dot"></div>
                  <div className="dot white"></div>
                  <div className="dot border right-border-dot"></div>
                  <div className="dot vertex"></div>
                </div>
                <div className="down-border up-down">
                  <div className="dot vertex"></div>
                  <div className="dot border left-border-dot"></div>
                  <div className="dot white"></div>
                  <div className="dot border right-border-dot"></div>
                  <div className="dot vertex"></div>
                </div>
                <div className="left-border left-right">
                  <div className="dot vertex"></div>
                  <div className="dot border left-border-dot"></div>
                  <div className="dot white"></div>
                  <div className="dot border right-border-dot"></div>
                  <div className="dot vertex"></div>
                </div>
                <div className="right-border left-right">
                  <div className="dot vertex"></div>
                  <div className="dot border left-border-dot"></div>
                  <div className="dot white"></div>
                  <div className="dot border right-border-dot"></div>
                  <div className="dot vertex"></div>
                </div>
                <div className="blocks">
                  <div className="item-container">
                    <RowItem {...list[0]} />
                    <RowItem {...list[8]} />
                    <RowItem {...list[7]} />
                    <RowItem {...list[1]} />
                    <div className="turntable-item item">
                      <div className="turntable-item  lottery">
                        <div className="lottery-text">抽奖</div>
                        <div className="text">200矿石/次</div>
                      </div>
                    </div>
                    <RowItem {...list[6]} />
                    <RowItem {...list[2]} />
                    <RowItem {...list[3]} />
                    <RowItem {...list[4]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-part">
            <h1 className="h1-title">围观大奖</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Lottery;
