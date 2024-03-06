"use client";

import { UploadCloud } from "lucide-react";

export default function ImageUploader({ formik, name, multiple = false }) {
  const handleImageUpload = (event) => {
    const files = event.target.files;
    console.log("reach here");
    if (multiple) {
      const fileUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      formik.setFieldValue(name, files);
      formik.setFieldValue(`view_${name}`, fileUrls);
    } else {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      formik.setFieldValue(name, file);
      formik.setFieldValue(`view_${name}`, fileUrl);
    }
  };

  return (
    <div className="flex flex-col w-full gap-1 md:flex-row">
      <div className="flex items-center w-full h-full">
        <label className="flex flex-col items-center justify-center w-full h-full p-6 border border-dashed rounded-lg cursor-pointer border-border">
          <div className="flex flex-col items-center justify-center">
            <UploadCloud className="w-10 h-10 p-2 rounded-lg bg-primary-50 text-primary-600" />
            <p className="text-sm font-semibold text-center cursor-pointer text-primary-600">
              Click here to upload
            </p>
            <p className="text-sm font-medium text-center text-white cursor-pointer">
              Supported file JPG, JPEG, PNG
            </p>
            <div className="space-y-1">
              <input
                accept="image/*"
                type="file"
                multiple={multiple}
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
