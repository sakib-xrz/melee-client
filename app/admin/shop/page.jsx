"use client";

import { useStore } from "@/context/StoreProvider";
import EditShopInfo from "./components/EditShopInfo";
import PageTitleWithButton from "@/components/shared/PageTitleWithButton";

export default function ShopManagement() {
  const { user, refetchMe, refetchStore } = useStore();
  const { shop } = user;

  const initialValues = {
    uid: shop?.uid || "",
    terms_condition: shop?.terms_condition || "",
    privacy_policy: shop?.privacy_policy || "",
    short_pitch: shop?.short_pitch || "",
    contact_number: shop?.contact_number || "",
    contact_email: shop?.contact_email || "",
    contact_website: shop?.contact_website || "",
    other_website: shop?.other_website || "",
    shipping_charges: shop?.shipping_charges || 0,
    drop_date: shop?.drop_date_value || null,
    drop_time: shop?.drop_time_value || null,
    is_drop_stop: shop?.is_drop_stop_value || false,
  };

  return (
    <div>
      <div className="mb-6">
        <PageTitleWithButton title="Shop Management" />
      </div>
      <EditShopInfo
        initialValues={initialValues}
        refetch={refetchMe}
        refetchStore={refetchStore}
      />
    </div>
  );
}
