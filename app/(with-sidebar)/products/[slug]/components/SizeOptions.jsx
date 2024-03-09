import { useState } from "react";

function SizeOptions({ stock_size }) {
  const sizes = stock_size.map((item) => item.size);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    console.log(event.target.value);
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
