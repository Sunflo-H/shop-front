import React from "react";

export default function DataListHeaderItem({ item }) {
  const { value, width } = item;
  return <div className={`${width} text-blue-900 uppercase`}>{value}</div>;
}
