import styles from './index.less';
import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import { getLottery } from '@/services/ant-design-pro/api';

interface Item {
  key: string;
  name: string;
  type: number;
  number: number;
  gl: number;
  count: number;
  image: string;
}
// let originData: Item[] = [];
// getLottery().then(({ data }) => {
//   originData = data;
// });

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `请填写 ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  // const [data, setData] = useState<API.LotteryIconItem[]>([]);

  // useEffect(() => {
  //   getLottery().then(({ data }) => setData(data || []));
  // }, []);

  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Item) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
        // postLottery(newData);
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
        // postLottery(newData);
      }
    } catch (errInfo) {
      console.log('验证失败:', errInfo);
    }
  };

  const columns = [
    {
      title: '序号',
      dataIndex: 'key',
      width: '5%',
      editable: false,
    },
    {
      title: '名称',
      dataIndex: 'name',
      width: '10%',
      editable: true,
    },
    {
      title: '类型',
      dataIndex: 'type',
      width: '5%',
      editable: true,
    },
    {
      title: '数量',
      dataIndex: 'number',
      width: '10%',
      editable: true,
    },
    {
      title: '份数',
      dataIndex: 'count',
      width: '10%',
      editable: true,
    },
    {
      title: '概率',
      dataIndex: 'gl',
      width: '10%',
      editable: true,
    },
    {
      title: '图片',
      dataIndex: 'image',
      width: '10%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a href="javascript:;" onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              保存
            </a>
            <Popconfirm title="确定取消吗?" onConfirm={cancel}>
              <a>取消</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            修改
          </a>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'key' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-edit-row">
      <EditableTable />
    </div>
  </div>
);
