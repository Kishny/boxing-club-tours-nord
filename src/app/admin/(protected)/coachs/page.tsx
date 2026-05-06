import AdminCollectionPage from "@/components/admin/AdminCollectionPage";
import { COACHS_SCHEMA } from "@/lib/cms-schemas";

export default function CoachsAdminPage() {
  return (
    <AdminCollectionPage
      collection="coachs"
      title={COACHS_SCHEMA.title}
      singular={COACHS_SCHEMA.singular}
      fields={COACHS_SCHEMA.fields}
      columns={COACHS_SCHEMA.columns}
      defaultValue={COACHS_SCHEMA.defaultValue}
    />
  );
}
