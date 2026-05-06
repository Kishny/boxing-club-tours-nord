import AdminCollectionPage from "@/components/admin/AdminCollectionPage";
import { ATHLETES_SCHEMA } from "@/lib/cms-schemas";

export default function AthletesAdminPage() {
  return (
    <AdminCollectionPage
      collection="athletes"
      title={ATHLETES_SCHEMA.title}
      singular={ATHLETES_SCHEMA.singular}
      fields={ATHLETES_SCHEMA.fields}
      columns={ATHLETES_SCHEMA.columns}
      defaultValue={ATHLETES_SCHEMA.defaultValue}
    />
  );
}
