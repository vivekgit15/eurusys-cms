import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ACTIONS } from "../../context/AppReducer";
import FieldEditor from "./FieldEditor";

function createEmptyField() {
  return {
    id: Date.now().toString(),
    type: "text",
    label: "",
    position: { x: 0, y: 0 },
  };
}

export default function BlueprintForm() {
  const { dispatch } = useContext(AppContext);

  // Start with ONE required field
  const [fields, setFields] = useState([createEmptyField()]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  function addField() {
    setFields([...fields, createEmptyField()]);
    setError("");
  }

  function updateField(updatedField) {
    setFields(
      fields.map((f) =>
        f.id === updatedField.id ? updatedField : f
      )
    );
    setError("");
  }

  function deleteField(fieldId) {
    if (fields.length === 1) return; // safety guard
    setFields(fields.filter((f) => f.id !== fieldId));
    setError("");
  }

  function validate() {
    if (!name.trim()) {
      return "Blueprint name is required";
    }

    if (fields.length === 0) {
      return "At least one field is required";
    }

    for (const field of fields) {
      if (!field.label.trim()) {
        return "Each field must have a label";
      }
    }

    return null;
  }

  function saveBlueprint() {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    dispatch({
      type: ACTIONS.CREATE_BLUEPRINT,
      payload: {
        id: Date.now().toString(),
        name: name.trim(),
        fields,
      },
    });

    // Reset form → again start with one field
    setName("");
    setFields([createEmptyField()]);
    setError("");
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Create Blueprint
      </h2>

      {error && (
        <div className="mb-4 rounded-md bg-red-900/40 border border-red-700 text-red-300 px-4 py-2 text-sm">
          {error}
        </div>
      )}

      <input
        className="w-full mb-4 px-3 py-2 bg-slate-900 border border-slate-700 rounded-md"
        placeholder="Blueprint name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError("");
        }}
      />

      <div className="flex gap-3 mb-6">
        <button
          onClick={addField}
          className="bg-slate-700 px-4 py-2 rounded-md text-sm"
        >
          Add Field
        </button>

        <button
          onClick={saveBlueprint}
          className="bg-blue-600 px-4 py-2 rounded-md text-sm font-medium"
        >
          Save Blueprint
        </button>
      </div>

      <div className="space-y-4">
        {fields.map((field) => (
          <FieldEditor
            key={field.id}
            field={field}
            onChange={updateField}
            onDelete={deleteField}
            canDelete={fields.length > 1}
          />
        ))}
      </div>
    </div>
  );
}
