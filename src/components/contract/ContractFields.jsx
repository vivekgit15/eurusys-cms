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
          <label className="block text-sm mb-1 text-slate-300">
            {field.label}
          </label>

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
              className="w-full bg-slate-900 border border-slate-700 rounded-md px-3 py-2"
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
            <input
              type="checkbox"
              disabled={isReadOnly}
              checked={field.value || false}
              onChange={(e) =>
                onFieldChange(field.id, e.target.checked)
              }
              className="mt-2"
            />
          )}
        </div>
      ))}
    </div>
  );
}
