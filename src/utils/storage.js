import { mockBlueprints, mockContracts } from "../context/mockData";

const STORAGE_KEY = "contract_management_state";

export function loadState() {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);

    if (!serializedState) {
      const initialState = {
        blueprints: [...mockBlueprints],
        contracts: [...mockContracts],
      };

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(initialState)
      );

      return initialState;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Failed to load state", error);
    return null;
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );
  } catch (error) {
    console.error("Failed to save state", error);
  }
}
