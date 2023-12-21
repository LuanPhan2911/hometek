const ProductCreate = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="text-center fw-bold"> Thêm sản phẩm mới</h3>
        </div>
        <div className="card-body d-flex flex-column align-items-center">
          <div className="col-md-8">
            <label className="form-label">ID Sản phẩm</label>
            <input className="form-control" name="name" />
          </div>
          <div className="col-md-8">
            <label className="form-label">Tên sản phẩm</label>
            <input className="form-control" name="name" />
          </div>
          <div className="col-md-8">
            <label className="form-label">Mô tả</label>
            <input className="form-control" name="name" />
          </div>
          <div className="col-md-8">
            <label className="form-label">Giá</label>
            <input className="form-control" name="name" />
          </div>
          <div className="col-md-8">
            <label className="form-label">Hình ảnh</label>
            <input
              className="form-control"
              name="name"
              type="file"
              title="Chọn tệp"
            />
          </div>
          <div className="col-md-8">
            <label className="form-label">Nhóm sản phẩm</label>
            <input className="form-control" name="name" />
          </div>
          <button className="btn btn-success my-2">Lưu sản phẩm</button>
        </div>
      </div>
    </>
  );
};
export default ProductCreate;
