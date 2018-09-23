import React from 'react';
import { TabBar } from 'antd-mobile';
import { FaHome } from "react-icons/fa";
import Home from '../container/Home';
import Setting from '../container/Setting';

const Tab = props => {
  return (
    <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          title="Home"
          key="Home"
          icon={<FaHome />}
          selected={props.selectedTab === 'home'}
          onPress={() => props.onPressHandler('home')}
          data-seed="logId"
        >
          <Home />
        </TabBar.Item>

        <TabBar.Item
          title="Setting"
          key="Life"
          icon={<FaHome />}
          selected={props.selectedTab === 'setting'}
          onPress={() => props.onPressHandler('setting')}
          data-seed="logId"
        >
          <Setting />
        </TabBar.Item>

        <TabBar.Item
          title="Home"
          key="Life"
          icon={
            <FaHome />
          }
        >
        </TabBar.Item>
      </TabBar>
    </div>
  );
};

export default Tab;