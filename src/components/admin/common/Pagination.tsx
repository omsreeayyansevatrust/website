interface Props {
  page: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Pagination({
  page,
  totalPages,
  onPrevious,
  onNext,
}: Props) {
  return (
    <div className="flex justify-end items-center gap-4 mt-6">
      <button
        onClick={onPrevious}
        disabled={page === 1}
        className="border rounded-lg px-4 py-2 disabled:opacity-50"
      >
        Previous
      </button>

      <span className="font-medium">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={page === totalPages}
        className="border rounded-lg px-4 py-2 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}