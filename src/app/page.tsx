import logo from '../app/image/logo01.png';
import { Card } from "antd";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#ffffff', textAlign: "center" }}>
      <Card>
        <img src={logo.src} alt="Logo" />
      </Card>
      <div style={{color:"black"}}>ระบบปฏิบัติการ</div>
      
    </div>
  );
}

