import React, { Component } from "react";
import { fields } from "./../../ViewModels/chambres/ChambreViewModel";
import { Form, Row, Col, Input, Button, Icon, InputNumber, Card } from "antd";

import { connect } from "react-redux";
import { addChambre, fetchChambres } from "./../../actions";

const FormItem = Form.Item;

class ChambreView extends React.Component {
  state = {
    id: this.props.id || "",
    num: this.props.num || "",
    type: this.props.type || "",
    vue: this.props.vue || "",
    etat: this.props.etat || "",
    nombreLit: this.props.nombreLit || 1,
    nombreLit: this.props.nombreLit || 1,
    price: this.props.price || 0
  };

  handleAddChambre = e => {
    e.preventDefault();
    // this.props.form.setFieldsValue({
    //   etat: "val",
    //   nombreLit: 12,
    //   price: 12312,
    //   num: 12,
    //   type: "Type 001"
    // });
    this.props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
      const chambre = {
        ...values,
        etat: Number(values.etat),
        nombreLit: Number(values.nombreLit),
        price: Number(values.price)
      };
      console.log(chambre);
      this.props.addChambre(chambre);
      this.props.fetchChambres();
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  handleNumChange(event) {
    // console.log(event.target.value);
    this.setState({
      num: event.target.value
    });
  }
  render() {
    const { formStyle } = styles;
    const { getFieldDecorator } = this.props.form;
    return (
      <Form style={formStyle} onSubmit={this.handleAddChambre}>
        <Row>
          <Card type="inner" title="Chambre">
            <Col span={12} style={{ textAlign: "right" }}>
              <Row>
                <Col span={12} key="num">
                  <FormItem label="Numéro" style={{ display: "flex" }}>
                    {getFieldDecorator("num", {
                      rules: [
                        {
                          required: true,
                          message: `champs requis`
                        }
                      ]
                    })(<Input placeholder={"numéro"} style={{ flex: 1 }} />)}
                  </FormItem>
                </Col>
                <Col span={12} key="type">
                  <FormItem label="Type" style={{ display: "flex" }}>
                    {getFieldDecorator("type", {
                      rules: [{}]
                    })(<Input placeholder={"type"} style={{ flex: 1 }} />)}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={12} key="vue">
                  <FormItem label="Vue" style={{ display: "flex" }}>
                    {getFieldDecorator("vue", {
                      rules: [{}]
                    })(<Input placeholder={"Vue"} style={{ flex: 1 }} />)}
                  </FormItem>
                </Col>
                <Col span={12} key="etat">
                  <FormItem label="Etat" style={{ display: "flex" }}>
                    {getFieldDecorator("etat", {
                      rules: [{}]
                    })(
                      <Input
                        placeholder={"Etat"}
                        style={{ flex: 1 }}
                        type="number"
                      />
                    )}
                  </FormItem>
                </Col>
              </Row>
            </Col>

            <Col span={12} style={{ textAlign: "right" }}>
              <Row>
                <Col span={12} key="nombreLit">
                  <FormItem label="Nombre Lits" style={{ display: "flex" }}>
                    {getFieldDecorator("nombreLit", {
                      rules: [{}]
                    })(
                      <Input
                        placeholder={"Nombre de lits"}
                        style={{ flex: 1 }}
                        type="number"
                      />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={12} key="price">
                  <FormItem label="Prix" style={{ display: "flex" }}>
                    {getFieldDecorator("price", {
                      rules: [{}]
                    })(
                      <Input
                        placeholder={"Price"}
                        style={{ flex: 1 }}
                        type="number"
                      />
                    )}
                  </FormItem>
                </Col>
              </Row>
            </Col>
          </Card>
        </Row>

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

const ChambreForm = Form.create()(ChambreView);
export default connect(null, { addChambre, fetchChambres })(ChambreForm);

// export default ChambreForm;
