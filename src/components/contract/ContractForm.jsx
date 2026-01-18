import StatusBadge from "../common/StatusBadge";
import ContractFields from "./ContractFields";
import ContractStatusActions from "./ContractStatusActions";
import { CONTRACT_STATUS } from "../../constants/contractStatus";
import { useState } from "react";

export default function ContractForm({
  contract,
  onFieldChange,
}) 
    
{
  const isReadOnly =
    contract.status === CONTRACT_STATUS.LOCKED ||
    contract.status === CONTRACT_STATUS.REVOKED;

    const [error, setError] = useState("");

    function validateFields() {
  for (const field of contract.fields) {
    if (
      field.type !== "checkbox" &&
      (!field.value || field.value.toString().trim() === "")
    ) {
      return `${field.label} is required`;
    }

    if (field.type === "checkbox" && field.value !== true) {
      return `${field.label} must be checked`;
    }
  }
  return null;
}



  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {contract.name}
        </h2>
        <StatusBadge status={contract.status} />
      </div>

      <ContractFields
        fields={contract.fields}
        onFieldChange={onFieldChange}
        isReadOnly={isReadOnly}
      />

      {error && (
  <div className="mb-4 rounded-md bg-red-900/40 border border-red-700 text-red-300 px-4 py-2 text-sm">
    {error}
  </div>
)}


      <div className="mt-6">
        <ContractStatusActions
  contract={contract}
  onBeforeAction={() => {
    const validationError = validateFields();
    if (validationError) {
      setError(validationError);
      return false; // ❌ block action
    }
    setError("");
    return true; // ✅ allow action
  }}
/>

      </div>
    </div>
  );
}

