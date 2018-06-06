import React from "react";
import { Form, Row, Col, Input, Button, Icon, Modal, Select } from "antd";
const FormItem = Form.Item;
const Option = Select.Option;

class ConfigurationForm extends React.Component {
  state = {
    expand: false
  };

  handleAdd = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) return;
      else {
        console.log("Received values of form: ", values);

        this.props.addFormData(values);
        this.handleReset();
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };
  handleCancel = () => {
    this.handleReset();
    this.props.closeForm();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  // To generate mock Form.Item
  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const fields = this.props.fields;
    const children = [];

    fields.forEach(element => {
      children.push(
        <FormItem label={element.label} key={element.field}>
          {getFieldDecorator(element.field, {
            rules: [
              {
                required: element.required,
                message: "Champs requis"
              }
            ]
          })(this.getInputType(element))}
        </FormItem>
      );
    });
    return children;
  }

  getInputType(element) {
    switch (element.inputType) {
      case "normal":
        return <Input placeholder={element.label} />;
        break;
      case "selector":
        return (
          <Select>
            {element.data.map((d, index) => (
              <Option key={index} value={index}>
                {d}
              </Option>
            ))}
          </Select>
        );
        break;
      default:
        return <Input placeholder={element.label} />;
        break;
    }
  }

  render() {
    return (
      <Modal
        title={this.props.title}
        visible={this.props.visible}
        onOk={this.handleAdd}
        onCancel={this.handleCancel}
        okText="Ajouter"
        cancelText="Retour"
      >
        <Form
          style={{
            padding: "24px",
            background: "#fbfbfb",
            border: "1px solid #d9d9d9",
            borderRadius: " 6px"
          }}
        >
          {this.getFields()}
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(ConfigurationForm);
