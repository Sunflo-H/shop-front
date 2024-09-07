import React from "react";
import Select from "react-select";

export default function SizeSelectBox({ sizeList, currentSize, onChange }) {
  const options = sizeList.map((size) => {
    return { value: size, label: size };
  });

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: "black",
      boxShadow: "none",
      "&:hover": {
        borderColor: "darkblue",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "rgb(229 231 235)" : "white",
      // color: state.isSelected ? "white" : "black",
      color: "black",
      "&:hover": {
        backgroundColor: "rgb(229 231 235)",
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "8px",
      marginTop: "1px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black",
      // fontWeight: "bold",
    }),
  };

  return (
    <Select
      options={options}
      styles={customStyles}
      // defaultValue={defaultOption}
      placeholder={"- Select a Size"}
    />
  );
}
