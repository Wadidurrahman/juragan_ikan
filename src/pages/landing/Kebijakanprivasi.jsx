import Header from "../../components/header/Header";
import Footer from "../../components/header/Footer";

export default function Kebijakanprivasi() {
  return (
    <>
      <Header />;
      <main>
        <article>
          <div className="relative flex flex-col justify-center items-center mt-36 h-full">
            <h1 className="font-bold text-[20px] cursor-pointer justify-center items-center">Kebijakan Privasi</h1>
          </div>
          <div className="p-8">
            <h4 className="font-semibold p-5">Terakhir Diperbarui:Mei 2024</h4>
            <p className="px-5">
              Juragan Ikan menghargai privasi pengguna dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda
              menggunakan aplikasi Juragan Ikan.
            </p>
            <h4 className="text-lg font-bold p-5 ">Informasi yang Kami Kumpulkan</h4>
            <p className="px-5 list-disc bullet-before">
              Informasi Pribadi: Kami dapat mengumpulkan informasi pribadi seperti nama, alamat email, dan informasi kontak lainnya yang Anda berikan secara sukarela saat mendaftar atau menggunakan layanan kami. Informasi Budidaya dan Data
              <br />
              Produksi: Untuk memfasilitasi fungsi pengelolaan pencatatan aplikasi, kami dapat mengumpulkan informasi tentang informasi budidaya dan data produksi, seperti nama dan lokasi budidaya, informasi kolam, jenis ikan, parameter
              kualitas air, konsumsi pakan, tingkat pertumbuhan, tingkat kematian, dan data panen. Informasi Penggunaan <br />
              Aplikasi: Kami dapat mengumpulkan informasi tentang bagaimana Anda menggunakan aplikasi kami, termasuk interaksi dengan fitur-fitur tertentu dan informasi tentang perangkat Anda.
            </p>
            <h4 className="text-lg font-bold p-5 ">Penggunaan Informasi</h4>
            <p className="px-5 list-disc bullet-before">
              Penggunaan Umum: Kami menggunakan informasi yang dikumpulkan untuk menyediakan, mengelola, dan meningkatkan layanan kami, serta untuk berkomunikasi dengan Anda tentang layanan kami. Analisis dan Pengembangan <br />
              Produk: Kami dapat menggunakan informasi untuk tujuan analisis, penelitian, dan pengembangan produk guna meningkatkan pengalaman pengguna dan menawarkan fitur yang lebih baik. Kepatuhan <br /> Hukum: Kami dapat menggunakan
              informasi untuk mematuhi kewajiban hukum kami, seperti menjaga keamanan dan integritas sistem kami, serta menanggapi permintaan hukum yang sah.
            </p>
            <h4 className="text-lg font-bold p-5 ">Pembagian Informasi</h4>
            <p className="px-5 list-disc bullet-before">
              Pihak Ketiga: Kami tidak akan menjual, menyewakan, atau menukar informasi pribadi Anda kepada pihak ketiga tanpa izin Anda, kecuali seperti yang dijelaskan dalam Kebijakan Privasi ini atau dengan persetujuan Anda. <br />{" "}
              Pengolahan Data: Kami dapat menggunakan penyedia layanan pihak ketiga untuk membantu kami dalam menyediakan layanan kami, dan dalam hal ini, informasi Anda dapat diakses oleh penyedia layanan tersebut sejauh diperlukan untuk
              tujuan tersebut.
            </p>
            <h4 className="text-lg font-bold p-5 ">Keamanan Informasi</h4>
            <p className="px-5 list-disc bullet-before">Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses yang tidak sah, pengungkapan, perubahan, atau penghancuran yang tidak sah.</p>
            <h4 className="text-lg font-bold p-5 ">Perubahan Kebijakan Privasi</h4>
            <p className="px-5 list-disc bullet-before">
              Kami dapat memperbarui Kebijakan Privasi ini secara berkala, dan setiap perubahan akan diberitahukan kepada Anda dengan cara yang sesuai. Kami mendorong Anda untuk memeriksa Kebijakan Privasi ini secara berkala untuk tetap
              memperbarui tentang bagaimana kami melindungi informasi pribadi Anda.
              <br />
              <br /> Dengan menggunakan aplikasi Juragan Ikan, Anda menyetujui pengumpulan dan penggunaan informasi Anda sesuai dengan Kebijakan Privasi ini. Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi kami,
              silakan hubungi kami melalui informasi kontak yang disediakan di aplikasi kami.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
