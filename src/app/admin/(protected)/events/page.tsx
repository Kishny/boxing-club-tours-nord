import AdminCollectionPage from "@/components/admin/AdminCollectionPage";
import { EVENTS_SCHEMA } from "@/lib/cms-schemas";

export default function EventsAdminPage() {
  return (
    <AdminCollectionPage
      collection="events"
      title={EVENTS_SCHEMA.title}
      singular={EVENTS_SCHEMA.singular}
      fields={EVENTS_SCHEMA.fields}
      columns={EVENTS_SCHEMA.columns}
      defaultValue={EVENTS_SCHEMA.defaultValue}
    />
  );
}
