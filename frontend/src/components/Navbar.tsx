type NavbarProps = {
  searchValue: string
  onSearch: (value: string) => void
}

function Navbar({ searchValue, onSearch }: NavbarProps) {
  return (
    <header className="flex h-[76px] items-center justify-between gap-3 border-b border-[#eceaf1] bg-white/90 px-5 sm:gap-5 sm:px-8">
      <div className="hidden items-center gap-2 text-sm sm:flex">
        <span className="text-[#89849a]">Espacio de trabajo</span>
        <svg aria-hidden="true" className="h-4 w-4 text-[#b3afbd]" viewBox="0 0 20 20" fill="none">
          <path d="m8 5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold text-[#39334b]">Inicio</span>
      </div>

      <label className="flex h-10 min-w-0 max-w-[360px] flex-1 items-center gap-2.5 rounded-xl border border-[#eceaf1] bg-[#faf9fc] px-3 text-[#89849a] transition focus-within:border-[#c9bdf3] focus-within:bg-white">
        <svg aria-hidden="true" className="h-[17px] w-[17px] shrink-0" viewBox="0 0 20 20" fill="none">
          <circle cx="8.8" cy="8.8" r="5.8" stroke="currentColor" strokeWidth="1.6" />
          <path d="m13.2 13.2 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <input
          aria-label="Buscar páginas"
          className="min-w-0 flex-1 bg-transparent text-[13px] text-[#39334b] outline-none placeholder:text-[#aaa6b5]"
          onChange={(event) => onSearch(event.target.value)}
          placeholder="Buscar páginas..."
          type="search"
          value={searchValue}
        />
        <kbd className="hidden rounded border border-[#e9e6ef] bg-white px-1.5 py-0.5 text-[10px] font-medium text-[#aaa6b5] md:block">⌘ K</kbd>
      </label>

      <div className="flex shrink-0 items-center gap-2">
        <button
          aria-label="Ayuda"
          className="hidden h-9 w-9 items-center justify-center rounded-xl text-[#89849a] transition hover:bg-[#f5f3f9] hover:text-[#5d4a9f] sm:flex"
          type="button"
        >
          <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7.2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7.9 7.6a2.15 2.15 0 1 1 3.8 1.4c-.9 1-1.7 1.1-1.7 2.4M10 14.3v.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <button
          aria-label="Notificaciones"
          className="relative flex h-9 w-9 items-center justify-center rounded-xl text-[#89849a] transition hover:bg-[#f5f3f9] hover:text-[#5d4a9f]"
          type="button"
        >
          <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="none">
            <path d="M15.5 8.5a5.5 5.5 0 0 0-11 0c0 6-2 6-2 7.5h15c0-1.5-2-1.5-2-7.5ZM8 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-[#ed9b73]" />
        </button>
        <span aria-label="Perfil de Andrea" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8defc] text-xs font-bold text-[#684eb9] ring-2 ring-white">
          AR
        </span>
      </div>
    </header>
  )
}

export default Navbar
