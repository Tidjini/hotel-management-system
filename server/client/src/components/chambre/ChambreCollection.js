import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchChambres, updateChambre } from "./../../actions";
import { Table, Form, Input, InputNumber, Popconfirm } from "antd";
import { columns } from "./../../ViewModels/chambres/ChambreViewModel";
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

class ChambreCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editingKey: "" };
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

      const chambreUpdated = {
        _id: key,
        ...row
      };
      this.props.updateChambre(chambreUpdated);
      this.props.fetchChambres();
    });
    this.setState({ editingKey: "" });
  }
  cancel = () => {
    this.setState({ editingKey: "" });
  };

  componentWillMount() {
    this.props.fetchChambres();
    console.log(this.props.chambres);
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
            col.dataIndex === "etat" ||
            col.dataIndex === "nombreLit" ||
            col.dataIndex === "price"
              ? "number"
              : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });
    return (
      <Table
        components={components}
        bordered
        size="middle"
        dataSource={this.props.chambres}
        columns={cols}
        rowClassName="editable-row"
      />
    );
  }
}

const mapStateToProps = state => {
  const { chambres } = state.chambresData;
  return {
    chambres
  };
};

export default connect(
  mapStateToProps,
  { fetchChambres, updateChambre }
)(ChambreCollection);
