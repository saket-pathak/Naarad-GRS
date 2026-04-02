type Props = {
  status: string;
};

export default function StatusBadge({ status }: Props) {
  const styles =
    status === "Pending"
      ? "bg-yellow-500/20 text-yellow-400"
      : status === "Resolved"
      ? "bg-green-500/20 text-green-400"
      : "bg-red-500/20 text-red-400";

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${styles}`}>
      {status}
    </span>
  );
}