"use client";

interface Props {
  open: boolean;
  title: string;
  description: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  description,
  onCancel,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[420px] p-6 shadow-xl">
        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onCancel}
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}