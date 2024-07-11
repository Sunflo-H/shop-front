import React from "react";

export default function User({ user: { displayName, photoURL }, isSide }) {
  if (isSide) {
    return (
      <div className="h-20 w-40 bg-red-500">
        <span className="shrink-0">{displayName}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={photoURL}
        alt={displayName}
        referrerPolicy="no-referrer"
      />
      <span className="text-lg">{displayName}</span>
    </div>
  );
}
