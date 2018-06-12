import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchClients,
  updateClient,
  deleteClient,
  addTab
} from "./../../actions";
import { Table, Form, Input, InputNumber, Popconfirm, Button } from "antd";
import { columns } from "./../../ViewModels/clients/ClientViewModel";
import { ActionsColumn } from "./../common/ActionsColumn";

const FormItem = Form.Item;

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends Component {
  getInput = () => {
    if (this.props.inputType === "number") {
      return <InputNumber />;
    }
    return <Input />;
  };
  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {form => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: `Please Input ${title}!`
                      }
                    ],
                    initialValue: record[dataIndex]
                  })(this.getInput())}
                </FormItem>
              ) : (
                restProps.children
              )}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class ClientCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editingKey: "", actionsDisplayed: false };
    const actionsColumn = {
      title: "Action",
      key: "action",
      render: (text, record) => {
        const editable = this.isEditing(record);
        return (
          <ActionsColumn
            editable={editable}
            record={record}
            cancel={this.cancel.bind(this)}
            edit={this.edit.bind(this)}
            save={this.save.bind(this)}
            removeContext={
              <EditableContext.Consumer>
                {form => (
                  <Popconfirm
                    title="Vous est sure de vouloir supprimer cette element?"
                    onConfirm={() => this.remove(record.key)}
                  >
                    <Button
                      type="danger"
                      style={{ marginLeft: 8 }}
                      size="small"
                    >
                      delete
                    </Button>
                  </Popconfirm>
                )}
              </EditableContext.Consumer>
            }
            EditableContext={
              <EditableContext.Consumer>
                {form => (
                  <Popconfirm
                    title="Vous est sure de ces changements?"
                    onConfirm={() => this.save(form, record.key)}
                  >
                    <a>Save</a>
                  </Popconfirm>
                )}
              </EditableContext.Consumer>
            }
          />
        );
      }
    };

    const actionIndex = columns.findIndex(col => col["key"] === "action");

    if (actionIndex > -1) {
      columns.splice(actionIndex, 1);
    }
    columns.push(actionsColumn);
  }
  isEditing = record => {
    return record.key === this.state.editingKey;
  };

  edit(key) {
    this.props.addTab("ClientView-" + key);
    //this.setState({ editingKey: key });
  }
  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }

      const clientUpdated = {
        _id: key,
        ...row
      };
      this.props.updateClient(clientUpdated);
      this.props.fetchClients();
    });
    this.setState({ editingKey: "" });
  }
  cancel = () => {
    this.setState({ editingKey: "" });
  };

  remove(key) {
    this.props.deleteClient(key);
    this.props.fetchClients();
  }

  handleAdd = () => {
    this.props.addTab("ClientView-New");
  };
  componentWillMount() {
    this.props.fetchClients();

    console.log(this.props.clients);
  }
  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };

    const cols = columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType:
            col.dataIndex === "Categorie" || col.dataIndex === "ListNoir"
              ? "number"
              : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });
    return (
      <div>
        <Button
          onClick={this.handleAdd.bind(this)}
          style={{ marginBottom: 10 }}
        >
          Ajouter une nouvelle Client
        </Button>
        <Table
          components={components}
          bordered
          size="middle"
          dataSource={this.props.clients}
          columns={cols}
          rowClassName="editable-row"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { clients } = state.clientData;
  return {
    clients
  };
};

export default connect(
  mapStateToProps,
  { fetchClients, updateClient, deleteClient, addTab }
)(ClientCollection);
