export function StatusDisplay({ status }: any) {
  const getColor = () => {
    let color = "bg-white";
    switch (status?.toLowerCase()) {
      case "done":
        color = "bg-green-200";
        break;
      case "started":
        color = "bg-yellow-200";
        break;
      case "not started":
        color = "bg-red-500";
        break;
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor()}`}
    >
      {status}
    </span>
  );
}
