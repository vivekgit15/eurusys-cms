import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Blueprints from "./pages/Blueprints";
import CreateBlueprint from "./pages/CreateBlueprint";
import CreateContract from "./pages/CreateContract";
import ContractDetails from "./pages/ContractDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blueprints" element={<Blueprints />} />
        <Route path="/blueprints/new" element={<CreateBlueprint />} />
        <Route path="/contracts/new" element={<CreateContract />} />
        <Route path="/contracts/:id" element={<ContractDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
