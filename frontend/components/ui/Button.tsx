type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  const base = "px-5 py-2 rounded-xl transition font-semibold";

  const styles =
    variant === "primary"
      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
      : "bg-white/10 hover:bg-white/20 text-white";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}