import React from "react";
import {
  AnchorButton,
  Button,
  Classes,
  Dialog,
  Intent,
  Tooltip
} from "@blueprintjs/core";

export default ({ icon, title, body, isOpen, deleteAction, closeAction }) => {
  return (
    <Dialog
      icon={icon}
      onClose={closeAction}
      title={title}
      autoFocus
      canEscapeKeyClose
      canOutsideClickClose
      enforceFocus
      isOpen={isOpen}
      usePortal
    >
      <div className={Classes.DIALOG_BODY}>{body}</div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Tooltip content="This button is hooked up to close the dialog.">
            <Button onClick={closeAction}>Close</Button>
          </Tooltip>
          <AnchorButton
            intent={Intent.DANGER}
            target="_blank"
            onClick={deleteAction}
          >
            Delete
          </AnchorButton>
        </div>
      </div>
    </Dialog>
  );
};
