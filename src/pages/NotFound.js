import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
       <b><h1>404 - Không tìm thấy trang</h1></b>
       <h3>Trang bạn đang tìm kiếm không tồn tại</h3>
       <Link to="/" className="home-button">Về trang chủ</Link>
    </div>
  );
}

export default NotFound;
