import React from "react";
import Select from "react-select";
import { formatSize } from "../../../../utils/converter";

export default function SizeSelectBox({ sizeList, selectedSize, onChange }) {
  const options = sizeList.map((size) => formatSize(size));

  const selectedOption = selectedSize ? formatSize(selectedSize) : null;

  return (
    <Select
      options={options}
      styles={customStyles}
      isSearchable={false}
      placeholder={"Select a Size"}
      onChange={(selectedOption) => onChange(selectedOption)}
      value={selectedOption}
    />
  );
}

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: "black",
    borderRadius: "0px",
    boxShadow: "none",
    paddingTop: "4px",
    paddingBottom: "4px",
    "&:hover": {
      // borderColor: "darkblue",
      cursor: "pointer",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "rgb(229 231 235)" : "white",
    // color: state.isSelected ? "white" : "black",
    color: "black",
    borderColor: "rgb(229 231 235)",
    borderWidth: "1px",
    borderTop: "0px",
    "&:hover": {
      backgroundColor: "rgb(229 231 235)",
      cursor: "pointer",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0px",
    marginTop: "0px",
    paddingTop: "0px",
    borderColor: "black",
  }),
  menuList: (provided) => ({
    ...provided,

    borderColor: "black",
    borderWidth: "1px",
    borderTop: "0px",
    padding: "0px",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "black",
    // fontWeight: "bold",
  }),
};
