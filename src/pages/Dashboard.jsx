import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import StatusBadge from "../components/common/StatusBadge";
import { CONTRACT_STATUS } from "../constants/contractStatus";


export default function Dashboard() {
  const { state } = useContext(AppContext);
  const [filter, setFilter] = useState("ALL");

  // ✅ THIS WAS MISSING
  const filteredContracts = state.contracts.filter((contract) => {
  switch (filter) {
    case "ACTIVE":
      return [
        CONTRACT_STATUS.CREATED,
        CONTRACT_STATUS.APPROVED,
        CONTRACT_STATUS.SENT,
      ].includes(contract.status);

    case "SIGNED":
      return contract.status === CONTRACT_STATUS.SIGNED;

    case "ALL":
    default:
      return true;
  }
});

//     console.log("Filter:", filter);
// console.log("Contracts:", state.contracts);
// console.log("Filtered:", filteredContracts);

    return (
    <Layout>
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Contracts</h2>
          <Link
            to="/contracts/new"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
          >
            Create Contract
          </Link>
        </div>

<div className="flex gap-2 mb-4">
  <button
    onClick={() => setFilter("ALL")}
    className={`px-3 py-1.5 rounded-md text-sm ${
      filter === "ALL"
        ? "bg-blue-600 text-white"
        : "bg-slate-700 text-slate-200"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setFilter("ACTIVE")}
    className={`px-3 py-1.5 rounded-md text-sm ${
      filter === "ACTIVE"
        ? "bg-blue-600 text-white"
        : "bg-slate-700 text-slate-200"
    }`}
  >
    Active
  </button>

  <button
    onClick={() => setFilter("SIGNED")}
    className={`px-3 py-1.5 rounded-md text-sm ${
      filter === "SIGNED"
        ? "bg-blue-600 text-white"
        : "bg-slate-700 text-slate-200"
    }`}
  >
    Signed
  </button>
</div>


        <table className="w-full text-sm">
          <thead className="text-slate-400 border-b border-slate-700">
            <tr>
              <th className="py-3 text-left">Contract</th>
              <th className="py-3 text-left">Blueprint</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-left">Created</th>
              <th />
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700">
            {filteredContracts.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="py-6 text-center text-slate-400"
                >
                  No contracts found
                </td>
              </tr>
            ) : (
              filteredContracts.map((contract) => {
                const blueprint = state.blueprints.find(
                  (bp) => bp.id === contract.blueprintId
                );

                return (
                  <tr key={contract.id}>
                    <td className="py-3">{contract.name}</td>
                    <td className="py-3">
                      {blueprint?.name || "-"}
                    </td>
                    <td className="py-3">
                      <StatusBadge status={contract.status} />
                    </td>
                    <td className="py-3">
                      {new Date(contract.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3">
                      <Link
                        to={`/contracts/${contract.id}`}
                        className="text-blue-400 hover:underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
