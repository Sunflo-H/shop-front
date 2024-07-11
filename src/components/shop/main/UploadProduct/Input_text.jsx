export default function Input_text({ attribute, value, handleChange }) {
  return (
    <input
      className="p-4 outline-none border border-gray-300 my-1"
      type="text"
      name={attribute}
      value={value}
      placeholder={attribute}
      required
      onChange={handleChange}
    />
  );
}
