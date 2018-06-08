import React from "react";
import { Form, Row, Col, Input, Button, Icon, Modal, Select, Tabs } from "antd";

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

class ConfigurationForm extends React.Component {
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

  // To generate mock Form.Item
  getPanes() {
    const { getFieldDecorator } = this.props.form;
    const panes = this.props.panes;
    const children = [];
    panes.forEach((pane, index) => {
      children.push(
        <TabPane tab={pane.name} key={index}>
          {this.getFields(pane.fields)}
        </TabPane>
      );
    });

    return children;
  }

  // To generate mock Form.Item
  getFields(fields) {
    const { getFieldDecorator } = this.props.form;
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
      <div>
        <Form
          style={{
            padding: "24px",
            background: "#fbfbfb",
            border: "1px solid #d9d9d9",
            borderRadius: " 6px"
          }}
        >
          <Tabs>{this.getPanes()}</Tabs>
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Form.create()(ConfigurationForm);
