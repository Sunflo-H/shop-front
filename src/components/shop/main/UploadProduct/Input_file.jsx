export default function Input_file({ handleChange }) {
  return (
    <input
      className="px-4 pt-3.5 pb-3 outline-none border border-gray-300 my-1"
      type="file"
      accept="image/*"
      name="file"
      required
      onChange={handleChange}
    />
  );
}
