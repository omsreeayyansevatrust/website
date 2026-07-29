"use client";

export default function Error({
    reset,
}: {
    reset: () => void;
}) {
    return (
        <div className="text-center py-20">

            <h2 className="text-2xl font-bold">
                Something went wrong
            </h2>

            <button
                onClick={reset}
                className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg"
            >
                Try Again
            </button>

        </div>
    );
}