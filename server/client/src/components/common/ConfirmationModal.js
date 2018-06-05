import React from "react";
import { Modal } from "antd";

export default class ConfimationModal extends React.Component {
  state = {
    ModalText: this.props.content,
    confirmLoading: false
  };

  handleOk = () => {
    this.setState({
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        confirmLoading: false
      });
      this.props.onConfirm();
      this.props.onCancel();
    }, 2000);
  };
  handleCancel = () => {
    this.props.onCancel();
  };
  render() {
    const { confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Modal
          title="Title"
          visible={this.props.visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}
