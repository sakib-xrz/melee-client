function SizeOptions({
  stock_size,
  selectedSize,
  setSelectedSize,
  setErrorMessages,
}) {
  const sizes = stock_size.map((item) => item.size);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    setErrorMessages("");
  };

  return (
    <div className="grid grid-cols-5 2xl:grid-cols-10 gap-2">
      {sizes.map((size) => (
        <label
          key={size}
          className={`border rounded-sm text-center py-3 text-sm font-medium cursor-pointer ${
            selectedSize === size
              ? "bg-white text-background"
              : "hover:bg-accent"
          }`}
        >
          <input
            type="radio"
            name="size"
            value={size}
            className="hidden"
            onChange={handleSizeChange}
          />
          {size}
        </label>
      ))}
    </div>
  );
}

export default SizeOptions;
