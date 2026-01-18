export default function StatusBadge({ status }) {
  const styles = {
    CREATED: "bg-blue-900 text-blue-300",
    APPROVED: "bg-emerald-900 text-emerald-300",
    SENT: "bg-yellow-900 text-yellow-300",
    SIGNED: "bg-purple-900 text-purple-300",
    LOCKED: "bg-slate-700 text-slate-300",
    REVOKED: "bg-red-900 text-red-300",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}
