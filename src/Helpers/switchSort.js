import sortFunc from "./sortFunc";

const switchSort = (type, setFilteredItems, cloneDataTests, toSort) => {
  switch (type) {
    case "name":
      if (toSort === "DESC") {
        setFilteredItems(cloneDataTests.sort((a, b) => sortFunc(b, a, "name")));
      } else {
        setFilteredItems(cloneDataTests.sort((a, b) => sortFunc(a, b, "name")));
      }

      break;
    case "type":
      if (toSort === "DESC") {
        setFilteredItems(cloneDataTests.sort((a, b) => sortFunc(b, a, "type")));
      } else {
        setFilteredItems(cloneDataTests.sort((a, b) => sortFunc(a, b, "type")));
      }

      break;
    case "status":
      if (toSort === "DESC") {
        setFilteredItems(
          cloneDataTests.sort((a, b) => sortFunc(b, a, "status"))
        );
      } else {
        setFilteredItems(
          cloneDataTests.sort((a, b) => sortFunc(a, b, "status"))
        );
      }
      break;

    default:
      break;
  }
};

export default switchSort;
