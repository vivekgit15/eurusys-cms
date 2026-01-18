import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-4"
    >
      <span className="flex items-center justify-center w-8 h-8 text-3xl">
        ←
      </span>
    </button>
  );
}
