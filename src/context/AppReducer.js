import { CONTRACT_STATUS } from "../constants/contractStatus";
import { canTransition } from "../utils/lifecycle";

export const ACTIONS = {
  CREATE_BLUEPRINT: "CREATE_BLUEPRINT",
  CREATE_CONTRACT: "CREATE_CONTRACT",
  UPDATE_CONTRACT_FIELD: "UPDATE_CONTRACT_FIELD",
  UPDATE_CONTRACT_STATUS: "UPDATE_CONTRACT_STATUS",
};

export const initialState = {
  blueprints: [],
  contracts: [],
};

export default function AppReducer(state, action) {
  switch (action.type) {
    //  CREATE BLUEPRINT
    case ACTIONS.CREATE_BLUEPRINT: {
      return {
        ...state,
        blueprints: [...state.blueprints, action.payload],
      };
    }

    //  CREATE CONTRACT FROM BLUEPRINT
    case ACTIONS.CREATE_CONTRACT: {
      const { blueprintId, contractName } = action.payload;

      const blueprint = state.blueprints.find(
        (bp) => bp.id === blueprintId
      );

      if (!blueprint) return state;

      const fieldsWithValues = blueprint.fields.map((field) => ({
        ...field,
        value: "",
      }));

      const newContract = {
        id: Date.now().toString(),
        name: contractName,
        blueprintId,
        fields: fieldsWithValues,
        status: CONTRACT_STATUS.CREATED,
        createdAt: new Date().toISOString(),
      };

      return {
        ...state,
        contracts: [...state.contracts, newContract],
      };
    }

    // 3️⃣ UPDATE CONTRACT FIELD VALUE
    case ACTIONS.UPDATE_CONTRACT_FIELD: {
      const { contractId, fieldId, value } = action.payload;

      const updatedContracts = state.contracts.map((contract) => {
        if (contract.id !== contractId) return contract;

        if (
          contract.status === CONTRACT_STATUS.LOCKED ||
          contract.status === CONTRACT_STATUS.REVOKED
        ) {
          return contract;
        }

        const updatedFields = contract.fields.map((field) =>
          field.id === fieldId ? { ...field, value } : field
        );

        return {
          ...contract,
          fields: updatedFields,
        };
      });

      return {
        ...state,
        contracts: updatedContracts,
      };
    }

    // 4️⃣ UPDATE CONTRACT STATUS (LIFECYCLE)
    case ACTIONS.UPDATE_CONTRACT_STATUS: {
      const { contractId, nextStatus } = action.payload;

      const updatedContracts = state.contracts.map((contract) => {
        if (contract.id !== contractId) return contract;

        if (
          contract.status === CONTRACT_STATUS.LOCKED ||
          contract.status === CONTRACT_STATUS.REVOKED
        ) {
          return contract;
        }

        if (!canTransition(contract.status, nextStatus)) {
          return contract;
        }

        return {
          ...contract,
          status: nextStatus,
        };
      });

      return {
        ...state,
        contracts: updatedContracts,
      };
    }

    default:
      return state;
  }
}
