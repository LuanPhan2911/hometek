import { Link } from "react-router-dom";
import "./RateUpdate.scss";
const RateUpdate = () => {
  return (
    <>
      <div className="rate-title">
        <button className="btn title-btn">
          <i className="bi bi-chevron-left"></i>
        </button>
        <span className="bg-secondary-subtle p-2 mx-2 rounded">
          Cập nhật tình trạng đánh giá
        </span>
      </div>
      <div className="rate-customer d-flex justify-content-between border-bottom py-2">
        <h3 className="fw-bolder">Mai Thuong</h3>
        <span className="bg-warning-subtle p-2">Đang chờ duyệt</span>
      </div>
      <div className="rate-content">
        <div className="rate-content-title fw-bold fs-6">Chi tiết đánh giá</div>
        <table className="table table-hover table-bordered table-striped">
          <thead className="table-active">
            <tr>
              <th>Đánh giá</th>
              <th>Sản phẩm</th>
              <th>Rating</th>
              <th>Ngày</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>asaksladnsdklsdsdmlsd ksakán akakskạ</td>
              <td>Nồi chiên</td>
              <td>4</td>
              <td>
                12/12/2023 <i className="bi bi-check-square"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rate-update d-flex">
        <div className="col-lg-2">
          <select className="form-select">
            <option>Đã duyệt</option>
            <option>Đang chờ</option>
          </select>
        </div>
        <button className="btn edit-btn">Cập nhật</button>
      </div>
    </>
  );
};
export default RateUpdate;
