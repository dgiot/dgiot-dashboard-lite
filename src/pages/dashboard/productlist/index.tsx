import React, { useState, useEffect, useRef } from 'react'
import {
  Table,
  Select,
  Input,
  Button,
  Pagination,
  Spin,
  Drawer,
  Form,
  AutoComplete,
  TreeSelect,
  Checkbox,
  Switch,
  Radio,
  Cascader,
  Message,
  InputNumber,
  Rate,
  Slider,
  Upload,
  DatePicker,
  Modal,
} from '@arco-design/web-react';
import { IconCloseCircleFill, IconPlus, IconSearch } from '@arco-design/web-react/icon';
// import 'element-theme-default';
import styles from './style/index.module.less';
import "./style/index.less"


import { HttpService } from "@/utils/request";
const httpService = new HttpService()
const FormItem = Form.Item;
const Option = Select.Option;
///iotapi/classes/Product
function ProductList() {
  // const formRef = useRef();
  // useEffect(() => {
  //   formRef.current.setFieldsValue({ rate: 5 });
  // }, []);
  const noLabelLayout = {
    wrapperCol: {
      span: 17,
      offset: 7,
    },
  };
  const formItemLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 17,
    },
  };
  const [skip, setSkip] = useState(0); //当前页数
  const [total, setTotal] = useState(1); //页数总数
  const [productList, setproductList] = useState([]); //当前页数
  const [loading, setLoading] = useState(false); //表格加载
  const [pageSize, setPageSize] = useState(10); //一页数据数量
  const [currentPage, setCurrentPage] = useState(1); //当前页数
  const [inputValue, setInputValue] = useState(''); //输入的搜索名称
  const [visible, setVisible] = useState(false); //控制抽屉
  const [status, setStatus] = useState(false); //控制抽屉
  const [storChannel, setStorChannel] = useState([]); //存储通道
  const [taskChannel, setTaskChannel] = useState([]); //任务通道
  const [acquChannel, setAcquChannel] = useState([]); //采集通道
  const state = {
    columns: [
      {
        title: "ProductID",
        dataIndex: "objectId",
        width: 200,
        align: "center",
        // sortOrder: true,
        className: 'tb_rows'
      },
      {
        title: "产品名称",
        dataIndex: "name",
        width: 200,
        align: "center",

        className: 'tb_rows'
      },
      {
        title: "节点类型",
        dataIndex: "nodeType",
        width: 200,
        align: "center",
        // sortable: true,
        className: 'tb_rows',
        render: (props) => {
          // console.log(props);

          return <span>
            {
              props == 0 ? '网关子设备' : props == 1 ? '网关设备' : props == 2 ? '网关分组设备' : '直连设备'
            }

          </span>
        }
      },
      {
        title: "所属品类",
        dataIndex: "category.name",
        width: 200,
        align: "center",
        // sortable: true,
        className: 'tb_rows'
      },
      {
        title: "添加时间",
        dataIndex: "createdAt",
        width: 300,
        align: "center",
        // sortable: true,
        className: 'tb_rows'
      },
      {
        title: "操作",
        dataIndex: "operation",
        fixed: 'right',
        width: 400,
        align: "center",
        className: 'tb_rows',
        render: (col, record) => (
          <span>
            <Button style={{ marginRight: '5px' }} type="primary">配置</Button>
            <Button style={{ marginRight: '5px' }} type="primary" status='warning' >字典</Button>
            <Button style={{ marginRight: '5px' }}>组态</Button>
            <Button style={{ marginRight: '5px' }} type='primary' status='success'>编辑</Button>
            <Button style={{ marginRight: '5px' }} type='primary' status='danger'>删除</Button>
          </span>
        ),
        // render: () => {
        //   return (
        //     <span>
        //       <Button type="primary">配置</Button>
        //       <Button type="warning">字典</Button>
        //       <Button>组态</Button>
        //       <Button type="success">编辑</Button>
        //       <Button type="danger">删除</Button>
        //     </span>
        //   )
        // }
      }
    ],
  }

  //世界时间转为北京时间
  function utc2beijing(utc_datetime) {
    // 转为正常的时间格式 年-月-日 时:分:秒
    var date = new Date(+new Date(utc_datetime) + 8 * 3600 * 1000)
      .toISOString()
      .replace(/T/g, ' ')
      .replace(/\.[\d]{3}Z/, '')
    return date // 2017-03-31 16:02:06
  }
  function searchProduct(pagesize, inputValue) {
    setLoading(true)
    httpService.getClict({
      url: '/iotapi/classes/Product',
      params: {
        count: "objectId",
        order: "-updatedAt",
        limit: pagesize,
        excludeKeys: "channel,children,config,thing,decoder",
        skip: 0,
        include: "category,producttemplet",
        where: inputValue ? { "name": { "$regex": inputValue } } : { "name": { "$ne": null } }
      },
    }).then(({ count, results }) => {
      // console.log(count);
      setTotal(count)
      setLoading(false)
      let list = []
      results.forEach((element, index) => {
        element.createdAt = utc2beijing(element.createdAt)
      })
      setproductList(results)
    })
  }
  const fetchData = (pagesize, skip0) => {
    setLoading(true)
    httpService.getClict({
      url: '/iotapi/classes/Product',
      params: {
        count: "objectId",
        order: "-updatedAt",
        limit: pagesize,
        skip: skip0,
        include: "category,producttemplet",
        where: { "name": { "$ne": null } }
      },
      // headers: {
      //   "sessionToken": localStorage.getItem('sessionToken')
      // }
    }).then(({ count, results }) => {
      // console.log(count);
      setTotal(count)
      setLoading(false)
      let list = []
      results.forEach((element, index) => {
        element.createdAt = utc2beijing(element.createdAt)
      })
      setproductList(results)
     
    })
  }
  //修改页面大小
  const changePageSize = (value) => {
    // state.pageSize = value
    // console.log("大小", value);
    setPageSize(value)
    setSkip(0)
    setCurrentPage(1)
    fetchData(value, 0)
  }
  //获取通道
  const getChannel = () => {
    httpService.getClict({
      url: '/iotapi/classes/Channel',
      params: {
        count: 'objectId',
        order: '-createdAt',
        keys: 'count(*)',
        where: {}
      },
      // headers: {
      //   "sessionToken": localStorage.getItem('sessionToken')
      // }
    }).then(({ count, results }) => {
      setTotal(count)
      setLoading(false)
      let lists = []//存储通道 TD   cType
      let listt = []//任务通道 INSTRUCT
      let lista = []//采集通道 MODBUS
      results.forEach((element, index) => {
        element.cType == 'TD' ? lists.push(element) : element.cType == 'INSTRUCT' ? listt.push(element) : element.cType!="DEVICE"&&element.cType!='PROFILE'? lista.push(element):''
       
        
      })
      setStorChannel(lists)
      setTaskChannel(listt)
      setAcquChannel(lista)
    })
  }
  const changecurrentPage = (value) => {
    setCurrentPage(value)
    setSkip(pageSize * (value - 1))
    //  state.currentPage = value
    fetchData(pageSize, pageSize * (value - 1))
  }
  const onValuesChange = (changeValue, values) => {
    console.log('onValuesChange: ', changeValue, values);
  };
  useEffect(() => {
    fetchData(pageSize, skip);
    getChannel();
  }, []);
  return (
    <div className={styles.productList}>
      <div className={styles.product_top}>
        <div className='search_input'>
          <input className={styles.pdtopInput} value={inputValue}
            placeholder="请输入产品名称搜索"
            onChange={e => {
              setInputValue(e.target.value);
            }} />
          <IconCloseCircleFill className="el-icon-circle-close in_close"
            onClick={() => {
              setInputValue('');
            }} />
        </div>
        <Button className={styles.topItem} type="primary" icon={<IconSearch />}
          onClick={() => {
            return searchProduct(pageSize, inputValue)
          }}
        >搜索</Button>
        <Button className={styles.topItem} type="primary" icon={<IconPlus />}
          onClick={() => {
            setVisible(true);
            setStatus(true);
          }}
        >创建产品</Button>
        <Button className={styles.topItem} type="primary" >导出产品</Button>
        <Button className={styles.topItem} type="primary" >导入产品</Button>
      </div>
      <div className={styles.pdt_content}>
        <Spin loading={loading}>
          <Table
            columns={state.columns}
            // virtualized
            scroll={{ y: 500,x:true}}
            data={productList}
            stripe={true}
            border={true}
            pagination={false}

          />
        </Spin>
      </div>
      <div className={styles.pdt_bottom}>
        <Pagination total={total} pageSize={pageSize} sizeOptions={[5, 10, 20, 50]} sizeCanChange current={currentPage}
          onChange={(pageNumber, pagesize) => {
            if (pageNumber != currentPage) {
              return changecurrentPage(pageNumber)
            } else if (pagesize != pageSize)
              return changePageSize(pagesize)
          }}
        />
      </div>
      <div>
        <Drawer
          width="70%"
          title={<span style={{ color: '#999', fontSize: "24px", marginLeft: '10px' }}>{status ? '创建产品' : '修改产品'}</span>}
          visible={visible}
          footer={null}
          onOk={() => {
            setVisible(false);
          }}
          onCancel={() => {
            setVisible(false);
          }}
        >
          <div>
            <div style={{ fontSize: '20px', padding: '15px 10px', color: '#888', display: 'flex' }}>
              <div>产品信息</div>
              <div style={{ width: '90%', height: '20px', marginLeft: '20px', borderBottom: '1px #ccc dashed' }} /></div>
            <Form
              {...formItemLayout}
              size='large'
              initialValues={{
                slider: 20,
                'a.b[0].c': ['b'],
              }}
              // onValuesChange={onValuesChange}
              scrollToFirstError
              onSubmit={(v) => {
                console.log(v);
              }}
            >
              <FormItem
                label='产品名称'
                field='name'
                rules={[{ required: true, message: '请输入产品' }]}
              >
                <Input />
              </FormItem>
              <FormItem label='设备厂家' field='age' rules={[{ required: true, message: '请输入厂家' }]}>
                <Input />
              </FormItem>
              <FormItem
                label='所属品类'
                field='channel.type'
                rules={[{ required: true, message: '请输入所属分类' }]}
              >
                <Radio.Group size="large" defaultValue='1'>
                  <Radio value='0' disabled>标准品类</Radio>
                  <Radio value='1'>自定义品类</Radio>
                </Radio.Group>
              </FormItem>
              <FormItem
                label='存储通道'
                field='channel.tdchannel'
                rules={[
                  {
                    required: true,
                    message: "请输入存储通道"
                  }
                ]}
              >
                <Select>
                {storChannel.map((option, index) => (
                    <Option key={option.objectId}  value={option.objectId}>
                      {option.name}
                    </Option>
                  ))}
                </Select>
              </FormItem>
              <FormItem label='任务通道' field='channel.taskchannel' rules={[{ required: true, message: "请输入任务通道" }]}>
                <Select
                  onChange={(value) => Message.info({ content: `You select ${value}.`, showIcon: true })}
                >
                  {taskChannel.map((option, index) => (
                    <Option key={option.objectId}  value={option.objectId}>
                      {option.name}
                    </Option>
                  ))}
                </Select>
              </FormItem>
              <FormItem label='采集通道' field='channel.otherchannel' rules={[{ required: true, message: "请输入采集通道" }]}>
                <Select
                 mode='multiple'
                >
                  {acquChannel.map((option, index) => (
                    <Option key={option.objectId}  value={option.objectId}>
                      {option.name}
                    </Option>
                  ))}
                </Select>
              </FormItem>
              <FormItem
                label='当前部门'
                required
                field='a.b[0].c'
                rules={[
                  {
                    type: 'array',
                    minLength: 1,
                    message: 'choice is required',
                  },
                ]}
              >
                <Select options={['a', 'b', 'c', 'd', 'e']} />
              </FormItem>
              <FormItem
                label='节点类型'
                field='treenode'
                rules={[
                  {
                    required: true,
                    message: 'treenode is required',
                  },
                ]}
              >
                <Radio.Group defaultValue='3'>
                  <Radio value='3'>直连设备</Radio>
                  <Radio value='1'>网关设备</Radio>
                  <Radio value='2'>
                    网关分组设备
                  </Radio>
                  <Radio value='0'>网关子设备</Radio>
                </Radio.Group>
              </FormItem>
              <FormItem
                label='连网方式'
                field='score'
              >
                <Select style={{ width: '200px' }} placeholder='please select' options={['a', 'b', 'c', 'd', 'e']} />
              </FormItem>
              <Form.Item
                label='图标'
                field='upload'
                triggerPropName='fileList'

              >
                <Upload
                  listType='picture-card'
                  multiple
                  name='files'
                  action='/'
                  onPreview={(file) => {
                    Modal.info({
                      title: 'Preview',
                      content: (
                        <img
                          src={file.url || URL.createObjectURL(file.originFile)}
                          style={{ maxWidth: '100%' }}
                        ></img>
                      ),
                    });
                  }}
                />
              </Form.Item>
              <FormItem label='描述' field='desc'>
                <Input />
              </FormItem>
              <FormItem {...noLabelLayout}>
                <Button
                  // onClick={async () => {
                  //   if (formRef.current) {
                  //     try {
                  //       await formRef.current.validate();
                  //       Message.info('校验通过，提交成功！');
                  //     } catch (_) {
                  //       console.log(formRef.current.getFieldsError());
                  //       Message.error('校验失败，请检查字段！');
                  //     }
                  //   }
                  // }}
                  type='primary'
                  style={{ marginRight: 24 }}
                  htmlType='submit'
                >
                  确定
                </Button>
                <Button
                  onClick={() => {
                   setVisible(false)
                  }}
                >
                  取消
                </Button>
              </FormItem>
            </Form>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default ProductList;
