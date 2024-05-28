import bg from "../../assets/aset-img/forum.png";
import Wa from "../../assets/icon/wa.svg";

export default function Forum() {
  return (
    <>
      <main>
        <div className=" top-0 left-0 w-full z-0">
          <img className="object-cover" src={bg} alt="Forum" />
          <h1 className="font-bold text-5xl poppins text-white relative bottom-60 justify-center text-center">Forum</h1>
        </div>
        <div className="w-full px-20 flex justify-between">
          <div className="w-1/2 flex flex-col relative items-center justify-center pb-20">
            <img width={100} height={100} src={Wa} className="py-10" alt="Whatapps" />
            <button className="px-10 py-1 rounded-full text-white font-bold text-sm bg-[#224D54]">Lanjutkan Obrolan Ke Wa</button>
          </div>
          <div className="w-1/2 px-15 items-center justify-center text-center py-20">
            <p>Bergabunglah dengan grup diskusi WhatsApp kami yang aktif, tempat para peternak ikan berkumpul untuk berbagi pengalaman, tips, dan informasi terkini seputar budidaya ikan.</p>
            <br />
            <p>
              Dapatkan kesempatan untuk bertanya, belajar, dan berkolaborasi dengan sesama peternak yang berpengalaman. Jangan lewatkan kesempatan untuk meningkatkan pengetahuan dan keterampilan Anda dalam dunia budidaya ikan. Ayo bergabung
              sekarang untuk mendapatkan manfaatnya!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
