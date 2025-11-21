export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border-card)] bg-[var(--accent-dark)]">
      <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-[var(--border-card)] flex justify-between">
        <span>© {new Date().getFullYear()} Ovejero & Bicecci — Estudio de Arquitectura. </span>

<span>Diseño web en colaboración con Candela Ovejero 🌿</span>

      </div>
    </footer>
  );
}

