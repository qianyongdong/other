import { Request, Response } from 'express';

let list = [
  {
    key: 1,
    type: 1,
    name: '矿石',
    number: 40,
    count: 60,
    gl: 20,
    image: 'test.png',
  },
  {
    key: 2,
    type: 0,
    name: '未设奖品',
    number: 0,
    count: 0,
    gl: 30,
    image: 'lose.png',
  },
  {
    key: 3,
    type: 2,
    name: '马克杯',
    number: 1,
    count: 20,
    gl: 10,
    image: 'mkb.png',
  },
  {
    key: 4,
    type: 0,
    name: '未设奖品',
    number: 0,
    count: 0,
    gl: 0,
    image: 'lose.png',
  },
  {
    key: 5,
    type: 0,
    name: '未设奖品',
    number: 0,
    count: 0,
    gl: 0,
    image: 'lose.png',
  },
  {
    key: 6,
    type: 0,
    name: '未设奖品',
    number: 0,
    count: 0,
    gl: 0,
    image: 'lose.png',
  },
  {
    key: 7,
    type: 0,
    name: '未设奖品',
    number: 0,
    count: 0,
    gl: 0,
    image: 'lose.png',
  },
  {
    key: 8,
    type: 0,
    name: '未设奖品',
    number: 0,
    count: 0,
    gl: 40,
    image: 'lose.png',
  },
];
const getLottery = (req: Request, res: Response) => {
  res.json({
    data: list,
  });
};

/*更新lottery */
const postLottery = (req: Request, res: Response, u: string, b: Request) => {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const { method, name, desc, key } = body;
  switch (method) {
    case 'update':
      (() => {
        let newRule = {};
        list = list.map((item) => {
          if (item.key === key) {
            newRule = { ...item, desc, name };
            return { ...item, desc, name };
          }
          return item;
        });
        return res.json(newRule);
      })();
      return;
    default:
      break;
  }
};
export default {
  'GET /api/lottery': getLottery,
  // 'POST /api/lottery': postLottery,
};
