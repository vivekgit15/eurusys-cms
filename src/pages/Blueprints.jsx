import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";

export default function Blueprints() {
  const { state } = useContext(AppContext);

  return (
    <Layout>
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Blueprints</h2>
          <Link
            to="/blueprints/new"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
          >
            Create Blueprint
          </Link>
        </div>

        {state.blueprints.length === 0 ? (
          <p className="text-slate-400 text-sm">
            No blueprints created yet.
          </p>
        ) : (
          <ul className="divide-y divide-slate-700">
            {state.blueprints.map((bp) => (
              <li key={bp.id} className="py-3 flex justify-between">
                <span className="font-medium">{bp.name}</span>
                <span className="text-slate-400 text-sm">
                  {bp.fields.length} fields
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
