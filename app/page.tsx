import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div >
      <Navbar />
     <h2> ยินดีต้อนรับเข้าสู่เว็บไซส์</h2>
      <p>โดย น้องนนท์คนดีคนเดิมเพิ่มใข่พิเศษ2ฟอง น้ำเปล่า 2 ขวด By นายวุฒิภูมิ วุฒิ</p>
      <Footer />
    </div>
  );
}
