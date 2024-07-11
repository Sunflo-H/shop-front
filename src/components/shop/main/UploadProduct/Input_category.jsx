export default function Input_category({ category, product, setProduct }) {
  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const style1 = `px-4 py-2 border border-gary-300 cursor-pointer ${
    product?.category === category && "bg-black text-white"
  }`;
  return (
    <>
      <input
        className="hidden"
        type="radio"
        name="category"
        value={category}
        id={category}
        required
        onChange={handleCategoryChange}
      />
      <label className={style1} htmlFor={category}>
        {category}
      </label>
    </>
  );
}
