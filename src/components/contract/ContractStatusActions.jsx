import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ACTIONS } from "../../context/AppReducer";
import { CONTRACT_STATUS } from "../../constants/contractStatus";

export default function ContractStatusActions({ contract , onBeforeAction, }) {
  const { dispatch } = useContext(AppContext);

  function change(nextStatus) {
  if (onBeforeAction && !onBeforeAction()) {
    return; // ❌ validation failed
  }

  dispatch({
    type: ACTIONS.UPDATE_CONTRACT_STATUS,
    payload: { contractId: contract.id, nextStatus },
  });
}


  return (
    <div className="flex gap-3">
      {contract.status === CONTRACT_STATUS.CREATED && (
        <>
          <button onClick={() => change(CONTRACT_STATUS.APPROVED)}>
            Approve
          </button>
          <button
            className="bg-red-600"
            onClick={() => change(CONTRACT_STATUS.REVOKED)}
          >
            Revoke
          </button>
        </>
      )}

      {contract.status === CONTRACT_STATUS.APPROVED && (
        <button onClick={() => change(CONTRACT_STATUS.SENT)}>Send</button>
      )}

      {contract.status === CONTRACT_STATUS.SENT && (
        <>
          <button onClick={() => change(CONTRACT_STATUS.SIGNED)}>Sign</button>
          <button
            className="bg-red-600"
            onClick={() => change(CONTRACT_STATUS.REVOKED)}
          >
            Revoke
          </button>
        </>
      )}

      {contract.status === CONTRACT_STATUS.SIGNED && (
        <button onClick={() => change(CONTRACT_STATUS.LOCKED)}>Lock</button>
      )}
    </div>
  );
}
