import React, { Component } from 'react';
import { FaHome } from "react-icons/fa";
import { NavBar, WingBlank, WhiteSpace, Picker, List, Button, InputItem } from 'antd-mobile';
import { translate } from 'react-i18next';
import i18next from 'i18next';

class Setting extends Component {
   state = {
    pickerValue: [],
    asyncValue: [],
    sValue: "",
    visible: false
  };

  setLanguage(lang) {
    i18next.init({
      lng: lang[0]
    });
    localStorage.setItem('locale', lang[0]);
  }

  constructor(props) {
    super(props);
    let locale = localStorage.getItem('locale');
    this.state.sValue = locale ? [locale] : ["en"];
  }

  logout() {
  }
   render() {
    const lang = [
      {
        label: 'English',
        value: 'en'
      },
      {
        label: 'Việt Nam',
        value: 'vi'
      }
    ];
    const { t } = this.props;
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <NavBar
          mode="light"
          leftContent={[
            <div/>,
            <div
              style={{
                paddingTop: '10px'
              }}
            >
              {' '}
              {t('view.setting.title')}{' '}
            </div>
          ]}
        />
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <Picker
            data={lang}
            cols={1}
            okText={t('view.setting.done')}
            dismissText={t('view.setting.cancel')}
            value={this.state.sValue}
            extra={this.state.sValue}
            onChange={v => this.setState({ sValue: v })}
            onOk={v => this.setLanguage(v)}
          >
            <List.Item arrow="horizontal">
              {t('view.setting.language')}
            </List.Item>
          </Picker>
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <Button onClick={this.logout}>{t("view.layout.logout")}</Button>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    );
  }
}

export default translate('Common')(Setting);