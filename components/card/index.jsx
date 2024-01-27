import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

export default function Card({ item }) {
  const [state, setState] = useState(false);

  const handleButton = (item) => {
    setState((prew) => !prew);
    console.log(item.id);
    console.log(state);
  };
  return (
    <div
      onClick={() => handleButton(item)}
      className="relative w-[400px] h-auto p-8 bg-white rounded-md text-black shadow-md border border-slate-200"
    >
      <div className="font-semibold mb-2">Raspberry Pi User Guide</div>
      <div>
        <div>Cover: http://url.to.book.cover</div>
        <div>Pages: 221</div>
        <div>Published: 2012</div>
        <div>Isbn: 9781118464465</div>
      </div>
      <div className=" flex justify-between items-center mt-2">
        Eben Upton / 2012
        <span className="bg-rose-600 text-white px-2 py-1 text-sm font-semibold rounded-md">
          New
        </span>
      </div>
      {state && (
        <div className="absolute top-4 -right-4 w-8 h-auto flex flex-col justify-start items-center gap-2 text-white transition">
          <div className="w-8 h-8 rounded-md bg-[#FF4D4F] flex justify-center items-center">
            <DeleteForeverIcon sx={{fontSize: '18px'}} />
          </div>
          <div className="w-8 h-8 rounded-md bg-[#6200EE] flex justify-center items-center">
            <EditIcon  sx={{fontSize: '18px'}}/>
          </div>
        </div>
      )}
    </div>
  );
}
