import React from 'react';
import { Button, Divider, Form, Input } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const RegisterPage = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      padding: '50px',
    }}
    validateMessages={validateMessages}
  >
    <h3    style={{textAlign: 'center',}}>Đăng ký mới người dùng</h3>
    <Divider/>
    <Form.Item
      name={['user', 'fullName']}
      label="Full Name"
      style={{
        maxWidth: 600,
        margin: '10px auto',
      }}
      rules={[
        {
          required: true,
          message: 'Please input your fullName!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name={['user', 'email']}
      label="Email"
      style={{
        maxWidth: 600,
        margin: '10px auto',
      }}
      rules={[
        {
          type: 'email',
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

     <Form.Item
      label="Password"
      name="password"
      style={{
        maxWidth: 600,
        margin: '10px auto',
      }}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

     <Form.Item
      label="Phone"
      name="phone"
       style={{
        maxWidth: 600,
        margin: '10px auto',
      }}
      rules={[
        {
          required: true,
          message: 'Please input your phone!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
      style={{maxWidth: 600,margin: '10px auto',}}
    >
      <Button type="primary" htmlType="submit"    >
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default RegisterPage;