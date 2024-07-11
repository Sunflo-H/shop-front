export default function Input_size({ size, product, setProduct }) {
  const handleSizeChange = (e) => {
    const { name, value } = e.target;
    const { size } = product;
    const s = `${size}, value`;
    // setProduct((prev) => ({ ...prev, [name]: value }));
    /**
     * 기존 데이터는
     * "S,M,L,XL" 이런식으로 전달됐어
     * 이제 배열 형태로 전달
     */
  };
  return (
    <>
      <input
        className="hidden"
        type="checkbox"
        name="size"
        value={size}
        id={size}
        required
        onChange={handleSizeChange}
      />
      <label
        className={`px-4 py-2 border border-gary-300 cursor-pointer `}
        htmlFor={size}
      >
        {size}
      </label>
    </>
  );
}
