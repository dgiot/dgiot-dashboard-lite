import React, { Dispatch, useState, useEffect, useRef, useCallback } from 'react'
import useStorage from '@/utils/useStorage';
import {
  Table,
  Select,
  Input,
  Button,
  Pagination,
  Spin,
  Drawer,
  Form,
  Grid,
  Switch,
  Radio,
  Message,
  Upload,
  Popover,
  Modal,
  Tabs
} from '@arco-design/web-react';
import { IconCloseCircleFill, IconPlus, IconSearch } from '@arco-design/web-react/icon';
// import 'element-theme-default';

import styles from './style/index.module.less';
import "./style/index.less"

import DeviceMap from './deviceMap'

import { HttpService } from "@/utils/request";
// import {useAsyncState} from "@/utils/uncompinstall"  
const httpService = new HttpService()
const FormItem = Form.Item;
const Row = Grid.Row;
const Col = Grid.Col;
const Option = Select.Option;
const TabPane = Tabs.TabPane;
///iotapi/classes/Product
function useUnmounted() {
  const unmountedRef = useRef(false);
  useEffect(() => {
    return () => {
      unmountedRef.current = true;
    };
  }, []);
  return unmountedRef.current;
}
function useAsyncState<S>(initialState?: S | (() => S)): [S | undefined, Dispatch<SetStateAction<S>>] {
  const unmountedRef = useUnmounted();
  const [state, setState] = useState(initialState);
  const setAsyncState = useCallback((s) => {
    if (unmountedRef) return;
    setState(s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [state, setAsyncState];
}
function DeviceList() {
  const [skip, setSkip] = useAsyncState(0); //当前页数
  const [total, setTotal] = useState(1); //页数总数
  const [productList, setproductList] = useState([]); //产品列表
  const [deviceList, setdeviceList] = useState([]); //设备列表
  const [loading, setLoading] = useState(false); //表格加载
  const [pageSize, setPageSize] = useState(10); //一页数据数量
  const [currentPage, setCurrentPage] = useState(1); //当前页数
  const [inputValue, setInputValue] = useState(''); //输入的搜索名称
  const [visible, setVisible] = useState(false); //控制抽屉
  const [status, setStatus] = useState(''); //控制抽屉
  const [storChannel, setStorChannel] = useState([]); //存储通道
  const [taskChannel, setTaskChannel] = useState([]); //任务通道
  const [acquChannel, setAcquChannel] = useState([]); //采集通道  
  const [marklist, setMarkList] = useState([]); //设备位置 
  const [equvalue, setEquValue] = useState(''); //搜索对应产品所属设备 
  const [objectId, setObjectId] = useState(''); //搜索对应产品所属设备 
  const [productDetail, setProductDetail] = useState({
    devType: '',
    category: {
      className: '',
      objectId: '',
      __type: ''
    }
  }); //搜索对应产品所属设备 
  const [center, setCenter] = useState({
    lat: '',
    lng: ''
  }); //设备地理位置经纬度
  const [videoOptions, setVideoOptions] = useState(['m3u8', 'mp4', 'flv', 'mp3']); //视频类型 
  const [form, setForm] = useState({
    videoSrc: '',
    videoType: 'm3u8',
    name: '',
    devaddr: '',
    batchId: '',
    desc: '',
    nodeType: 0,
    devType: '',
    netType: '',
    assetNum: '',
    devModel: '',
    address: '',
    productName: '',
    status: '',
    isEnable: '',
    brand: '',
  }); //采集通道
  const [searchValue, setSearchValue] = useState({
    condition: '设备名称',
    onlinedevices: '',
    deviceinput: ''
  }); //设备位置 

  //storage
  const [role, setRole] = useStorage('role');


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
  const columns = [
    {
      title: "设备编号",
      dataIndex: "devaddr",
      width: 200,
      align: "center",
      // sortOrder: true,
      className: 'tb_rows',
      sorter: (a, b) => a.devaddr - b.devaddr
    },
    {
      title: "名称",
      dataIndex: "name",
      width: 200,
      align: "center",
      className: 'tb_rows',
      sorter: (a, b) => a.name.length - b.name.length
    },
    {
      title: "状态",
      dataIndex: "status",
      width: 200,
      align: "center",
      // sortable: true,
      className: 'tb_rows',
      render: (props) => {
        // console.log(props);
        return <span style={{ color: props === 'OFFLINE' ? 'red' : 'green' }}>
          {
            props == 'OFFLINE' ? '离线' : '在线'
          }

        </span>
      }
    },
    {
      title: "所属产品",
      dataIndex: "product.name",
      width: 200,
      align: "center",
      // sortable: true,
      className: 'tb_rows'
    },
    {
      title: "单位",
      dataIndex: "Company",
      width: 200,
      align: "center",
      // sortable: true,
      className: 'tb_rows'
    },
    {
      title: "启用/禁用",
      dataIndex: "isEnable",
      width: 150,
      align: "center",
      // sortable: true,
      className: 'tb_rows',
      render: (props) => {
        return (
          <Switch checked={props} />

        )

      }
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      width: 300,
      align: "center",
      // sortable: true,
      className: 'tb_rows',
      sorter: (a, b) => {
        console.log(a, b);

        a.createdAt - b.createdAt > 0
      },
      render: (props) => {
        return (
          utc2beijing(props)

        )

      }
    },
    {
      title: "操作",
      dataIndex: "operation",
      fixed: 'right',
      width: 500,
      align: "center",
      className: 'tb_rows',
      render: (col, record) => (
        <span>
          <Button style={{ marginRight: '5px', height: '40px' }} type="primary">详情</Button>
          <Button style={{ marginRight: '5px', height: '40px' }} type="primary" status='warning'
            onClick={() => {
              console.log(
                record
              );
              setVisible(true)
              setStatus("edit")

              setForm({
                ...form,
                devaddr: record.devaddr,
                name: record.name,
                assetNum: record.detail.assetNum,
                devModel: record.detail.devModel,
                desc: record.detail.desc,
                // productid: record.product.objectId,
                brand: record.detail.brand,
                productName: record.product.objectId,
                status: record.status,
                isEnable: record.isEnable,
                videoType: record.detail.videoType,
                videoSrc: record.detail.videoSrc,
                address: record.detail.address,
              })
              setCenter({
                ...center,
                lat: record.location.latitude,
                lng: record.location.longitude,
              })
              setObjectId(record.objectId)
              // return ;
              httpService.getClict({
                url: `/iotapi/classes/Product/${record.product.objectId}`,
              }).then(({ devType, category }) => {
                // console.log(res);
                setProductDetail({
                  ...productDetail,
                  devType: devType,
                  category: category
                })
              })
              return;

              // console.log("form",newdata);



            }}
          >编辑</Button>
          <Button style={{ marginRight: '5px', height: '40px' }}>组态</Button>
          <Popover
            position='br'
            content={
              <span>
                <div className='more_btn' style={{ color: "#339dff", cursor: 'pointer', padding: "5px 0" }}
                  onClick={() => {
                    console.log(record);
                  }}
                >迁移</div>
                <div className='more_btn' style={{ color: "#ffba00", cursor: 'pointer', padding: "5px 0" }}
                  onClick={() => {
                    console.log(record);
                  }}
                >视频</div>
                <div className='more_btn' style={{ color: "#ff4d4f", cursor: 'pointer', padding: "5px 0" }}
                  onClick={() => {
                    Modal.confirm({
                      title: '温馨提示',
                      content: '你确定要删除当前项吗',
                      okButtonProps: { size: "small", status: 'danger' },
                      cancelButtonProps: { size: "small", status: 'default' },
                      okText: '确定',
                      cancelText: '取消',
                      onOk: () => {
                        console.log(record);
                        httpService.getClict({
                          url:`/iotapi/classes/Device/${record.objectId}`,
                          method:"DELETE"
                        }).then(res=>{
                          getDevices(skip,pageSize)
                        })
                        }
                    });
                  }}
                >删除</div>
              </span>
            }
          >
            <Button style={{ marginRight: '5px', height: '40px' }} type='primary' status='danger'>
              更多
            </Button>
          </Popover>
        </span>
      ),

    }
  ]
  const state = {

    deviceTabs: [
      {
        id: 10001,
        name: '设备列表'
      }
      // , {
      //   id: 10002,
      //   name: '设备地图'
      // }
    ],
    marklist: [
      {
        deviceName: "usrSSH-2.0-Go",
        location: { lat: 30.262441, lng: 120.161324 },
        objectId: "1680a102c5"
      },
      {
        deviceName: "usr2.0-Go",
        location: { lat: 31.262441, lng: 120.161324 },
        objectId: "165afa61fa"
      }
    ]
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

  //获取设备
  const fetchData = (pagesize, skip0) => {
    setLoading(true)
    httpService.getClict({
      url: '/iotapi/classes/Device',
      params: {
        excludeKeys: 'channel,children,config,thing,decoder,data,basedata,content',
        include: "product.name,name",
        order: '-createdAt',
        limit: pagesize,
        skip: skip0,
        count: "objectId",
        where: { "product": { "$ne": null }, "name": { "$ne": null, "$exists": true }, "devaddr": { "$ne": null }, "status": { "$ne": null } }
      },
    }).then(({ count, results }) => {
      // console.log(count);
      setTotal(count)
      setLoading(false)
      let list = []
      results.forEach((element, index) => {
        // element.createdAt = utc2beijing(element.createdAt)
        let item = {
          deviceName: element.name,
          location: {
            lat: element.location.latitude,
            lng: element.location.longitude
          },
          objectId: element.objectId
        }
        list.push(item)
        if (element.ACL) {
          for (var key in element.ACL) {
            console.log(key);
            
            element.Company = key.substr(5)
            // obj.applicationtText = key ? key.substr(5) : ''
          }
        } else {
          element.Company = ''
        }
      })
      setdeviceList(results)
      setMarkList(list)  //设置设备位置信息

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
  //获取产品列表
  const getProduct = () => {
    httpService.getClict({
      url: '/iotapi/classes/Product',
      params: {
        count: 'objectId',
        order: '-updatedAt',
        where: {}
      },
      // headers: {
      //   "sessionToken": localStorage.getItem('sessionToken')
      // }
    }).then(({ count, results }) => {
      // setTotal(count)
      // setLoading(false)
      // let lists = []//存储通道 TD   cType
      // let listt = []//任务通道 INSTRUCT
      // let lista = []//采集通道 MODBUS
      setproductList(results);
      // setproductList(results)
      // results.forEach((element, index) => {
      //   element.cType == 'TD' ? lists.push(element) : element.cType == 'INSTRUCT' ? listt.push(element) : element.cType != "DEVICE" && element.cType != 'PROFILE' ? lista.push(element) : ''
      // })
      // setStorChannel(lists)
      // setTaskChannel(listt)
      // setAcquChannel(lista)
    })
  }
  //替换页面
  const changecurrentPage = (value) => {
    setCurrentPage(value)
    setSkip(pageSize * (value - 1))
    //  state.currentPage = value
    fetchData(pageSize, pageSize * (value - 1))
  }
  //搜索获取设备列表
  function getDevices(skip0, pagesize) {
    // this.listLoading = true
    // const loading = this.$baseColorfullLoading(3)
    setLoading(true)
    let queryPayload = {
      include: '',
      where: {},
      order: '-createdAt',
      count: 'objectId',
      skip: skip0,
      limit: pagesize,
    }
    queryPayload.include = 'product.name,name'
    queryPayload.where = {
      name:
        searchValue.condition === '设备名称' && searchValue.deviceinput
          ? { $regex: searchValue.deviceinput }
          : {
            $ne: null,
            $exists: true,
          },
      devaddr:
        searchValue.condition === '设备编号' && searchValue.deviceinput
          ? { $regex: searchValue.deviceinput }
          : { $ne: null },
      status:
        searchValue.onlinedevices == '在线'
          ? 'ONLINE'
          : searchValue.onlinedevices == '离线'
            ? 'OFFLINE'
            : { $ne: null },
      product:
        equvalue ? equvalue : { $ne: null }
    }
    console.log("查询条件", queryPayload);
    httpService.getClict({
      url: '/iotapi/classes/Device',
      params: queryPayload
    }).then(({ count, results }) => {
      setTotal(count)
      setLoading(false)
      let list = []
      results.forEach((element, index) => {
        // element.createdAt = utc2beijing(element.createdAt)
        let item = {
          deviceName: element.name,
          location: {
            lat: element.location.latitude,
            lng: element.location.longitude
          },
          objectId: element.objectId
        }
        list.push(item)
        if (element.ACL) {
          for (var key in element.ACL) {
            console.log(key);
            
            element.Company = key.substr(5)
            // obj.applicationtText = key ? key.substr(5) : ''
          }
        } else {
          element.Company = ''
        }
      })
      setdeviceList(results)
      setMarkList(list)  //设置设备位置信息
    })
  }
  //创建设备
  async function createDevice(params) {
    const res = await httpService.getClict({
      url: '/iotapi/classes/Device',
      method: 'post',
      data: params
    })
    if ((res as any).objectId) {
      setVisible(false)
      getDevices(skip, pageSize)
    } else {
      Message.error({
        content: '添加失败', closable: true, duration: 3000
      })
    }
  }
  //更新设备
  async function updateDevice(id, params) {
    const res = await httpService.getClict({
      url: `/iotapi/classes/Device/${id}`,
      method: 'PUT',
      data: params
    })
    if ((res as any).updatedAt || (res as any).devaddr) {
      Message.success({ content: '更新成功', duration: 2000 })
      getDevices(skip, pageSize)
    } else {
      Message.error({ content: '更新失败', duration: 2000 })
      // this.$message({
      //   type: 'error',
      //   message: res.error,
      // })
    }
  }
  //添加设备 or 修改设备信息
  function submitDevice(v) {
    var location = {
      __type: 'GeoPoint',
      latitude: center.lat ? center.lat : 0,
      longitude: center.lng ? center.lng : 0,
    }
    var detail = {
      assetNum: form.assetNum,
      devModel: form.devModel,
      brand: form.brand,
      address: form.address,
      desc: form.desc,
      videoType: form.videoType,
      videoSrc: form.videoSrc,
      devType: '',
      category: ''
    }
    var obj = {
      videoSrc: form.videoSrc,
      videoType: form.videoType,
      devaddr: form.devaddr
    }
    console.log(detail);

    if (status == 'edit') {
      //设备编辑
      delete detail.devType
      delete detail.category

      var devicesParmas = {
        name: form.name,
        devaddr: form.devaddr,
        product: {
          __type: 'Pointer',
          className: 'Product',
          objectId: productDetail.category.objectId,
        },
        detail: detail,
        location: location,
        basedata: obj,
        profile: obj,
      }
      console.log(devicesParmas);

      // return 
      updateDevice(objectId, devicesParmas)
      setVisible(false)


    } else {
      var params = {
        count: 'objectId',
        where: {
          name: { $in: [form.name] },
          devaddr: { $in: [form.devaddr] },
        },
      }
      httpService.getClict({
        url: '/iotapi/classes/Device',
        params: params
      }).then(({ count }) => {
        if (count > 0) {
          Message.warning({ content: '此设备已被创建', closable: true, duration: 3000 });
          return;
        } else {
          
          const aclKey = 'role' + ':' + role
          const setAcl = {}
          setAcl[aclKey] = {
            read: true,
            write: true,
          }
          console.log("权限", setAcl);
          // return ;
          var devicesParmas = {
            product: {
              __type: 'Pointer',
              className: 'Product',
              objectId: form.productName,
            },
            status: 'OFFLINE',
            isEnable: false,
            ACL: setAcl,
            name: form.name,
            devaddr: form.devaddr,
            objectId: form.devaddr,
            lastOnlineTime: 0,
            detail: detail,
            location: location,
            basedata: obj,
          }
          devicesParmas.detail.devType = productDetail.devType
          devicesParmas.detail.category = productDetail.category.objectId
          console.log('createDevice params\n ', devicesParmas)
          createDevice(devicesParmas)
        }
      })
    }
  }
  useEffect(() => {
    fetchData(pageSize, skip);
    getProduct();
  }, []);
  return (
    <div className={styles.deviceList}>
      <Tabs style={{ maxWidth: '100%', margin: 25, height: '100%', }}>
        {state.deviceTabs.map((item, index) => {
          return (
            <TabPane style={{}} destroyOnHide key={item.id} title={item.name}>
              {
                item.id == 10001 ? (
                  <div style={{ margin: '0px 16px 16px 16px' }}>
                    <div className={styles.device_top}>
                      <div >
                        <Form size="large" layout="inline" className={styles.form_dwrap} style={{ display: 'flex', width: "100%", flexDirection: "row" }}>

                          <Form.Item label="所属产品" field='name'>
                            <Select style={{ width: 200 }} size="large" value={equvalue} allowClear onChange={(v) => {
                              console.log(v);
                              setEquValue(v)
                              console.log(equvalue);


                            }} placeholder='请选择' >
                              {productList.map((option, index) => (
                                <Option key={option.objectId} value={option.objectId}>
                                  {option.name}
                                </Option>
                              ))}
                            </Select>
                          </Form.Item>

                          <Form.Item field='age' label='设备状态' >
                            <Select style={{ width: 130 }} allowClear value={searchValue.onlinedevices} placeholder='请选择'
                              onChange={(v) => {
                                console.log(v);
                                setSearchValue({
                                  ...searchValue,
                                  onlinedevices: v
                                })

                              }} >
                              <Select.Option value='在线'>在线</Select.Option>
                              <Select.Option value='离线'>离线</Select.Option>
                            </Select>
                          </Form.Item>
                          <Form.Item field='deviceinput' label='搜索条件' >
                            <Input
                              style={{ width: 450, marginBottom: 24, marginRight: 24 }}
                              addBefore={
                                <Select value={searchValue.condition} onChange={(value) => {
                                  setSearchValue({
                                    ...searchValue,
                                    condition: value
                                  })
                                }} style={{ width: 130 }}>
                                  <Select.Option value='设备名称'>设备名称</Select.Option>
                                  <Select.Option value='设备编号'>设备编号</Select.Option>
                                </Select>
                              }
                              addAfter={<IconSearch onClick={() => {
                                console.log(searchValue);
                                console.log(!equvalue);
                                setCurrentPage(1)
                                return getDevices(skip, pageSize)
                              }}
                                style={{ color: "#00f", cursor: 'pointer' }} />}
                              allowClear={true}
                              placeholder={searchValue.condition == '设备名称' ? '请输入设备名称' : '请输入设备编号'}
                              value={searchValue.deviceinput}
                              onChange={(v) => {
                                setSearchValue({
                                  ...searchValue,
                                  deviceinput: v
                                })
                              }}
                            />
                          </Form.Item>
                          <Button type='primary' icon={<IconPlus />} onClick={() => {
                            setVisible(true);
                            setStatus("add");
                            setCenter({
                              ...center,
                              lat: '',
                              lng: ''
                            })
                            setForm({
                              videoSrc: '',
                              videoType: 'm3u8',
                              name: '',
                              devaddr: '',
                              batchId: '',
                              desc: '',
                              nodeType: 0,
                              devType: '',
                              netType: '',
                              assetNum: '',
                              devModel: '',
                              address: '',
                              productName: '',
                              status: '',
                              isEnable: '',
                              brand: '',
                            })
                          }} />
                        </Form>

                        {/* <input className={styles.dvtopInput} value={inputValue}
                          placeholder="请输入产品名称搜索"
                          onChange={e => {
                            setInputValue(e.target.value);
                          }} />
                        <IconCloseCircleFill className="el-icon-circle-close in_close"
                          onClick={() => {
                            setInputValue('');
                          }} /> */}
                      </div>
                      {/* <Button className={styles.dvtopItem} type="primary" icon={<IconSearch />}
                        onClick={() => {
                          return searchProduct(pageSize, inputValue)
                        }}
                      >搜索</Button>
                      <Button className={styles.dvtopItem} type="primary" icon={<IconPlus />}
                        onClick={() => {
                          setVisible(true);
                          setStatus(true);
                        }}
                      >创建产品</Button> */}
                    </div>
                    <div className={styles.dvc_content}>
                      <Spin loading={loading}>
                        <Table
                          style={{ height: '550px', width: '80%' }}
                          // rowSelection={{
                          //   type: 'checkbox',
                          //   onChange: (selectedRowKeys, selectedRows) => {
                          //     console.log(selectedRowKeys, selectedRows);
                          //   },
                          // }}
                          columns={columns}
                          scroll={{ y: 550, x: true }}
                          data={deviceList}
                          stripe={true}
                          border={true}
                          pagination={false}

                        />
                      </Spin>
                    </div>
                    <div className={styles.dvc_bottom}>
                      <Pagination total={total} showTotal pageSize={pageSize} sizeOptions={[5, 10, 20, 50]} sizeCanChange current={currentPage}
                        onChange={(pageNumber, pagesize) => {
                          if (pageNumber != currentPage) {
                            if (equvalue || searchValue.onlinedevices || searchValue.deviceinput) {
                              // console.log("1111");
                              setCurrentPage(pageNumber)
                              setSkip(pageSize * (pageNumber - 1))
                              return getDevices(pageSize * (pageNumber - 1), pageSize)


                            }
                            return changecurrentPage(pageNumber)
                          } else if (pagesize != pageSize) {
                            return changePageSize(pagesize)
                          }

                        }}
                      />
                    </div>
                  </div>) : (
                  <div style={{ height: '90vh', width: '100%' }}>
                    <DeviceMap marklist={marklist} />
                  </div>)
              }
            </TabPane>
          );
        })}
      </Tabs>

      <div>
        {
          visible ? (<Drawer
            width="50%"
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
                <div>设备信息</div>
                <div style={{ width: '85%', height: '20px', marginLeft: '20px', borderBottom: '1px #ccc dashed' }} /></div>
              <Form
                {...formItemLayout}
                size='large'
                initialValues={form}
                // onValuesChange={onValuesChange}
                scrollToFirstError
                onSubmit={(v) => {
                  console.log(form);
                  return submitDevice(v);

                  // return submitProduct(v)
                }}
              >
                <FormItem
                  label='设备名称'
                  field='name'
                  rules={[{ required: true, message: '请输入设备名称' }]}
                >
                  <Input onChange={(value) => {
                    setForm({
                      ...form,
                      name: value
                    })
                    // setForm({
                    //   relationApp:value
                    // })

                  }} />
                </FormItem>
                <FormItem label='设备编号' field='devaddr' rules={[{ required: true, message: '请输入设备编号' }]}>
                  <Input disabled={status == "edit"}
                    onChange={(value) => {
                      // let currentform =  form
                      // currentform.relationApp = value
                      setForm({
                        ...form,
                        devaddr: value
                      })
                      // setForm({
                      //   relationApp:value
                      // })

                    }} />
                </FormItem>
                <FormItem
                  label='产品名称'
                  field='productName'
                  rules={[
                    {
                      required: true,
                      message: "请选择产品"
                    }
                  ]}
                >
                  <Select

                    style={{ width: 200 }}
                    disabled={status == "edit"}
                    value={form.productName}
                    placeholder="请选择"
                    onChange={(value) => {
                      setForm({
                        ...form,
                        productName: value
                      })
                      httpService.getClict({
                        url: `/iotapi/classes/Product/${value}`,
                      }).then(({ devType, category }) => {
                        // console.log(res);
                        setProductDetail({
                          ...productDetail,
                          devType: devType,
                          category: category
                        })
                      })
                    }}
                  >
                    {productList.map((option, index) => (
                      <Option key={option.objectId} value={option.objectId}>
                        {option.name}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
                <FormItem label='资产编号' field='assetNum'>
                  <Input
                    value={form.assetNum}

                    onChange={(value) => {
                      setForm({
                        ...form,
                        assetNum: value
                      })
                    }}
                  />

                </FormItem>
                <FormItem label='设备型号' field='devModel' >
                  <Input
                    value={form.devModel}
                    onChange={(value) => {
                      // console.log(value);
                      setForm({
                        ...form,
                        devModel: value
                      })
                    }}
                  />
                </FormItem>
                <FormItem
                  label='设备品牌'
                  field="brand"
                >
                  <Input value={form.brand} onChange={(value) => {
                    // let currentform =  form
                    // currentform.relationApp = value
                    setForm({
                      ...form,
                      brand: value
                    })
                    // setForm({
                    //   relationApp:value
                    // })

                  }} />
                </FormItem>
                <FormItem
                  label='安装位置'
                  field='address'
                >
                  <Input
                    value={form.address}
                    onChange={(value) => {
                      setForm({
                        ...form,
                        address: value
                      })
                      // setForm({
                      //   relationApp:value
                      // })

                    }} />
                </FormItem>
                <FormItem
                  label='视频地址'
                  field='videoSrc'

                >
                  <Input
                    value={form.videoSrc}
                    onChange={(value) => {
                      setForm({
                        ...form,
                        videoSrc: value
                      })
                      // setForm({
                      //   relationApp:value
                      // })

                    }} />
                </FormItem>
                <Form.Item
                  label='视频类型'
                  field='videoType'

                >
                  <Select style={{ width: 200 }} value={form.videoType} placeholder="请选择"
                    onChange={(value) => {
                      setForm({
                        ...form,
                        videoType: value
                      })
                    }}>
                    {videoOptions.map((option, index) => (
                      <Option key={option} value={option}>
                        {option}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <FormItem label='描述' field='desc'>
                  <Input value={form.desc} onChange={(value) => {
                    setForm({
                      ...form,
                      desc: value
                    })
                  }} />
                </FormItem>
                <FormItem {...noLabelLayout}>
                  <Button
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

export default DeviceList;
