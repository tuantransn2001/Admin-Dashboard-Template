import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import back4 from '../../../assets/images/bg-images/bg4.jpg';

const SignUp = () => {
  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper aut-bg-img-side cotainer-fiuid align-items-stretch">
        <div className="row align-items-center w-100 align-items-stretch bg-white">
          <div
            className="d-none d-lg-flex col-lg-8 aut-bg-img align-items-center d-flex justify-content-center"
            style={{
              backgroundImage: `url(${back4})`,
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center'
            }}
          >
            <div className="col-md-8">
              <h1 className="text-white mb-5">Trải nghiệm dùng thử trong 7 ngày</h1>
              <p className="text-white">
                Giúp quản lý công việc của bạn dễ dàng hơn
              </p>
            </div>
          </div>
          <div className="col-lg-4 align-items-stret h-100 align-items-center d-flex justify-content-center">
            <div className=" auth-content text-center">
              <div className="mb-4">
                <i className="feather icon-user-plus auth-icon" />
              </div>
              <h3 className="mb-4">Đăng ký tài khoản</h3>
              <div className="input-group mb-4">
                <input type="text" className="form-control" placeholder="Tên đăng nhập" />
              </div>
              <div className="input-group mb-4">
                <input type="email" className="form-control" placeholder="Địa chỉ Email" />
              </div>
              <div className="input-group mb-4">
                <input type="password" className="form-control" placeholder="Mật khẩu" />
              </div>
              <div className="input-group mb-4">
                <input type="password" className="form-control" placeholder="Nhập lại mật khẩu" />
              </div>
              <div className="form-group text-left">
                <div className="checkbox checkbox-fill d-inline">
                  <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2" />
                  <label htmlFor="checkbox-fill-2" className="cr">
                    Nhận thông báo <Link to="#"> tin tức khuyến mãi</Link> hàng tuần
                  </label>
                </div>
              </div>
              <button className="btn btn-primary shadow-2 mb-4">Đăng ký</button>
              <p className="mb-0 text-muted">
                Đã có tài khoản? <NavLink to="/auth/signin">Đăng nhập</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
