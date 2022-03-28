import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { GlobalState } from '../../../store'
import { convertRes2Blob } from "../../../utils/utilswen"
import useStorage from '@/utils/useStorage';
import { ImportParse } from '../../../api/Export'
import Base64 from 'base-64';
// import $  from 'jquery';
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
  Alert
} from '@arco-design/web-react';
import { IconCloseCircleFill, IconPlus, IconSearch } from '@arco-design/web-react/icon';
// import 'element-theme-default';
import styles from './style/index.module.less';
import "./style/index.less"


import { HttpService } from "@/utils/request";
import { merge } from 'jquery';
import { number } from 'echarts';
const httpService = new HttpService()
const FormItem = Form.Item;
const Option = Select.Option;
///iotapi/classes/Product
function ProductList(props) {
  const uploader = useRef(null);
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
  const [ObjectId, setObjectId] = useState(Number); //当前页数
  const [skip, setSkip] = useState(0); //当前页数
  const [total, setTotal] = useState(1); //页数总数
  const [productList, setproductList] = useState([]); //当前页数
  const [loading, setLoading] = useState(false); //表格加载
  const [pageSize, setPageSize] = useState(10); //一页数据数量
  const [currentPage, setCurrentPage] = useState(1); //当前页数
  const [inputValue, setInputValue] = useState(''); //输入的搜索名称
  const [visible, setVisible] = useState(false); //控制抽屉
  const [status, setStatus] = useState(''); //控制抽屉
  const [storChannel, setStorChannel] = useState([]); //存储通道
  const [taskChannel, setTaskChannel] = useState([]); //任务通道
  const [acquChannel, setAcquChannel] = useState([]); //采集通道
  const [imageUrl, setimageUrl] = useState(''); //设置图片地址
 
  // const [defaultKonva, setdefaultKonva] = useState(props.defaultKonva
  // ); //设置图片地址
  const defaultKonva = useSelector((state: GlobalState) => state.defaultKonva);
  // const userInfo = useSelector((state: GlobalState) => state.userInfo);
  const [role, setRole] = useStorage('role');
  // console.log(role);
  
  // console.log("输出",defaultKonva);

  const [form, setForm] = useState({
    type: 1,
    storageStrategy: '',
    name: '',
    tdchannel: '',// '7b290e5a0a',
    category: '',
    taskchannel: '',//'6c48effac2',
    otherchannel: [],
    nodeType: 3,
    desc: '',
    netType: '',
    devType: '',
    categoryid: '',
    producttempid: '',
    productSecret: '',
    roles: [],
    relationApp: role,
  }); //设备基本信息设置
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
            <Button style={{ marginRight: '5px', height: '40px' }} type="primary">配置</Button>
            <Button style={{ marginRight: '5px', height: '40px' }} type="primary" status='warning' >字典</Button>
            <Button style={{ marginRight: '5px', height: '40px' }}>组态</Button>
            <Button style={{ marginRight: '5px', height: '40px' }} type='primary' status='success' onClick={() => {
              console.log(
                record
              );
              setVisible(true)
              setStatus("edit")
              let nowform = form
              let data1 = {
                name: record.name,
                tdchannel: record.channel.tdchannel,// '7b290e5a0a',
                taskchannel: record.channel.taskchannel,//'6c48effac2',
                otherchannel: record.channel.otherchannel,
                nodeType: record.nodeType,
                desc: record.desc,
                netType: record.netType,
                devType: record.devType,
                relationApp: role,
              }
              // console.log(record.name);

              // setForm({...form,
              // name:record.name})
              // console.log(form);

              let newdata = Object.assign(nowform, data1)
              setForm({
                ...newdata
              })
              setObjectId(record.objectId)
              // console.log("form",newdata);



            }} >编辑</Button>
            <Button style={{ marginRight: '5px', height: '40px' }} type='primary' status='danger'
              onClick={() => {
                console.log(record.objectId);
                const params = {
                  count: 'objectId',
                  skip: 0,
                  limit: 1,
                  where: {
                    product: record.objectId,
                  },
                }
                httpService.getClict({
                  url: '/iotapi/classes/Device',
                  params,
                }).then(({ count }) => {
                  if (count > 0) {
                    Message.warning({ content: '请先删除该产品下的设备', closable: true, duration: 3000 });
                    return;
                  } else {
                    delProduct(record.objectId).then((response) => {
                      console.log(response);
                      if (response) {
                        console.log(response);
                        Message.warning({ content: '删除成功', closable: true, duration: 3000 });
                        fetchData(pageSize, skip)
                      }
                    })
                  }
                })
              }}
            >删除</Button>
          </span>
        ),

      }
    ],
    channel: [
      {
        label: '蜂窝(2G/3G/4G)',
        value: 'CELLULAR',
      },
      {
        label: 'NB-IOT通道',
        value: 'NB-IOT',
      },
      {
        label: 'BLE(低功耗蓝牙)',
        value: 'Bluetooth',
      },
      {
        label: '5G通道(直连)',
        value: '5G',
      },
      {
        label: 'WIFI通道(直连)',
        value: 'WIFI',
      },
      {
        label: 'ZigBee通道',
        value: 'ZigBee',
      },
      {
        label: 'Modbus',
        value: 'Modbus',
      },
      {
        label: 'LoRa(WAN)(直连)',
        value: 'LoRaWAN',
      },
      {
        label: 'OPC UA',
        value: ' OPC UA',
      },
      {
        label: 'ZETA通道',
        value: 'ZETA',
      },
      {
        label: '网线连接(直连)',
        value: '网线连接',
      },
      {
        label: '自定义',
        value: 'OTHER',
      },
    ]
  }

  //删除产品
  function delProduct(objectid) {
    return httpService.getClict({
      url: `/iotapi/classes/Product/${objectid}`,
      method: 'delete'
    })
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
 
  const createProduct = (data) => {
    httpService.getClict({
      url: '/iotapi/classes/Product',
      method: "POST",
      data,

    }).then((res) => {
      fetchData(pageSize, skip)
      setVisible(false);
      setStatus("");
  
    })
  }
  //搜索
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
        element.cType == 'TD' ? lists.push(element) : element.cType == 'INSTRUCT' ? listt.push(element) : element.cType != "DEVICE" && element.cType != 'PROFILE' ? lista.push(element) : ''
      })
      setStorChannel(lists)
      setTaskChannel(listt)
      setAcquChannel(lista)
    })
  }
  //
  const getProTemplete = () => {
    httpService.getClict({
      url: "/iotapi/classes/ProductTemplet",
      params: {
        order: "-createdAt",
        skip: 0,
        keys: "count(*)",
        include: "category",
        where: { "category": { "$ne": null }, "name": { "$ne": null } }
      }
    }).then(({result})=>{

    })

  }
  const changecurrentPage = (value) => {
    setCurrentPage(value)
    setSkip(pageSize * (value - 1))
    //  state.currentPage = value
    fetchData(pageSize, pageSize * (value - 1))
  }
  const editProduct = (data) => {
    // console.log("这是编辑",params);
    httpService.getClict({
      url: `/iotapi/classes/Product/${ObjectId}`,
      method: "PUT",
      data,
    }).then((res) => {
      fetchData(pageSize, skip)
      setVisible(false);
      setStatus("");
    })
  }
  /**
   * 表单产品创建编辑提交
   */
  const submitProduct = (v) => {
    // console.log(v);
    // console.log(form);

    var initparams = {
      name: v.name,
      nodeType: Number(v.nodeType),
      netType: v.netType,
      icon: imageUrl,
      devType: v.devType,
      desc: v.desc,
      thing: v.thing ? v.thing : {},
      category: {
        objectId:
          Number(form.type) == 0 ? '5ca6049839' : v.categoryid,
        __type: 'Pointer',
        className: 'Category',
      },
      producttemplet: {
        objectId:
          Number(form.type) == 0 ? '0' : form.producttempid,
        __type: 'Pointer',
        className: 'ProductTemplet',
      },
      channel: {
        type: form.type,
        tdchannel: v.tdchannel,
        taskchannel: v.taskchannel,
        otherchannel: v.otherchannel,
        // storageStrategy: form.storageStrategy,
      },
    }
    console.log("初始化值", initparams);

    if (status === 'add') {
      var ranNum = Math.ceil(Math.random() * 25)
      var productSecret = Base64.encode(
        String.fromCharCode(65 + ranNum) +
        Math.ceil(Math.random() * 10000000) +
        Number(new Date())
      )
      const aclKey = 'role' + ':' + form.relationApp
      const setAcl = {}
      setAcl[aclKey] = {
        read: true,
        write: true,
      }
      setAcl['*'] = {
        read: true,
      }
      const addparams = {
        productSecret: productSecret,
        ACL: setAcl,
        topics: [],
        decoder: {},
        config: {
          konva: {
            Stage: defaultKonva,
          },
        },
      }
      console.log(typeof initparams);

      // let params = $.extend(initparams, addparams)
      let params = Object.assign(initparams, addparams)
      console.log(typeof params);
      // let params =  merge(initparams,addparams)
      console.log("合并", params);
      delete params.config
      createProduct(params)
    } else {
      console.log('editProduct', initparams)
      delete initparams.category
      delete initparams.producttemplet
      delete initparams.thing
      // delete initparams.category
      // delete initparams.producttemplet
      editProduct(initparams)
    }
    // console.log("初始化值",initparams);


  }
  /**
   * 导出产品
   */
  async function exportpro() {
    try {
      const res = await ExportParse('Product', {})
      console.log("输出", res);

      // loading.close()
      convertRes2Blob(res)
      // this.$message.success(`${res}`)
    } catch (error) {
      // loading.close()
      // this.$message.error(`${error}`)
      console.log(error);

    }
  }

  /**
   * https://blog.csdn.net/guoyuanyuan6496/article/details/109808050
   * 转换方法
   */
  // function blobToObj(res: any) {
  //   return new Promise((resolve, reject) => {
  //     let reader = new FileReader();
  //     reader.readAsText(res.data, 'utf-8');
  //     reader.onload = function() {
  //       try {
  //         resolve(JSON.parse(reader.result as string))
  //       } catch (error) {
  //         resolve({
  //           code: 200,
  //           message: '获取文件信息成功'
  //         })
  //       }
  //     }
  //   })
  // }
  async function ExportParse(className, params) {
    // const _token = store.getters['user/token']
    const _token = localStorage.getItem("sessionToken")
    // eslint-disable-next-line no-undef
    return axios
      .post(`/iotapi/export_data?classname=${className}`,
        params, {
        responseType: 'blob',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json', //multipart/form-data
          sessionToken: _token,
          // 
        },
      })
      .catch((err) => console.log(err))
  }
  async function doUpload(event) {
    const parseFile = event.target.files[0]
    console.log(parseFile);
    // const loading = this.$baseColorfullLoading(3)
    try {
      const res = await ImportParse('Product', parseFile)
      getChannel()
      getProTemplete()
      fetchData(pageSize, skip)
      // loading.close()
      // dgiotlog.log('eresresrror', res)
      // this.$message.success(``)
    } catch (error) {
      // loading.close()
      // dgiotlog.log('error', error)
      Message.error(`${error}`)
    }
    // this.$dgiotBus.$emit('reload-router-view')
  }
  useEffect(() => {
    getChannel();
  
    console.log("初始化表单数据",form);
    
    // fetchData(pageSize, skip);
  }, []);
  useEffect(() => {
    // getChannel();
    fetchData(pageSize, skip);
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
            setStatus("add");
            setForm({
              ...form,
              type: 1,
              storageStrategy: '',
              name: '',
              tdchannel: '',// '7b290e5a0a',
              category: '',
              taskchannel: '',//'6c48effac2',
              otherchannel: [],
              nodeType: 3,
              desc: '',
              netType: '',
              devType: '',
              categoryid: '',
              producttempid: '',
              productSecret: '',
              roles: [],
              relationApp: role,
            })
          }}
        >创建产品</Button>
        <Button className={styles.topItem} type="primary" onClick={() => {
          return exportpro()
        }} >导出产品

        </Button>
        <Button className={styles.topItem} type="primary" onClick={() => {
          console.log(uploader);
          uploader.current.click()

        }} >
          <input
            ref={uploader}
            accept="zip"
            style={{ display: 'none' }}
            type="file"
            onChange={($event) => {
              return doUpload(event)

            }}
          />导入产品</Button>
      </div>
      <div className={styles.pdt_content}>
        <Spin loading={loading}>
          <Table
            style={{ height: '500px', width: '98%' }}
            columns={state.columns}
            // virtualized
            scroll={{ y: 500, x: true }}
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
        {
          visible ? (<Drawer
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
                <div style={{ width: '85%', height: '20px', marginLeft: '20px', borderBottom: '1px #ccc dashed' }} /></div>
              <Form
                {...formItemLayout}
                size='large'
                initialValues={form}
                // onValuesChange={onValuesChange}
                scrollToFirstError
                onSubmit={(v) => {
                  return submitProduct(v)
                }}
              >
                <FormItem
                  label='产品名称'
                  field='name'
                  rules={[{ required: true, message: '请输入产品' }]}
                >
                  <Input disabled={status == "edit"} onChange={(value) => {
                    setForm({
                      ...form,
                      name: value
                    })
                    // setForm({
                    //   relationApp:value
                    // })

                  }} />
                </FormItem>
                <FormItem label='设备厂家' field='devType' rules={[{ required: true, message: '请输入厂家' }]}>
                  <Input disabled={status == "edit"}
                    onChange={(value) => {
                      // let currentform =  form
                      // currentform.relationApp = value
                      setForm({
                        ...form,
                        devType: value
                      })
                      // setForm({
                      //   relationApp:value
                      // })

                    }} />
                </FormItem>
                <FormItem
                  label='所属品类'
                  field={form.type == 0 ? '' : 'categoryname'}
                  rules={status != 'edit' ? [{ required: true, message: '请输入所属分类' }] : []}
                >
                  {
                    status != 'edit' ? (
                      <Radio.Group size="large" onChange={(value) => {
                        setForm({
                          ...form,
                          type: value
                        })
                      }}>
                        <Radio value='1'>标准品类</Radio>
                        <Radio value='0'>自定义品类</Radio>
                      </Radio.Group>
                    ) : (<div></div>)
                  }

                </FormItem>
                <FormItem
                  label='存储通道'
                  field='tdchannel'
                  rules={[
                    {
                      required: true,
                      message: "请输入存储通道"
                    }
                  ]}
                >
                  <Select
                    value={form.tdchannel}
                    onChange={(value) => {
                      setForm({
                        ...form,
                        tdchannel: value
                      })
                    }}
                  >
                    {storChannel.map((option, index) => (
                      <Option key={option.objectId} value={option.objectId}>
                        {option.name}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
                <FormItem label='任务通道' field='taskchannel' rules={[{ required: true, message: "请输入任务通道" }]}>
                  <Select
                    value={form.taskchannel}

                    onChange={(value) => {
                      setForm({
                        ...form,
                        taskchannel: value
                      })
                    }}
                  >
                    {taskChannel.map((option, index) => (
                      <Option key={option.objectId} value={option.objectId}>
                        {option.name}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
                <FormItem label='采集通道' field='otherchannel' rules={[{ required: true, message: "请输入采集通道" }]}>
                  <Select
                    mode='multiple'
                    value={form.otherchannel}
                    onChange={(value) => {
                      // console.log(value);

                      setForm({
                        ...form,
                        otherchannel: value
                      })
                    }}
                  >
                    {acquChannel.map((option, index) => (
                      <Option key={option.objectId} value={option.objectId}>
                        {option.name}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
                {
                  status != 'edit' ? (<FormItem
                    label='当前部门'
                    required
                    field={status != 'edit' ? 'relationApp' : ''}
                    rules={[
                      {
                        type: 'array',
                        minLength: 1,
                        message: 'choice is required',
                      },
                    ]}
                  >
                    <Input disabled onChange={(value) => {
                      // let currentform =  form
                      // currentform.relationApp = value
                      setForm({
                        ...form,
                        relationApp: value
                      })
                      // setForm({
                      //   relationApp:value
                      // })

                    }} />
                  </FormItem>) : ''
                }
                <FormItem
                  label='节点类型'
                  field='nodeType'
                  rules={[
                    {
                      required: true,
                      message: '请选择节点类型',
                    },
                  ]}
                >
                  <Radio.Group value={form.nodeType}
                    onChange={(value) => {
                      setForm({
                        ...form,
                        otherchannel: value
                      })
                    }}>
                    <Radio value={3}>直连设备</Radio>
                    <Radio value={1}>网关设备</Radio>
                    <Radio value={2}>
                      网关分组设备
                    </Radio>
                    <Radio value={0}>网关子设备</Radio>
                  </Radio.Group>
                </FormItem>
                <FormItem
                  label='连网方式'
                  field='netType'
                >
                  <Select value={form.netType} style={{ width: '200px' }}
                    onChange={(value) => {
                      setForm({
                        ...form,
                        netType: value
                      })
                    }}

                    options={state.channel} />
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
          </Drawer>) : (<div style={{ display: 'none' }}></div>)
        }
      </div>
    </div>

  );
}

// const mapStateToProps = (state)=>{
//   return {
//     defaultKonva:state.defaultKonva
//   }
// }

export default ProductList;
