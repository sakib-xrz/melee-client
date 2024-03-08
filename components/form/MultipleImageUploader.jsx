/* eslint-disable @next/next/no-img-element */
"use client";

import { UploadCloud, X } from "lucide-react";
import Image from "next/image";

export default function MultipleImageUploader({ formik, id, name }) {
  const handleImageChange = (event) => {
    const files = event.target.files;
    const updatedImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      updatedImages.push({
        file: file,
      });
    }

    formik.setFieldValue(name, [...formik.values[name], ...updatedImages]);
  };

  const handleDeleteImage = (index) => {
    const filteredImages = formik.values[name].filter((_, i) => i !== index);
    formik.setFieldValue(name, filteredImages);
  };

  return (
    <div className="flex items-center flex-wrap gap-2 w-full">
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
                  className="hidden"
                  accept="image/*"
                  type="file"
                  multiple
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </label>
        </div>
      </div>

      {formik.values[name].length > 0 && (
        <div className="flex gap-3 items-center flex-wrap">
          {formik.values[name].map((image, index) => (
            <div key={index}>
              <div className="rounded-md w-32 h-32 relative">
                <Image
                  className="w-full h-full object-cover rounded-md"
                  alt={`Uploaded ${index}`}
                  width={500}
                  height={500}
                  src={URL.createObjectURL(image.file)}
                />
                <div>
                  <X
                    onClick={() => handleDeleteImage(index)}
                    className="w-4 h-4 bg-red-500 rounded-full absolute right-1 top-1 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
