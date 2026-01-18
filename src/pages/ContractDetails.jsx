import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ACTIONS } from "../context/AppReducer";
import Layout from "../components/common/Layout";
import ContractForm from "../components/contract/ContractForm";
import BackButton from "../components/common/BackButton";

export default function ContractDetails() {
  const { id } = useParams();
  const { state, dispatch } = useContext(AppContext);

  const contract = state.contracts.find((c) => c.id === id);
  if (!contract) return null;

  function handleFieldChange(fieldId, value) {
    dispatch({
      type: ACTIONS.UPDATE_CONTRACT_FIELD,
      payload: {
        contractId: contract.id,
        fieldId,
        value,
      },
    });
  }

  return (
    <Layout>
      <BackButton />
      <ContractForm
        contract={contract}
        onFieldChange={handleFieldChange}
      />
    </Layout>
  );
}
