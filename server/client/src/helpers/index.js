export const getTabByKey = tabKey => {
  switch (tabKey) {
    case "ChambreCollection":
      return `./../chambre/${tabKey}`;
    case "ChambreView":
      return `./../chambre/${tabKey}`;
    case "home":
      return `./../home/${tabKey}`;
    default:
      return `./../home/${tabKey}`;
  }
};
