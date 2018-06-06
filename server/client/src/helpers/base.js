export const moneyFormat = function(c, d, t) {
  var n = this,
    c = isNaN((c = Math.abs(c))) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    s +
    (j ? i.substr(0, j) + t : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
    (c
      ? d +
        Math.abs(n - i)
          .toFixed(c)
          .slice(2)
      : "")
  );
};

export const chambreState = [
  "Vider la chambre",
  "Nettoyage",
  "Cleaner",
  "État 4"
];
export const clientState = ["Pas Inclus", "Inclus"];
export const clientStateColor = ["#FF9F1C", "#E71D36"];

export const chambreStateColors = ["#B3E9E4", "#F6ACB5", "#FFDCAC", "#B9BFC4"];

export const familleImpCuis = ["Désactiver", "Imprimable", "Autre"];
export const familleTFam = ["Famille Corleon", "Bombino", "Cosa"];
export const typeService = [
  "Wifi",
  "Petit Coffre",
  "Envoi/Reception Fax",
  "Télévision Satélite",
  "Service de Préssing",
  "TV écran plat",
  "Climatisation",
  "Bagagerie",
  "Conciergerie "
];
export const familleImpCuisColors = ["#E71D36", "#011627", "#FF9F1C"];
