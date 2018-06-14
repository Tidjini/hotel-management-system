import React from "react";
import { Form, Row, Col, Input, Button, Icon, Modal, Select, Tabs } from "antd";

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

class ViewForm extends React.Component {
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
        <Col span={pane.colspan} tab={pane.name} key={index}>
          <h3>{pane.name}</h3>
          <table style={{}}>
            <tbody>
              <tr>{this.getColumns(pane.columns)}</tr>
            </tbody>
          </table>
        </Col>
      );
    });

    return children;
  }

  // To generate mock Form.Item

  getColumns(colums) {
    const children = [];
    colums.forEach((column, index) => {
      children.push(
        <td key={index} valign="top">
          <table style={{ marginLeft: "30px" }}>
            <tbody>{this.getFields(column.fields)}</tbody>
          </table>
        </td>
      );
    });

    return children;
  }

  getFields(fields) {
    const { getFieldDecorator } = this.props.form;
    const children = [];
    fields.forEach((element, index) => {
      children.push(
        <tr key={index}>
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
      const value = this.props.data[element.field];
      //this.props.form.setFieldsValue(this.props.data);
    });

    // this.props.form.setFieldsValue({
    //   Code: this.props.data["Code"]
    // });
    //this.props.form.setFieldsValue(this.props.data);

    return children;
  }

  getInputType(element) {
    const value = this.props.data[element.field];
    console.log(value);
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
  state = {
    viewData: undefined
  };

  componentDidMount() {
    this.setState({ viewData: this.props.data });
    // console.log(this.props.data);
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
          onSubmit={this.handleAdd}
        >
          <Row>{this.getPanes()}</Row>
          {/* <Tabs>{this.getPanes()}</Tabs> */}
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

export default Form.create()(ViewForm);
