import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { ACTIONS } from "../context/AppReducer";
import { useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout";

export default function CreateContract() {
  const { state, dispatch } = useContext(AppContext);

  const [blueprintId, setBlueprintId] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function createContract() {
    if (!name.trim()) {
      setError("Contract name is required");
      return;
    }

    if (!blueprintId) {
      setError("Please select a blueprint");
      return;
    }
    dispatch({
      type: ACTIONS.CREATE_CONTRACT,
      payload: {
        blueprintId,
        contractName: name.trim(),
      },
    });

    navigate("/dashboard");
  }

  return (
    <Layout>
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-xl">
        <h2 className="text-xl font-semibold mb-6">Create Contract</h2>

        {error && (
          <div className="mb-4 rounded-md bg-red-900/40 border border-red-700 text-red-300 px-4 py-2 text-sm">
            {error}
          </div>
        )}

        <input
          className="w-full mb-4 px-3 py-2 bg-slate-900 border border-slate-700 rounded-md"
          placeholder="Contract name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
        />

        <select
          className="w-full mb-6 px-3 py-2 bg-slate-900 border border-slate-700 rounded-md"
          value={blueprintId}
          onChange={(e) => {
            setBlueprintId(e.target.value);
            setError("");
          }}
        >
          <option value="">Select Blueprint</option>
          {state.blueprints.map((bp) => (
            <option key={bp.id} value={bp.id}>
              {bp.name}
            </option>
          ))}
        </select>

        <button
          onClick={createContract}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium "

        >
          Create Contract
        </button>
      </div>
    </Layout>
  );
}
