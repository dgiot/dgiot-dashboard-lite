import React, { useState, useEffect, ReactNode } from 'react';
import {
  Grid,
  Card,
  Typography,
  Divider,
  Skeleton,
  Link,
} from '@arco-design/web-react';
import { useSelector } from 'react-redux';
import { IconCaretUp } from '@arco-design/web-react/icon';
import OverviewAreaLine from '@/components/Chart/overview-area-line';
import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import locale from './locale';
import useLocale from '@/utils/useLocale';
import styles from './style/overview.module.less';
import IconCalendar from './assets/calendar.svg';
import IconComments from './assets/comments.svg';
import IconContent from './assets/content.svg';
import IconIncrease from './assets/increase.svg';
import { render as renderAmis, ToastComponent, AlertComponent } from 'amis';
import { alert, confirm } from 'amis/lib/components/Alert';
import { toast } from 'amis/lib/components/Toast';
import copy from 'copy-to-clipboard';
import bigscreen from './assets/store/bigscreen.json';
const { Row, Col } = Grid;
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
type StatisticItemType = {
  icon?: ReactNode;
  title?: ReactNode;
  count?: ReactNode;
  loading?: boolean;
  unit?: ReactNode;
};

function StatisticItem(props: StatisticItemType) {
  const { icon, title, count, loading, unit } = props;
  return (
      <div className={styles.item}>
        <div className={styles.icon}>{icon}</div>
        <div>
          <Skeleton loading={loading} text={{ rows: 2, width: 60 }} animation>
            <div className={styles.title}>{title}</div>
            <div className={styles.count}>
              {count}
              <span className={styles.unit}>{unit}</span>
            </div>
          </Skeleton>
        </div>
      </div>
  );
}

type DataType = {
  allContents?: string;
  liveContents?: string;
  increaseComments?: string;
  growthRate?: string;
  chartData?: { count?: number; date?: string }[];
  down?: boolean;
};

type Amis = {
  amisScoped?: string;
  theme?: string;
  locale?: string;
};

