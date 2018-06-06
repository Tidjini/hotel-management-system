import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchTypeServices,
  updateTypeService,
  deleteTypeService,
  addTypeService
} from "./../../actions";
import { Table, Form, Input, InputNumber, Popconfirm, Button } from "antd";
import {
  columns,
  fields
} from "./../../ViewModels/configurations/typeServiceHelper";
import { ActionsColumn } from "./../common/ActionsColumn";
import ConfigurationForm from "./ConfigurationForm";

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

class TypeService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingKey: "",
      actionsDisplayed: false,
      addFormVisible: false
    };
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
    this.setState({ editingKey: key });
  }
  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      console.log(row);
      const TypeServiceUpdated = {
        _id: key,
        ...row
      };
      this.props.updateTypeService(TypeServiceUpdated);
      this.props.fetchTypeServices();
    });
    this.setState({ editingKey: "" });
  }
  cancel = () => {
    this.setState({ editingKey: "" });
  };

  remove(key) {
    this.props.deleteTypeService(key);
    this.props.fetchTypeServices();
  }

  handleAdd = () => {
    this.setState({
      addFormVisible: true
    });
  };
  handleAddData = values => {
    this.props.addTypeService(values);
    this.props.fetchTypeServices();
    this.setState({
      addFormVisible: false
    });
  };
  closeForm = () => {
    this.setState({
      addFormVisible: false
    });
  };
  componentWillMount() {
    this.props.fetchTypeServices();
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
          inputType: col.dataIndex === "Service" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });
    return (
      <div>
        <ConfigurationForm
          key="newTypeService"
          visible={this.state.addFormVisible}
          title="Ajouter un nouveau Type de Service"
          fields={fields}
          addFormData={this.handleAddData.bind(this)}
          closeForm={this.closeForm.bind(this)}
        />
        <Button
          onClick={this.handleAdd.bind(this)}
          style={{ marginBottom: 10 }}
        >
          Ajouter un nouveau type de Service
        </Button>
        <Table
          components={components}
          bordered
          size="middle"
          dataSource={this.props.typeServices}
          columns={cols}
          rowClassName="editable-row"
          pagination={{ pageSize: 10 }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { typeServices } = state.typeServicesData;
  return {
    typeServices
  };
};

export default connect(
  mapStateToProps,
  { fetchTypeServices, updateTypeService, deleteTypeService, addTypeService }
)(TypeService);
