import {
  Form,
  Input,
  Checkbox,
  Link,
  Button,
  Space,
} from '@arco-design/web-react';
import { FormInstance } from '@arco-design/web-react/es/Form';
import { IconLock, IconUser } from '@arco-design/web-react/icon';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import useStorage from '@/utils/useStorage';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import styles from './style/index.module.less';



import Cookies from 'js-cookie';
window.dgiotStore = Cookies;
export default function LoginForm() {
  const formRef = useRef<FormInstance>();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginParams, setLoginParams, removeLoginParams] =
    useStorage('loginParams');

  const t = useLocale(locale);

  const [rememberPassword, setRememberPassword] = useState(!!loginParams);

  /**
   * 代理成功的回调
   * @param params
   * @param storeInfo
   */
  function afterLoginSuccess(params, storeInfo) {
    // 记住密码
    if (rememberPassword) setLoginParams(JSON.stringify(params));
    else removeLoginParams();
    // 存储用户状态
    localStorage.setItem('userStatus', 'login');
    // 存储用户信息
    console.log(storeInfo);
    localStorage.setItem('userInfo', JSON.stringify(storeInfo));
    Cookies.set('userInfo', JSON.stringify(storeInfo), {
      expires: 7,
      path: '*',
    });
    // 跳转首页
    window.location.href =
      process.env.NODE_ENV !== 'development' ? '/dgiot-dashboard-next' : '/';
  }

  function login(params) {
    setErrorMessage('');
    setLoading(true);
    // if (process.env.NODE_ENV === 'development') {
      axios
        .post(
          '/iotapi/login',
          {
            username: params.userName,
            password: params.password,
          },
          { headers: { 'Content-Type': 'text/plain' } }
        )
        .then((res) => {
          const { access_token,sessionToken } = res.data;
          console.log("登录",res);
          // return 
          if (sessionToken) {
            // 记录登录状态
            localStorage.setItem('sessionToken',sessionToken)
            afterLoginSuccess(params, res.data);
          } else {
            setErrorMessage(t['login.form.login.errMsg']);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    // } else {
    //   afterLoginSuccess(params, params);
    // }
  }

  function onSubmitClick() {
    formRef.current.validate().then((values) => {
      console.log(values);
      // return ;
      
      login(values);
    });
  }

  // 读取 localStorage，设置初始值
  useEffect(() => {
    const rememberPassword = !!loginParams;
    setRememberPassword(rememberPassword);
    if (formRef.current && rememberPassword) {
      const parseParams = JSON.parse(loginParams);
      formRef.current.setFieldsValue(parseParams);
    }
  }, [loginParams]);

  return (
    <div className={styles['login-form-wrapper']}>
      <div className={styles['login-form-title']}>{t['login.form.title']}</div>
      <div className={styles['login-form-sub-title']}>
        {t['login.form.title']}
      </div>
      <div className={styles['login-form-error-msg']}>{errorMessage}</div>
      <Form
        className={styles['login-form']}
        layout="vertical"
        ref={formRef}
        initialValues={{ userName: 'dgiot_dev', password: 'dgiot_dev' }}
      >
        <Form.Item
          field="userName"
          rules={[{ required: true, message: t['login.form.userName.errMsg'] }]}
        >
          <Input
            prefix={<IconUser />}
            placeholder={t['login.form.userName.placeholder']}
            onPressEnter={onSubmitClick}
          />
        </Form.Item>
        <Form.Item
          field="password"
          rules={[{ required: true, message: t['login.form.password.errMsg'] }]}
        >
          <Input.Password
            prefix={<IconLock />}
            placeholder={t['login.form.password.placeholder']}
            onPressEnter={onSubmitClick}
          />
        </Form.Item>
        <Space size={16} direction="vertical">
          <div className={styles['login-form-password-actions']}>
            <Checkbox checked={rememberPassword} onChange={setRememberPassword}>
              {t['login.form.rememberPassword']}
            </Checkbox>
            <Link>{t['login.form.forgetPassword']}</Link>
          </div>
          <Button type="primary" long onClick={onSubmitClick} loading={loading}>
            {t['login.form.login']}
          </Button>
          <Button
            type="text"
            long
            className={styles['login-form-register-btn']}
          >
            {t['login.form.register']}
          </Button>
        </Space>
      </Form>
    </div>
  );
}