function Overview() {
  const [data, setData] = useState<DataType>({});
  const [loading, setLoading] = useState(true);
  const t = useLocale(locale);

  const userInfo = useSelector((state: any) => state.userInfo || {});

  const fetchData = () => {
    setLoading(true);
    axios
        .get('/api/workplace/overview-content')
        .then((res) => {
          setData(res.data);
        })
        .finally(() => {
          setLoading(false);
        });
  };

  const loginDgiot = () => {
    setLoading(true);
    axios
        .post(
            '/iotapi/login',
            {
              username: 'dgiot_dev',
              password: 'dgiot_dev',
            },
            { headers: { 'Content-Type': 'text/plain' } }
        )
        .then((res) => {
          setData(res.data);
        })
        .finally(() => {
          setLoading(false);
        });
  };

  useEffect(() => {
    fetchData();
    loginDgiot();
  }, []);
  return (
      <Card>
        <div>
          <ToastComponent
              theme="cxd"
              key="toast"
              position={'top-right'}
              locale="zh-CN"
          />
          <AlertComponent theme="cxd" key="alert" locale="zh-CN" />
          {renderAmis(
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              bigscreen,
              {
                // props...
                // locale: 'en-US' // 请参考「多语言」的文档
                // scopeRef: (ref: any) => (amisScoped = ref)  // 功能和前面 SDK 的 amisScoped 一样
              },
              {
                // 下面三个接口必须实现
                fetcher: ({
                            url, // 接口地址
                            method, // 请求方法 get、post、put、delete
                            data, // 请求数据
                            responseType,
                            config, // 其他配置
                            headers, // 请求头
                          }: any) => {
                  config = config || {};
                  config.withCredentials = true;
                  responseType && (config.responseType = responseType);

                  if (config.cancelExecutor) {
                    config.cancelToken = new (axios as any).CancelToken(
                        config.cancelExecutor
                    );
                  }

                  config.headers = headers || {};

                  if (method !== 'post' && method !== 'put' && method !== 'patch') {
                    if (data) {
                      config.params = data;
                    }

                    return (axios as any)[method](url, config);
                  } else if (data && data instanceof FormData) {
                    config.headers = config.headers || {};
                    config.headers['Content-Type'] = 'multipart/form-data';
                  } else if (
                      data &&
                      typeof data !== 'string' &&
                      !(data instanceof Blob) &&
                      !(data instanceof ArrayBuffer)
                  ) {
                    data = JSON.stringify(data);
                    config.headers = config.headers || {};
                    config.headers['Content-Type'] = 'application/json';
                  }

                  return (axios as any)[method](url, data, config);
                },
                isCancel: (value: any) => (axios as any).isCancel(value),
                copy: (content) => {
                  copy(content);
                  toast.success('内容已复制到粘贴板');
                },

                // 后面这些接口可以不用实现

                // 默认是地址跳转
                // jumpTo: (
                //   location: string /*目标地址*/,
                //   action: any /* action对象*/
                // ) => {
                //   // 用来实现页面跳转, actionType:link、url 都会进来。
                // },

                // updateLocation: (
                //   location: string /*目标地址*/,
                //   replace: boolean /*是replace，还是push？*/
                // ) => {
                //   // 地址替换，跟 jumpTo 类似
                // },

                // isCurrentUrl: (
                //   url: string /*url地址*/,
                // ) => {
                //   // 用来判断是否目标地址当前地址
                // },

                // notify: (
                //   type: 'error' | 'success' /**/,
                //   msg: string /*提示内容*/
                // ) => {
                //   toast[type]
                //     ? toast[type](msg, type === 'error' ? '系统错误' : '系统消息')
                //     : console.warn('[Notify]', type, msg);
                // },
                // alert,
                // confirm,
                // tracker: (eventTracke) => {}
              }
          )}
        </div>
        {/*<Typography.Title heading={5}>*/}
        {/*  {t['workplace.welcomeBack']}*/}
        {/*  {userInfo.name}*/}
        {/*</Typography.Title>*/}
        {/*<Divider />*/}
        {/*<Row>*/}
        {/*  <Col flex={1}>*/}
        {/*    <StatisticItem*/}
        {/*      icon={<IconCalendar />}*/}
        {/*      title={t['workplace.totalOnlyData']}*/}
        {/*      count={data.allContents}*/}
        {/*      loading={loading}*/}
        {/*      unit={t['workplace.pecs']}*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*  <Divider type="vertical" className={styles.divider} />*/}
        {/*  <Col flex={1}>*/}
        {/*    <StatisticItem*/}
        {/*      icon={<IconContent />}*/}
        {/*      title={t['workplace.contentInMarket']}*/}
        {/*      count={data.liveContents}*/}
        {/*      loading={loading}*/}
        {/*      unit={t['workplace.pecs']}*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*  <Divider type="vertical" className={styles.divider} />*/}
        {/*  <Col flex={1}>*/}
        {/*    <StatisticItem*/}
        {/*      icon={<IconComments />}*/}
        {/*      title={t['workplace.comments']}*/}
        {/*      count={data.increaseComments}*/}
        {/*      loading={loading}*/}
        {/*      unit={t['workplace.pecs']}*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*  <Divider type="vertical" className={styles.divider} />*/}
        {/*  <Col flex={1}>*/}
        {/*    <StatisticItem*/}
        {/*      icon={<IconIncrease />}*/}
        {/*      title={t['workplace.growth']}*/}
        {/*      count={*/}
        {/*        <span>*/}
        {/*          {data.growthRate}{' '}*/}
        {/*          <IconCaretUp*/}
        {/*            style={{ fontSize: 18, color: 'rgb(var(--green-6))' }}*/}
        {/*          />*/}
        {/*        </span>*/}
        {/*      }*/}
        {/*      loading={loading}*/}
        {/*    />*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        {/*<Divider />*/}
        {/*<div>*/}
        {/*  <div className={styles.ctw}>*/}
        {/*    <Typography.Paragraph*/}
        {/*      className={styles['chart-title']}*/}
        {/*      style={{ marginBottom: 0 }}*/}
        {/*    >*/}
        {/*      {t['workplace.contentData']}*/}
        {/*      <span className={styles['chart-sub-title']}>*/}
        {/*        ({t['workplace.1year']})*/}
        {/*      </span>*/}
        {/*    </Typography.Paragraph>*/}
        {/*    <Link>{t['workplace.seeMore']}</Link>*/}
        {/*  </div>*/}
        {/*  <OverviewAreaLine data={data.chartData} loading={loading} />*/}
        {/*</div>*/}
      </Card>
  );
}

export default Overview;