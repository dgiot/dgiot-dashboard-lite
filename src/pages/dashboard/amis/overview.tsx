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
          bigscreen,
          {
            // props...
            // locale: 'en-US' // ?????????????????????????????????
            // scopeRef: (ref: any) => (amisScoped = ref)  // ??????????????? SDK ??? amisScoped ??????
          },
          {
            // ??????????????????????????????
            fetcher: ({
              url, // ????????????
              method, // ???????????? get???post???put???delete
              data, // ????????????
              responseType,
              config, // ????????????
              headers, // ?????????
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
              toast.success('???????????????????????????');
            },

            // ????????????????????????????????????

            // ?????????????????????
            // jumpTo: (
            //   location: string /*????????????*/,
            //   action: any /* action??????*/
            // ) => {
            //   // ????????????????????????, actionType:link???url ???????????????
            // },

            // updateLocation: (
            //   location: string /*????????????*/,
            //   replace: boolean /*???replace?????????push???*/
            // ) => {
            //   // ?????????????????? jumpTo ??????
            // },

            // isCurrentUrl: (
            //   url: string /*url??????*/,
            // ) => {
            //   // ??????????????????????????????????????????
            // },

            // notify: (
            //   type: 'error' | 'success' /**/,
            //   msg: string /*????????????*/
            // ) => {
            //   toast[type]
            //     ? toast[type](msg, type === 'error' ? '????????????' : '????????????')
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
