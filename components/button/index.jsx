import { useRouter } from "next/router";

export default function Button({ type, width, label, route }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/${route}`);
      }}
      type={type}
      className={`w-${
        width ? "full" : "[240px]"
      } h-auto py-2 px-4 rounded text-sm font-semibold text-white mt-[1.5rem] border border-[#6200EE] bg-[#6200EE]  hover:bg-white hover:text-[#6200EE] transition`}
    >
      {label}
    </button>
  );
}
