import React, { Component } from 'react'
import { message, Button, Modal } from 'antd'
import './RmButton.css'

const success = function () {
  localStorage.words = ""
  message.success('清空工作已完成');
};

const confirm = Modal.confirm;

function showConfirm() {
  confirm({
    title: '确认清空?',
    content: '会清空所有单词，并且无法复原',
    onOk() { success() },
    onCancel() {},
  });
}

class RmButton extends Component{
  render() {
    return (
      <Button className="RmButton" onClick={showConfirm}>清空</Button>
    )
  }
}

export default RmButton