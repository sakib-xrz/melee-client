import dynamic from "next/dynamic";

const DynamicQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function TextEditorFields({ formik }) {
  return (
    <>
      <div className="flex w-full flex-col gap-4 xl:flex-row">
        <div className="w-full space-y-2 xl:w-1/2">
          <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
            Details
          </p>
          <div>
            <DynamicQuill
              placeholder=""
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  ["link", "image", "video"],
                  ["clean"],
                ],
                clipboard: {
                  matchVisual: false,
                },
              }}
              theme="snow"
              value={formik.values.details}
              onChange={(value) => formik.setFieldValue("details", value)}
            />
          </div>
        </div>

        <div className="w-full space-y-2 xl:w-1/2">
          <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
            Sizing
          </p>
          <div>
            <DynamicQuill
              placeholder=""
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  ["link", "image", "video"],
                  ["clean"],
                ],
                clipboard: {
                  matchVisual: false,
                },
              }}
              theme="snow"
              value={formik.values.sizing}
              onChange={(value) => formik.setFieldValue("sizing", value)}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 xl:flex-row">
        <div className="w-full space-y-2 xl:w-1/2">
          <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
            Care
          </p>
          <div>
            <DynamicQuill
              placeholder=""
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  ["link", "image", "video"],
                  ["clean"],
                ],
                clipboard: {
                  matchVisual: false,
                },
              }}
              theme="snow"
              value={formik.values.care}
              onChange={(value) => formik.setFieldValue("care", value)}
            />
          </div>
        </div>

        <div className="w-full space-y-2 xl:w-1/2">
          <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
            Delivery and Returns
          </p>
          <div>
            <DynamicQuill
              placeholder=""
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  ["link", "image", "video"],
                  ["clean"],
                ],
                clipboard: {
                  matchVisual: false,
                },
              }}
              theme="snow"
              value={formik.values.delivery_and_returns}
              onChange={(value) =>
                formik.setFieldValue("delivery_and_returns", value)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
