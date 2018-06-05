import React, { Component } from "react";
import { Form, Row, Col, Input, Button, Card } from "antd";

import { connect } from "react-redux";
import { addChambre, fetchChambres } from "./../../actions";
import ConfirmationModal from "./../common/ConfirmationModal";

const FormItem = Form.Item;

class ChambreView extends Component {
  state = {
    id: this.props.id || "",
    num: this.props.num || "",
    type: this.props.type || "",
    vue: this.props.vue || "",
    etat: this.props.etat || "",
    nombreLit: this.props.nombreLit || 1,
    price: this.props.price || 0,
    showConfirmation: false,
    chambre: {}
  };

  handleAddChambre = e => {
    e.preventDefault();
    // this.props.form.setFieldsValue({ });

    this.props.form.validateFields((err, values) => {
      //console.log("Received values of form: ", values);
      if (err) {
        return;
      }
      const chambre = {
        ...values,
        etat: Number(values.etat),
        nombreLit: Number(values.nombreLit),
        price: Number(values.price)
      };

      this.setState({
        showConfirmation: true,
        chambre
      });

      //this.props.addChambre(chambre);
      //this.props.fetchChambres();
    });
  };

  handleAdd_Chambre = () => {
    this.props.addChambre(this.state.chambre);
    this.props.fetchChambres();
    this.handleReset();
  };
  handleCancel = () => {
    this.setState({
      showConfirmation: false
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
      <div>
        <ConfirmationModal
          visible={this.state.showConfirmation}
          content="Voulez vous ajouter cette chambre aux collection des chambre ?"
          onConfirm={this.handleAdd_Chambre.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        />
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
              <Button type="primary" onClick={this.handleAddChambre}>
                Ajouter
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Réinitializer
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
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
export default connect(
  null,
  { addChambre, fetchChambres }
)(ChambreForm);

// export default ChambreForm;
