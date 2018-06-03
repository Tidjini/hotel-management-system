import React, { Component } from "react";

import { Form, Row, Col, Input, Button, Icon } from "antd";
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
    const fields = [
      {
        field: "num",
        label: "Numéro",
        required: true,
        maxLength: 10,
        minLength: 1
      }
    ];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={6} key={i} style={{ display: i < count ? "block" : "none" }}>
          <FormItem label={`Field ${i}`} style={{ display: "flex" }}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: length => length <= 10 && length > 0,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
      );
    }
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
