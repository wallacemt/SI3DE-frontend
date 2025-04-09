import { useState, useEffect } from "react";
import { FaUserCircle, FaFileAlt, FaUpload, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const mockUser = {
  name: "Wallace Santana",
  course: "Analise E Desenvolvimento de Sistemas",
  matricula: "202404437019",
  concludePorCent: 50,
  interestArea: ["Desenvolvimento Web", "Desenvolvimento Mobile", "FullStack"],
}

export const SidebarProfile = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.removeItem("theme")
    }
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-neutral-800 p-2 rounded-full shadow-lg"
      >
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" />}

      <aside
        className={`top-0 left-0 min-h-screen w-72 bg-white dark:bg-neutral90 border-r border-neutral90/50 dark:border-neutral-700 shadow-md z-40 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}
        style={{ position: "fixed" }}
      >
        <div className="p-6 flex flex-col justify-between h-full">
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex justify-between items-center mb-4">
              <img src="/logo.svg" alt="Logo Wyden" className="w-32 object-contain" />

              {/* Botão de Dark Mode */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-xl text-gray-600 dark:text-gray-200 hover:text-purple-700 transition"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>

            {/* Perfil */}
            <div className="flex flex-col items-center space-x-4">
              <FaUserCircle className="text-8xl text-secundariaP2"/>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{mockUser.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Matrícula: {mockUser.matricula}</p>
              </div>
            </div>

            {/* Curso */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1 uppercase tracking-wide">
                Curso
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-400 mb-2">{mockUser.course}</p>
              <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
                <div className="bg-secundariaP2 h-full" style={{ width: `${mockUser.concludePorCent}%` }} />
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400 mt-1 block">{mockUser.concludePorCent}% concluído</span>
            </div>

            {/* Interesses */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2 uppercase tracking-wide">
                Áreas de Interesse
              </h4>
              <div className="flex flex-wrap gap-2">
                {mockUser.interestArea.map((area) => (
                  <span
                    key={area}
                    className="bg-purple-100 dark:bg-purple-900 text-secundariaP2 text-xs font-medium px-3 py-1 rounded-full border border-secundariaP2 dark:text-neutral10 hover:scale-110 hover:cursor-pointer"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Documentos */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300 uppercase tracking-wide">
                Documentos
              </h4>
              {["Histórico Escolar", "Currículo", "Declaração de Matrícula"].map((doc) => (
                <div
                  key={doc}
                  className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <FaFileAlt />
                    <span className="text-sm">{doc}</span>
                  </div>
                  <button className="text-secundariaP2 hover:text-purple-900 transition">
                    <FaUpload />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Rodapé */}
          <div className="text-center text-sm text-neutral90/80 dark:text-neutral-400 mt-10 absolute bottom-4">
            <p>&copy; 2025 Uniruy Wyden • SI3DE</p>
          </div>
        </div>
      </aside>
    </>
  );
};
