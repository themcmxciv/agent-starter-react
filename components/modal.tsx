import { PropsWithChildren } from 'react';

export default function Modal({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-50 rounded-lg border bg-white p-4 shadow-lg">{children}</div>
    </div>
  );
}
