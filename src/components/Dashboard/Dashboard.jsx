import React, { useCallback, useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../context/GlobalState";
import Input from "./Input/Input";
import Table from "./Table/Table";
import "./Dashboard.scss";
import Title from "../Title/Title";
import switchSort from "../../Helpers/switchSort";

const Dashboard = () => {
  const { error, sites, tests, getSites, getTests } = useContext(GlobalContext);
  const [inputValue, setValue] = useState("");
  const [filtered, setFilteredItems] = useState(tests);

  const onChangeInput = useCallback(
    (value) => {
      if (filtered) {
        setFilteredItems(
          tests.filter(
            (item) => item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0
          )
        );
        setValue(value);
      }
    },
    [filtered, tests]
  );

  const sortData = (type, toSort) => () => {
    if (filtered) {
      const cloneDeep = (tests) => {
        const arr = [];
        tests.forEach((item, index) => (arr[index] = { ...item }));
        return arr;
      };
      const cloneDataTests = cloneDeep(tests);
      switchSort(type, setFilteredItems, cloneDataTests, toSort);
    }
  };

  const resetInput = useCallback(() => {
    setFilteredItems(tests);
    setValue("");
  }, [tests]);

  useEffect(() => {
    if (tests) {
      setFilteredItems(tests);
    } else {
      getSites();
      getTests();
    }
  }, [tests]);

  if (!(tests && sites) || !filtered) {
    return (
      <>
        <Title title={"Dashboard"} />
        <p>loading....</p>
      </>
    );
  }

  if (error) {
    return "error";
  }
  return (
    <React.Fragment>
      <Title title={"Dashboard"} />
      <Input
        countTests={filtered.length}
        inputValue={inputValue}
        onChangeInput={onChangeInput}
        resetInput={resetInput}
      />
      <Table
        tableData={filtered}
        sitesData={sites}
        resetInput={resetInput}
        sortData={sortData}
      />
    </React.Fragment>
  );
};

export default Dashboard;
