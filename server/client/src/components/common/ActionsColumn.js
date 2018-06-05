import React from "react";
import { Button } from "antd";

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
          <a onClick={() => cancel(record.key)} style={{ marginLeft: 8 }}>
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

export { ActionsColumn };
