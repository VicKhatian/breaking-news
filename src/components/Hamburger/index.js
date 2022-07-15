import React from "react";
import { Button, Dropdown, Menu, Space } from "antd";
import "antd/dist/antd.css";

function Hamburger() {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <div onClick={() => {}}>Breaking News</div>,
        },
        {
          key: "2",
          label: <div onClick={() => {}}>World</div>,
        },
        {
          key: "3",
          label: <div onClick={() => {}}>Nation</div>,
        },
        {
          key: "4",
          label: <div onClick={() => {}}>Business</div>,
        },
        {
          key: "5",
          label: <div onClick={() => {}}>Technology</div>,
        },
        {
          key: "6",
          label: <div onClick={() => {}}>Entertainment</div>,
        },
        {
          key: "7",
          label: <div onClick={() => {}}>Science</div>,
        },
        {
          key: "8",
          label: <div onClick={() => {}}>Health</div>,
        },
        {
          key: "9",
          label: <div onClick={() => {}}>Sports</div>,
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu} placement="bottom">
      <Button>bottom</Button>
    </Dropdown>
  );
}

export default Hamburger;
