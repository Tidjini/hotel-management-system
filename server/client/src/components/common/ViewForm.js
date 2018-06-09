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
          <table style={{}}>
            <tbody>{this.getFields(pane.fields)}</tbody>
          </table>
        </TabPane>
      );
    });

    return children;
  }

  // To generate mock Form.Item
  getFields(fields) {
    const { getFieldDecorator } = this.props.form;
    const children = [];
    fields.forEach((element, index) => {
      children.push(
        <tr>
          <td style={{ fontWeight: 600, fontSize: 12 }}>{element.label}</td>
          <td style={{ display: "flex", height: "40px" }}>
            <FormItem key={element.field}>
              {getFieldDecorator(element.field, {
                rules: [
                  {
                    required: element.required,
                    message: "Champs requis"
                  }
                ]
              })(this.getInputType(element))}
            </FormItem>
          </td>
        </tr>
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
          <Select style={{ minWidth: 230 }}>
            {element.data.map((d, index) => (
              <Option key={index} value={index}>
                {d}
              </Option>
            ))}
          </Select>
        );
        break;
      default:
        return <Input style={{ minWidth: 100 }} placeholder={element.label} />;
        break;
    }
  }

  render() {
    return (
      <div>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
            </tr>
          </tbody>
        </table>
        <Form
          style={{
            padding: "24px",
            background: "#fbfbfb",
            border: "1px solid #d9d9d9",
            borderRadius: " 6px"
          }}
          onSubmit={this.handleAdd}
        >
          <Tabs>{this.getPanes()}</Tabs>
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
              </Button>
              <Button
                style={{ marginLeft: 8 }}
                type="primary"
                htmlType="submit"
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Form.create()(ConfigurationForm);
