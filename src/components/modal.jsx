export default function modal({ open, onclose, children }) {
  return (
    <>
      <section onClick={onclose} className={`fixed z-30 border items-center right-[22rem] top-40 bg-[#FBFDFF] px-11 py-8 rounded-lg shadow-lg ${open ? "visible bg-black/20" : "invisible"} `}>
        <div></div>
        <div className="relative justify-center items-center text-center">
          <img className="relative objeck-cover items-center left-10" src={Imgpopup} alt="" />
          <h1 className="text-3xl font-bold">{popup.Title[0]}</h1>
          <p className="p-4 text-[#71757B]">{popup.Title[1]}</p>
          <hr className="border-1 border-gray-400" />
          <div className="flex justify-center gap-8 mt-4">
            <button className="text-sm font-semibold text-[#224D54] shadow-lg border px-12 py-2 rounded-lg bg-[#DDE4E9]">Tidak</button>
            <button
              className="text-sm font-semibold text-[#DDE4E9] shadow-lg border px-12 py-2 rounded-lg bg-[#224D54]"
              onClick={() => {
                window.location.href = "panduan";
              }}
            >
              Iya
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
