import React, { Component } from 'react';
import { NavBar, WingBlank, WhiteSpace, InputItem } from 'antd-mobile';
import { FaHome } from "react-icons/fa";
import { translate } from 'react-i18next';

class ListImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <NavBar
          mode="light"
          leftContent={[
            <div
              style={{
                width: '20px',
                height: '20px',
                marginRight: '5px',
              }}
            />,
            <div
              style={{
                paddingTop: '10px'
              }}
            >
            </div>
          ]}
        />
        <WhiteSpace size="lg" />
        <WingBlank>
          <InputItem
            type="money"
            value="000"
            clear
            editable={false}
            extra="$"
          >
          </InputItem>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md" />
      </div>
    );
  }
}
export default translate('Common')(ListImage);