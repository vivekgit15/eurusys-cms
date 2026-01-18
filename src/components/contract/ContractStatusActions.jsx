import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ACTIONS } from "../../context/AppReducer";
import { CONTRACT_STATUS } from "../../constants/contractStatus";

export default function ContractStatusActions({
  contract,
  onBeforeAction,
}) {
  const { dispatch } = useContext(AppContext);

  function change(nextStatus) {
    if (onBeforeAction && !onBeforeAction()) {
      return;
    }

    dispatch({
      type: ACTIONS.UPDATE_CONTRACT_STATUS,
      payload: { contractId: contract.id, nextStatus },
    });
  }

  const baseBtn =
    "px-4 py-2 rounded-md text-sm font-medium transition";

  return (
    <div className="flex flex-wrap gap-3">
      {contract.status === CONTRACT_STATUS.CREATED && (
        <>
          <button
            onClick={() => change(CONTRACT_STATUS.APPROVED)}
            className={`${baseBtn} bg-emerald-600 hover:bg-emerald-700 text-white`}
          >
            Approve
          </button>

          <button
            onClick={() => change(CONTRACT_STATUS.REVOKED)}
            className={`${baseBtn} bg-red-600 hover:bg-red-700 text-white`}
          >
            Revoke
          </button>
        </>
      )}

      {contract.status === CONTRACT_STATUS.APPROVED && (
        <button
          onClick={() => change(CONTRACT_STATUS.SENT)}
          className={`${baseBtn} bg-blue-600 hover:bg-blue-700 text-white`}
        >
          Send
        </button>
      )}

      {contract.status === CONTRACT_STATUS.SENT && (
        <>
          <button
            onClick={() => change(CONTRACT_STATUS.SIGNED)}
            className={`${baseBtn} bg-purple-600 hover:bg-purple-700 text-white`}
          >
            Sign
          </button>

          <button
            onClick={() => change(CONTRACT_STATUS.REVOKED)}
            className={`${baseBtn} bg-red-600 hover:bg-red-700 text-white`}
          >
            Revoke
          </button>
        </>
      )}

      {contract.status === CONTRACT_STATUS.SIGNED && (
        <button
          onClick={() => change(CONTRACT_STATUS.LOCKED)}
          className={`${baseBtn} bg-slate-700 hover:bg-slate-600 text-white`}
        >
          Lock
        </button>
      )}
    </div>
  );
}
