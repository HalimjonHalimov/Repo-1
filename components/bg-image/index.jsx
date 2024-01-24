export default function BgImage({ children }) {
  return (
    <div className="relative w-full  h-[100vh] text-white overflow-hidden">
      <div className="absolute w-full h-full bg-[#333333] -z-10 top-0 left-[-50%] translate-x-32 transform -rotate-45 rounded-3xl"></div>
      {children}
    </div>
  );
}
