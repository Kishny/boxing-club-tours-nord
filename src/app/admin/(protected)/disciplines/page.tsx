import AdminCollectionPage from "@/components/admin/AdminCollectionPage";
import { DISCIPLINES_SCHEMA } from "@/lib/cms-schemas";

export default function DisciplinesAdminPage() {
  return (
    <AdminCollectionPage
      collection="disciplines"
      title={DISCIPLINES_SCHEMA.title}
      singular={DISCIPLINES_SCHEMA.singular}
      fields={DISCIPLINES_SCHEMA.fields}
      columns={DISCIPLINES_SCHEMA.columns}
      defaultValue={DISCIPLINES_SCHEMA.defaultValue}
    />
  );
}
