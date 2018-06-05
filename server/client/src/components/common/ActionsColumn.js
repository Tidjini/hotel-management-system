import React from "react";
import { Popconfirm, Button } from "antd";
const EditableContext = React.createContext();

const ActionsColumn = ({
  editable,
  save,
  cancel,
  edit,
  removeContext,
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
        <span>
          <Button onClick={() => edit(record.key)} type="warning" size="small">
            Edit
          </Button>
          {removeContext}
        </span>
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
