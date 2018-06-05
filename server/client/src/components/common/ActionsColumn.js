import React from "react";
import { Popconfirm } from "antd";
const EditableContext = React.createContext();

const ActionsColumn = ({
  editable,
  save,
  cancel,
  edit,
  record,
  EditableContext
}) => {
  return (
    <div>
      {editable ? (
        <span>
          {EditableContext}
          <a
            href="javascript:;"
            onClick={() => cancel(record.key)}
            style={{ marginLeft: 8 }}
          >
            Cancel
          </a>
        </span>
      ) : (
        <a onClick={() => edit(record.key)}>Edit</a>
      )}
    </div>
  );
};

{
  /* <EditableContext.Consumer>
{form => (
  <a
    href="javascript:;"
    onClick={() => save(form, record.key)}
    style={{ marginRight: 8 }}
  >
    Save
  </a>
)}
</EditableContext.Consumer> */
}

export { ActionsColumn };
