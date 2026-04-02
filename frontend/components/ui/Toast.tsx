type Props = {
  message: string;
  type?: "success" | "error";
};

export default function Toast({ message, type = "success" }: Props) {
  const styles =
    type === "success"
      ? "bg-green-500/20 text-green-400"
      : "bg-red-500/20 text-red-400";

  return (
    <div className={`p-3 rounded-lg ${styles}`}>
      {message}
    </div>
  );
}