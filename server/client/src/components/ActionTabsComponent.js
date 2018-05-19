import React from "react";

import { Tab, Tabs } from "@blueprintjs/core";
import GuestPage from "./GuestPage";

export default () => {
  return (
    <div style={{ float: "right" }}>
      <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId="rx">
        <Tab id="ng" title="Client" panel={<GuestPage />} />
        <Tab id="mb" title="Ember" />
        <Tab id="rx" title="React" />
        <Tab id="bb" disabled title="Backbone" />
        <Tabs.Expander />
        <input className="pt-input" type="text" placeholder="Search..." />
      </Tabs>
    </div>
  );
};
