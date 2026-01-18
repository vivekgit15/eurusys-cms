const today = new Date().toISOString().split("T")[0];
export default function ContractFields({
  fields,
  onFieldChange,
  isReadOnly,
 
}) {
  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.id}>
{field.type !== "checkbox" && (
  <label className="block text-sm mb-1 text-slate-300">
    {field.label}
  </label>
)}


          {field.type === "text" && (
            <input
              disabled={isReadOnly}
              value={field.value}
              onChange={(e) =>
                onFieldChange(field.id, e.target.value)
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-md px-3 py-2"
            />
          )}
          

          {field.type === "date" && (
            
            <input
              type="date"
              min={today}
              disabled={isReadOnly}
              value={field.value}
              onChange={(e) =>
                onFieldChange(field.id, e.target.value)
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-white  [&::-webkit-calendar-picker-indicator]:invert"
            />
          )}

          {field.type === "signature" && (
            <input
              disabled={isReadOnly}
              placeholder="Signed by"
              value={field.value}
              onChange={(e) =>
                onFieldChange(field.id, e.target.value)
              }
              className="w-full bg-slate-900 border border-slate-700 rounded-md px-3 py-2"
            />
          )}

      {field.type === "checkbox" && (
  <label className="flex items-center gap-3 text-slate-300 cursor-pointer">
    <input
      type="checkbox"
      disabled={isReadOnly}
      checked={field.value || false}
      onChange={(e) =>
        onFieldChange(field.id, e.target.checked)
      }
      className="w-4 h-4 accent-blue-600"
    />
    <span className="text-sm">
      {field.label}
    </span>
  </label>
)}

        </div>
      ))}
    </div>
  );
}
