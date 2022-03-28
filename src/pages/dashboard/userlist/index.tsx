import React, { useState, useEffect, useRef } from 'react'
import { Modal, Switch, Tree, Button, Table, Message, Pagination } from '@arco-design/web-react';
import { useSelector, useDispatch } from 'react-redux'
import styles from './style/index.module.less';
import "./style/index.less"

import { HttpService } from "@/utils/request";
import { LineAdvance } from 'bizcharts';
const httpService = new HttpService()

function UserList() {
    const [total, setTotal] = useState(1); //页数总数
    const [loading, setLoading] = useState(false); //表格加载
    const [userList, setUserList] = useState([]);
    const [roleList, setRoleList] = useState([]);
    const [pageSize, setPageSize] = useState(10); //一页数据数量
    const [currentPage, setCurrentPage] = useState(1); //当前页数
    const [selectNode, setSelectNode] = useState();
    const [form, setForm] = useState({
        username: "",
        nick: "",
        phone: "",
        email: "",
        createAt: "",
        emailVerified: ""
    })

    const columns = [
        {
            title: '用户名',
            dataIndex: 'username',
            align: "center",
        },
        {
            title: '姓名',
            dataIndex: 'nick',
            align: "center",
        },
        {
            title: '电话',
            dataIndex: 'phone',
            align: "center",
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            align: "center",
        },
        {
            title: '创建时间',
            dataIndex: 'createdAt',
            align: "center",
        },
        {
            title: '操作',
            dataIndex: 'op',
            align: "center",
            render: (col, record) => (
                <span >
                    <Button style={{ marginLeft: '5px' }} onClick={() => leave(record)} type='primary' status='success' size='mini'>离岗</Button>
                    <Button style={{ marginLeft: '5px' }} onClick={() => deleteUser(record)} type='primary' status='danger' size='mini'>删除</Button>
                    <Button style={{ marginLeft: '5px' }} onClick={() => changeJob(record)} type='primary' status='warning' size='mini'>转岗</Button>

                </span>
            )
        }, {
            title: "禁用账号",
            dataIndex: 'ban',
            align: "center",
            render: (col, record) => (
                <Switch checkedText="启用" uncheckedText="禁用" defaultChecked={record.emailVerified} onChange={(value, event) => {
                    return banUser(value, event);
                }}></Switch>
            )
        }
    ]

    //禁用角色
    const banUser = (value, event) => {
        console.log(value, event);
    }

    //离岗
    const leave = (record) => {
        if (selectNode) {
            confirm("你确认要将用户从本部门移除吗？" + selectNode, record);
        }
    }

    //删除
    const deleteUser = (record) => {
        console.log(record);
    }

    //转岗
    const changeJob = (record) => {
        console.log(record);
    }

    function confirm(content, record) {
        Modal.confirm({
            title: '温馨提示',
            content: content,
            okButtonProps: { size: "small", status: 'danger' },
            cancelButtonProps: { size: "small", status: 'default' },
            onOk: () => {
                handleLeaf(record);
                Message.success("离岗成功");
            },
            onCancel: () => {
                Message.info("取消操作");
            }
        });
    }

    function handleLeaf(record) {
        console.log(record);
        async () => {
            const params = {
                userid: record.objectId,
                filter: {
                    where: {
                        name: selectNode,
                    },
                }
            }

            await httpService.getClict({
                url: '/iotapi/roleuser',
                method:""
            })
        }


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

    const selectTreeNode = (extra) => {
        console.log(extra);
        setSelectNode(extra.node.props.label);
        fetchData(pageSize, extra.node.key);
    }

    const getRoleList = () => {
        httpService.getClict({
            url: '/iotapi/roletree',
        }).then(({ results }) => {
            setRoleList(results);
            setSelectNode(results[0].label);
            fetchData(pageSize, results[0].objectId);
        })
    }

    const fetchData = (pagesize, roleId) => {
        httpService.getClict({
            url: '/iotapi/roleuser',
            params: {
                limit: pagesize,
                where: { "objectId": roleId }
            },
        }).then(({ results }) => {

            var list = [];
            results.forEach(element => {
                element.createdAt = utc2beijing(element.createdAt)
                list.push(element);
            });
            setUserList(results)
            setLoading(false)
        })
    }

    useEffect(() => {
        // getChannel();
        setLoading(true);
        getRoleList();
    }, []);

    return (
        <div className={styles.userList}>
            <div className={styles.role_tree}>
                <div className={styles.role_tree_top}>
                    <span>当前部门： {selectNode}</span>
                </div>
                <Tree
                    defaultSelectedKeys={[]}
                    treeData={roleList}
                    showLine={true}
                    fieldNames={{ key: 'objectId', title: 'label' }}
                    onSelect={(selectedKeys, extra) => {
                        return selectTreeNode(extra);
                    }}
                >
                </Tree>
            </div>
            <div className={styles.user_content}>
                <div className={styles.user_top}>
                    <Button type='secondary' size="small">
                        新增用户
                    </Button>
                </div>

                <div className={styles.user_list}>
                    <Table border={true} columns={columns} data={userList} loading={loading} pagination={false}></Table>
                </div>
            </div>

        </div>
    )
}

export default UserList;