import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const StyledForm = styled(Form)`
  background-color: while;
  width: 440px;
  height: 500px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  .form-header {
    font-size: 40px;
    text-align: center;
    color: #171a1fff;
    font-family: Epilogue;
  }
  .input {
    height: 40px;
  }
  .login-form-button {
    width: 359px;
    height: 40px;
    border-radius: 4px;
    background: #00bdd6ff;
  }
  .signup {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .login-form-forgot {
    margin-left: 43%;
    color: #00bdd6ff;
  }
  .color {
    margin-left: 5px;
    color: #00bdd6ff;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #00bdd6ff;
    border-color: #00bdd6ff;
  }
  .middel {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logooo {
    position: absolute;
    top: 32px;
    left: 32px;
  }
`;

const Login = () => {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);

  const OnFinish = (values: any) => {
    // try {
    //   console.log("Received values of form: ", values);
    //   setLoading(true);
    //   // call api -> output: token
    //   // localStorage.setItem("token", token);
    //   // localStorage.getItem("token");

    //   setTimeout(() => {
    //     navigator("/home");
    //     setLoading(false);
    //   }, 500);
    //   // thành công
    // } catch (error) {
    //   // xuất lỗi
    // }
    const fetchData = async () => {
      try {
        const data = {
          username: "user2",
          password: "123456",
        };
        const response = await axios.post(
          "http://localhost:8888/auth/login",
          data
        );

        console.log(response.data);
        setTimeout(() => {
          navigator("/home");
          setLoading(false);
        }, 500);
        // thành công
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  };

  return (
    <Spin spinning={loading}>
      <StyledForm
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={OnFinish}
      >
        <h1 className="form-header">Sign in</h1>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            className="input"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            className="input"
          />
        </Form.Item>
        <div>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a href="" className="login-form-forgot">
              Forgot password
            </a>
          </Form.Item>
        </div>

        <Form.Item className="middel">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign in
          </Button>
          <div className="signup">
            Doest't have an account ?
            <Link to="/signUp" className="color">
              {" "}
              Sign Up!
            </Link>
          </div>
        </Form.Item>
      </StyledForm>
    </Spin>
  );
};

export default Login;