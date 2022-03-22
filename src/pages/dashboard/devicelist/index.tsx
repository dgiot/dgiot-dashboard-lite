import React, { useState, useEffect, useRef } from 'react'
import { Input, Pagination, Button, Table, Loading } from 'element-react';
import 'element-theme-default';
import styles from './style/index.module.less';
import "./style/index.less"


import { HttpService } from "@/utils/request";
const httpService = new HttpService()

///iotapi/classes/Product
function DeviceList() {
  const [skip, setSkip] = useState(0); //当前页数
  const [total, setTotal] = useState(1); //当前页数
  const [productList, setproductList] = useState([]); //当前页数
  const [pageSize, setPageSize] = useState(10); //当前页数
  const state = {
    columns: [
      {
        label: "ProductID",
        prop: "objectId",
        width: 200,
        align: "center",
        sortable: true,
        className: 'tb_rows'
      },
      {
        label: "产品名称",
        prop: "name",
        width: 200,
        align: "center",
        sortable: true,
        className: 'tb_rows'
      },
      {
        label: "节点类型",
        prop: "nodeType",
        width: 200,
        align: "center",
        sortable: true,
        className: 'tb_rows',
        render: (props) => {
          return <span>
            {
              props.nodeType == 0 ? '网关子设备' : props.nodeType == 1 ? '网关设备' : props.nodeType == 2 ? '网关分组设备' : '直连设备'
            }

          </span>
        }
      },
      {
        label: "所属品类",
        prop: "category.name",
        width: 200,
        align: "center",
        sortable: true,
        className: 'tb_rows'
      },
      {
        label: "添加时间",
        prop: "createdAt",
        width: 200,
        align: "center",
        sortable: true,
        className: 'tb_rows'
      },
      {
        label: "操作",
        prop: "operation",
        fixed: 'right',
        width: 550,
        align: "center",
        className: 'tb_rows',
        render: () => {
          return (
            <span>
              <Button type="primary">配置</Button>
              <Button type="warning">字典</Button>
              <Button>组态</Button>
              <Button type="success">编辑</Button>
              <Button type="danger">删除</Button>
            </span>
          )
        }
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
  const fetchData = (pagesize) => {
    httpService.getClict({
      url: '/iotapi/classes/Product',
      params: {
        count: "objectId",
        order: "-updatedAt",
        limit: pagesize,
        skip,
        include: "category,producttemplet",
        where: { "name": { "$ne": null } }
      },
      // headers: {
      //   "sessionToken": localStorage.getItem('sessionToken')
      // }
    }).then(({ count, results }) => {
      console.log(count);
      setTotal(count)
      let list = []
      results.forEach((element, index) => {
        element.createdAt = utc2beijing(element.createdAt)
      })
      setproductList(results)
    })
  }
  //修改页面大小
  const changePageSize =(value)=>{
    setPageSize(value)
    fetchData(value)
    
  }
  useEffect(() => {
    fetchData(pageSize)
  }, []);
  return (
    <div className={styles.deviceList}>
      <div className={styles.device_top}>
        <input className={styles.topInput} placeholder="请输入产品名称搜索" />
        <Button className={styles.topItem} type="primary" icon="search">搜索</Button>
        <Button className={styles.topItem} type="primary" icon="plus">创建产品</Button>
        <Button className={styles.topItem} type="primary" >导出产品</Button>
        <Button className={styles.topItem} type="primary" >导入产品</Button>
      </div>
      <div className={styles.dvc_content}>
        <Table
          columns={state.columns}
          data={productList}
          stripe={true}
          border={true}
          max-height={450}
        />
      </div>
      <div className={styles.dvc_bottom}>
        <Pagination layout="total, sizes, prev, pager, next, jumper" total={total} pageSizes={[10, 20, 50, 100]} pageSize={pageSize} currentPage={5}
        onSizeChange={(value)=>{
          return changePageSize(value)
          
        }}
        />
      </div>
    </div>
  );
}

export default DeviceList;
