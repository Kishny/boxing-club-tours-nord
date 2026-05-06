import AdminCollectionPage from "@/components/admin/AdminCollectionPage";
import { PRICING_SCHEMA } from "@/lib/cms-schemas";

export default function TarifsAdminPage() {
  return (
    <AdminCollectionPage
      collection="pricing"
      title={PRICING_SCHEMA.title}
      singular={PRICING_SCHEMA.singular}
      fields={PRICING_SCHEMA.fields}
      columns={PRICING_SCHEMA.columns}
      defaultValue={PRICING_SCHEMA.defaultValue}
    />
  );
}
