import { cx } from '../lib/accent';

/** Magazine-style section marker: "Nº 02 — About". */
export function SectionLabel({ n, label, dark, className }: { n: string; label: string; dark?: boolean; className?: string }) {
  return (
    <p className={cx('eyebrow flex items-center gap-3', dark ? 'text-cream/80' : 'text-plum/70', className)}>
      <span className={cx('rounded-full border px-2.5 py-1', dark ? 'border-cream/40' : 'border-plum/30')}>Nº {n}</span>
      <span aria-hidden="true" className={cx('h-px w-10', dark ? 'bg-cream/40' : 'bg-plum/30')} />
      {label}
    </p>
  );
}
