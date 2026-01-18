import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">
            Contract Management
          </h1>
<nav className="flex gap-6 text-sm font-medium">
  <NavLink
    to="/dashboard"
    className={({ isActive }) =>
      isActive
        ? "text-blue-400 border-b-2 border-blue-400 pb-1"
        : "text-slate-300 hover:text-white"
    }
  >
    Dashboard
  </NavLink>

  <NavLink
    to="/blueprints"
    className={({ isActive }) =>
      isActive
        ? "text-blue-400 border-b-2 border-blue-400 pb-1"
        : "text-slate-300 hover:text-white"
    }
  >
    Blueprints
  </NavLink>
</nav>

        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}
