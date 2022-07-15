import React from "react";
import { Button, Dropdown, Menu, Space } from "antd";
import "antd/dist/antd.css";

function Hamburger({ updateQuery }) {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <div
              onClick={() => {
                updateQuery("breaking-news");
              }}
            >
              Breaking News
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div
              onClick={() => {
                updateQuery("world");
              }}
            >
              World
            </div>
          ),
        },
        {
          key: "3",
          label: (
            <div
              onClick={() => {
                updateQuery("nation");
              }}
            >
              Nation
            </div>
          ),
        },
        {
          key: "4",
          label: (
            <div
              onClick={() => {
                updateQuery("business");
              }}
            >
              Business
            </div>
          ),
        },
        {
          key: "5",
          label: (
            <div
              onClick={() => {
                updateQuery("technology");
              }}
            >
              Technology
            </div>
          ),
        },
        {
          key: "6",
          label: (
            <div
              onClick={() => {
                updateQuery("entertainment");
              }}
            >
              Entertainment
            </div>
          ),
        },
        {
          key: "7",
          label: (
            <div
              onClick={() => {
                updateQuery("science");
              }}
            >
              Science
            </div>
          ),
        },
        {
          key: "8",
          label: (
            <div
              onClick={() => {
                updateQuery("health");
              }}
            >
              Health
            </div>
          ),
        },
        {
          key: "9",
          label: (
            <div
              onClick={() => {
                updateQuery("sports");
              }}
            >
              Sports
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu} placement="bottom">
      <Button>Menu</Button>
    </Dropdown>
  );
}

export default Hamburger;
