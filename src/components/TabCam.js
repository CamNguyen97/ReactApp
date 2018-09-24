import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from '../container/Home';
import Setting from '../container/Setting';
import ListImage from '../container/ListImage';
import { FaHome, FaSlidersH, FaImage } from "react-icons/fa";
import { translate } from 'react-i18next';


class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        
      </div>
    );
  }

  render() {
    const { t } = this.props;
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title={t('view.layout.home')}
            key="Home"
            icon={<FaHome/>}
            selectedIcon={<FaHome color="rgb(51, 163, 244)"/>}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <Home />
          </TabBar.Item>
          <TabBar.Item
            icon={<FaImage/>}
            selectedIcon={<FaImage color="rgb(51, 163, 244)"/>}
            title={t('view.layout.image')}
            key="Image"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <ListImage/>
          </TabBar.Item>
          <TabBar.Item
            icon={<FaSlidersH/>}
            selectedIcon={<FaSlidersH color = 'rgb(51, 163, 244)'/>}
            title={t('view.layout.setting')}
            key="Setting"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Setting />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default translate('Common')(Tab);