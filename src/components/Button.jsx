export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 font-medium rounded-lg transition duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
