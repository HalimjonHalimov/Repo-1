import HighlightOffIcon from "@mui/icons-material/HighlightOff";


export default function Input({
  label,
  type = "text",
  text,
  state,
  setState,
  isEqual,
}) {

  const handleClear = () => {
    setState('')
  }

  return (
    <div className={`relative flex flex-col gap-1 capitalize  text-sm mb-2 ${isEqual ? 'text-rose-700' : 'text-black'}`}>
      <label className="font-semibold">{label}</label>
      <input
        type={type}
        placeholder={text}
        className={`border placeholder-current  rounded py-2 px-3 outline-none shadow-md ${isEqual ? 'border-rose-700 text-rose-700' : 'border-slate-300 text-black'}`}
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
      {isEqual && (
        <div onClick={handleClear} className="absolute top-0 right-2 top-[50%] ">
          <HighlightOffIcon />
        </div>
      )}
    </div>
  );
}
