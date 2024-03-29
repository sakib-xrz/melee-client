export default function FormikErrorBox({ formik, field }) {
  const showError = formik.errors[field] && formik.touched[field];
  const defaultClassNames =
    "rounded-md bg-red-500 px-2 py-1 mt-2 text-sm text-white text-destructive border border-destructive";
  const errorMessage = formik.errors[field];
  return showError ? (
    <div className={defaultClassNames}>{errorMessage}</div>
  ) : null;
}
