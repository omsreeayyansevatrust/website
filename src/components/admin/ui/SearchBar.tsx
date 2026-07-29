interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}: Props) {
  return (
    <input
      className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}