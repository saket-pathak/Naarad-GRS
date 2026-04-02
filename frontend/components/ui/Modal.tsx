type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-[#1A1F2E] p-6 rounded-xl w-[400px]">
        {children}
        <button onClick={onClose} className="mt-4 text-sm text-gray-400">
          Close
        </button>
      </div>
    </div>
  );
}