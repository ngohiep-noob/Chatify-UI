import React from "react";
import {
  Avatar,
  Button,
  Col,
  Layout,
  Menu,
  MenuProps,
  Row,
  Typography,
} from "antd";
import Logo from "./Logo";
import UserItem from "./FriendInfo";
import {
  LogoutOutlined,
  TeamOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Sider } = Layout;
const { Text } = Typography;

const StyledRow = styled(Row)`
  .avatar-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .details-col {
    height: 60%;
  }

  .ctrl-btn {
    margin: 0 3px;
  }
  .gmail{
    font-size:15px;
  }
  .name{
    font-size:18px;
    font-family: Epilogue;

  }
  .hrrr{
   
  }
`;

const siderItems: MenuProps["items"] = [
  {
    key: "chat-group",
    icon: <TeamOutlined />,
    label: "Chat Group",
    children: [
      <UserItem />,
      <UserItem />,
      <UserItem />,
      <UserItem />,
      <UserItem />,
      <UserItem />,
      <UserItem />,
      <UserItem />,
      <UserItem />,
      <UserItem />,
    ].map((name, i) => ({ key: "gr-" + i + 1, label: name })),
  },
  {
    key: "chat-friends",
    icon: <UserOutlined />,
    label: "Friends",
    children: ["friend-1", "friend-2", "friend-3", "friend-4"].map(
      (name, i) => ({ key: "fr-" + i + 1, label: name })
    ),
  },
];

export default function SideBar() {
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      width={430}
      theme="light"
    >
      <Logo />
      <hr style={{ width: "55%", marginBottom: "10px" }}></hr>
      <StyledRow justify="center" align="middle">
        <Col span={4} className="avatar-col">
          <Avatar
            size={60}
            src="https://i.pinimg.com/originals/e1/ed/eb/e1edeb6d3f086b74b0f33be6e665c10f.jpg"
          ></Avatar>
        </Col>
        <Col span={14} className="details-col">
          <Text strong className="name">Nguyễn Chánh Nghĩa</Text> <br />
          <Text type="secondary" className="gmail">
            nguyenchanhnghia2917@gmail.com
          </Text>
        </Col>
        <Col span={6}>
          <Button type="primary" size="middle" className="ctrl-btn">
            <UserAddOutlined />
          </Button>
          <Button type="primary" size="middle" danger className="ctrl-btn">
            <LogoutOutlined />
          </Button>
        </Col>
      
      <hr
        style={{ width: "90%", marginBottom: "20px", marginTop: "10px", color:"#27AEF2 "}}
       className="hrrr"
      ></hr>
</StyledRow>
      <Menu
        className="menu"
        mode="inline"
        defaultSelectedKeys={["2"]}
        items={siderItems}
      />
      </Sider>
  );
}