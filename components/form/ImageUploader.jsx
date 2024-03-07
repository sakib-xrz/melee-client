"use client";

import { UploadCloud } from "lucide-react";

export default function ImageUploader({ formik, id, name }) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue(name, file);
  };

  return (
    <div className="flex flex-col gap-1 md:flex-row w-full">
      <div className="flex items-center w-full h-full">
        <label className="flex flex-col items-center justify-center w-full h-full p-6 border border-dashed rounded-lg cursor-pointer border-border">
          <div className="flex flex-col items-center justify-center w-full">
            <UploadCloud className="w-10 h-10 p-2 rounded-lg bg-primary-50 text-primary-600" />
            <p className="font-semibold text-center cursor-pointer text-primary-600">
              Click here to upload
            </p>
            <p className="text-sm text-center text-white cursor-pointer">
              Supported file JPG, JPEG, PNG
            </p>
            <div className="space-y-1">
              <input
                id={id}
                name={name}
                accept="image/*"
                type="file"
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
