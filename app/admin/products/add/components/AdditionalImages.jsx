import MultipleImageUploader from "@/components/form/MultipleImageUploader";

export default function AdditionalImages({ formik }) {
  return (
    <>
      <div className="space-y-2">
        <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
          Additional Images (1200*1200)
        </p>
        <div>
          <MultipleImageUploader
            formik={formik}
            id={"additional_images"}
            name={"additional_images"}
          />
        </div>
      </div>
    </>
  );
}
