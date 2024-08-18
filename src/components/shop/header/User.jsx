import React from "react";

export default function User({ username, isSide }) {
  if (isSide) {
    return (
      <div className="h-20 w-40 bg-red-500">
        <span className="shrink-0">{username}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <span className="text-lg">{username}</span>
    </div>
  );
}
