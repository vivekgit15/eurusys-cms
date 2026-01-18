
export default function FieldEditor({ field, onChange }) {

  function update(key, value) {
    onChange({ ...field, [key]: value });
  }

  function updatePosition(axis, value) {
    onChange({
      ...field,
      position: { ...field.position, [axis]: Number(value) },
    });
  }

  return (
    <div className="border border-slate-700 rounded-lg p-4 bg-slate-900">
      <div className="grid grid-cols-4 gap-3">
        <select
          value={field.type}
          onChange={(e) => update("type", e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-md px-2 py-1"
        >
          <option value="text">Text</option>
          <option value="date">Date</option>
          <option value="signature">Signature</option>
          <option value="checkbox">Checkbox</option>
        </select>

        <input
          placeholder="Label"
          value={field.label}
          onChange={(e) => update("label", e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-md px-2 py-1 col-span-2"
        />

        <input
          type="number"
          placeholder="X"
          value={field.position.x}
          onChange={(e) => updatePosition("x", e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-md px-2 py-1"
        />

        <input
          type="number"
          placeholder="Y"
          value={field.position.y}
          onChange={(e) => updatePosition("y", e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-md px-2 py-1"
        />
      </div>
    </div>
  );
}
