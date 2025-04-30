import { XMarkIcon } from '@heroicons/react/20/solid';

interface SlideOutPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function SlideOutPanel({ isOpen, onClose, title, children }: SlideOutPanelProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-xl transform transition-transform duration-200 ease-in-out overflow-y-auto ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {isOpen && (
        <div className="p-4">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {title}
            </h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          {children}
        </div>
      )}
    </div>
  );
}