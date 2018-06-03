import React, { Component } from "react";
import { fields } from "./../../ViewModels/chambres/ChambreViewModel";
import { Form, Row, Col, Input, Button, Icon, InputNumber } from "antd";
const FormItem = Form.Item;

class ChambreView extends React.Component {
  state = {
    expand: false
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  // To generate mock Form.Item
  getFields() {
    const count = 10;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    fields.forEach(f => {
      const inputType =
        f.type == Number ? (
          <Input placeholder={`${f.label}`} style={{ flex: 1 }} />
        ) : (
          <Input placeholder={`${f.label}`} style={{ flex: 1 }} />
        );
      children.push(
        <Col span={6} key={f.field}>
          <FormItem label={`${f.label}`} style={{ display: "flex" }}>
            {getFieldDecorator(`${f.field}`, {
              rules: [
                {
                  required: f.required,
                  message: `le champs ${f.label} est requis`
                }
              ]
            })(inputType)}
          </FormItem>
        </Col>
      );
    });

    return children;
  }

  render() {
    const { formStyle } = styles;
    return (
      <Form style={formStyle} onSubmit={this.handleSearch}>
        <h1>Chambre</h1>
        <Row gutter={24}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Ajouter
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Réinitializer
            </Button>
            <Button
              type="danger"
              style={{ marginLeft: 8 }}
              onClick={this.handleReset}
            >
              Supprimer
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const styles = {
  formStyle: {
    padding: "24px",
    background: "#fbfbfb",
    border: "1px solid #d9d9d9",
    borderRadius: "6px"
  }
};

export default Form.create()(ChambreView);
