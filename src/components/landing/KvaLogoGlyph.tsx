import { clsx } from '../../utils/clsx'

export default function KvaLogoGlyph({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        'grid size-9 place-items-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-500 text-white',
        className
      )}
      aria-hidden="true"
    >
      <span className="text-[10px] font-extrabold leading-none tracking-tight">KVA</span>
    </span>
  )
}

