import { statusItem, typeItem } from "./ConstansData";

const MappingTable = (sites, row) => {
  let rowData = [];
  let i = 0;

  for (const key in row) {
    const obj = {};

    if (key === "siteId") {
      let str = sites[row[key]].split("//")[1];
      if (str.includes("www")) {
        str = str.split("www.")[1];
      }
      obj["val"] = str;
    } else {
      if (key === "id") {
        obj["id"] = row[key];
      } else if (key === "type") {
        obj["val"] = typeItem[row[key]];
      } else if (key === "status") {
        obj["val"] = statusItem[row[key]];
      } else {
        obj["val"] = row[key];
      }
    }

    rowData.push(obj);
    i++;
  }
  return {
    rowData,
    i,
  };
};

export default MappingTable;
