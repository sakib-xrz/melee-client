import { Input } from "@/components/ui/input";

export default function StockFields({ formik }) {
  return (
    <>
      {" "}
      <div className="flex w-full flex-col gap-4 xl:flex-row">
        <div className="w-full space-y-2 xl:w-1/5">
          <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
            Stock (S)
          </p>
          <div>
            <Input
              className="bg-transparent"
              type="text"
              id="stock_s"
              name="stock_s"
              placeholder="Stock for small size"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stock_s}
            />
          </div>
        </div>
        <div className="w-full space-y-2 xl:w-1/5">
          <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
            Stock (M)
          </p>
          <div>
            <Input
              className="bg-transparent"
              type="text"
              id="stock_m"
              name="stock_m"
              placeholder="Stock for medium size"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stock_m}
            />
          </div>
        </div>
        <div className="w-full space-y-2 xl:w-1/5">
          <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
            Stock (L)
          </p>
          <div>
            <Input
              className="bg-transparent"
              type="text"
              id="stock_l"
              name="stock_l"
              placeholder="Stock for large size"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stock_l}
            />
          </div>
        </div>
        <div className="w-full space-y-2 xl:w-1/5">
          <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
            Stock (XL)
          </p>
          <div>
            <Input
              className="bg-transparent"
              type="text"
              id="stock_xl"
              name="stock_xl"
              placeholder="Stock for xl size"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stock_xl}
            />
          </div>
        </div>
        <div className="w-full space-y-2 xl:w-1/5">
          <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
            Stock (XXL)
          </p>
          <div>
            <Input
              className="bg-transparent"
              type="text"
              id="stock_xxl"
              name="stock_xxl"
              placeholder="Stock for xxl size"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stock_xxl}
            />
          </div>
        </div>
      </div>
    </>
  );
}
