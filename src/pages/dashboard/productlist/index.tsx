import React, { useState, useEffect, useRef } from 'react'
import { Input, Pagination, Button, Table, Loading } from 'element-react';
import 'element-theme-default';
import styles from './style/index.module.less';
import "./style/index.less"


import { HttpService } from "@/utils/request";
const httpService = new HttpService()

///iotapi/classes/Product
function ProductList() {
  const [skip, setSkip] = useState(0); //当前页数
  const [total, setTotal] = useState(1); //当前页数
  const [productList, setproductList] = useState([]); //当前页数
  const [loading, setLoading] = useState(false); //当前页数
  const [pageSize, setPageSize] = useState(10); //当前页数
  const [currentPage, setCurrentPage] = useState(1); //当前页数
  let [value, setsearchValue] = useState("1111"); //当前页数
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
    value:"1111"
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
  const fetchData = (pagesize,skip0) => {
    setLoading(true)
    httpService.getClict({
      url: '/iotapi/classes/Product',
      params: {
        count: "objectId",
        order: "-updatedAt",
        limit:pagesize,
        skip:skip0,
        include: "category,producttemplet",
        where: { "name": { "$ne": null } }
      },
      // headers: {
      //   "sessionToken": localStorage.getItem('sessionToken')
      // }
    }).then(({ count, results }) => {
      console.log(count);
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
  const changePageSize =(value)=>{
    // state.pageSize = value
    setPageSize(value)
    setSkip(0)
    setCurrentPage(1)
    fetchData(value,0)
    
  }
 const changecurrentPage = (value)=>{
   console.log(value);
   setCurrentPage(value)
   setSkip(pageSize*(value-1))
  //  state.currentPage = value
   fetchData(pageSize,pageSize*(value-1))
  }
  useEffect(() => {
    fetchData(pageSize,skip)
  }, []);
  return (
    <div className={styles.productList}>
      <div className={styles.product_top}>
        <Input className={styles.pdtopInput}  value={value} 
        onIconClick={
          ()=>{
            setsearchValue("")
          }
        }
        icon="circle-close" placeholder="请输入产品名称搜索" />
        <Button className={styles.topItem} type="primary" icon="search">搜索</Button>
        <Button className={styles.topItem} type="primary" icon="plus">创建产品</Button>
        <Button className={styles.topItem} type="primary" >导出产品</Button>
        <Button className={styles.topItem} type="primary" >导入产品</Button>
      </div>
      <div className={styles.pdt_content}>
      <Loading loading={loading}>
        <Table
          columns={state.columns}
          data={productList}
          stripe={true}
          border={true}
          maxHeight={550}
        />
        </Loading>
      </div>
      <div className={styles.pdt_bottom}>
        <Pagination layout="total, sizes, prev, pager, next, jumper" total={total} pageSizes={[10, 20, 50, 100]} pageSize={pageSize} currentPage={currentPage}
        onSizeChange={(value)=>{
          return changePageSize(value)
        }}
        onCurrentChange={(value)=>{
          return changecurrentPage(value)
        }}
        />
      </div>
    </div>
  );
}

export default ProductList;
