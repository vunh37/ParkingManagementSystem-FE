import React, { useEffect, useState } from "react";
import "./AddEmployees.scss";
import CustomInput from "../common/CustomInput";
import { IEmployee } from "../constant/interfaces";
import { useParams } from "react-router-dom";
import {
  EMPLOYEE_DEFAULT,
  REGEX_CHECK_PHONE_NUMBER,
} from "../constant/constants";
import CustomRadioInput from "../common/CustomRadioInput";

const AddEmployee = (props: any) => {
  const { mode } = props;

  const { employeeId } = useParams();

  const [employee, setEmployee] = useState<IEmployee>({ ...EMPLOYEE_DEFAULT });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    if (Object.values(employee).some((value: string) => value === "")) {
      alert("Vui lòng điền đầy đủ thông tin nhân viên");
      return;
    }

    if (!REGEX_CHECK_PHONE_NUMBER.test(employee.phoneNumber)) {
      alert("Vui lòng điền chính xác số điện thoại");
      return;
    }

    alert("Them nhan vien thanh cong");
  };
  return (
    <div className="add-employees-container">
      <h1 className="mb-5">Thêm nhân viên</h1>
      <form onSubmit={handleSubmitForm} className="add-form">
        <div className="form-row row">
          <div className="col-md-6">
            <CustomInput
              name="fullName"
              label="Họ và tên"
              value={employee.fullName}
              onChangeHandle={handleChange}
            />
          </div>
          <div className="col-md-6">
            <CustomRadioInput
              name="gender"
              label="Giới tính"
              value={employee.gender}
              onChangeHandle={handleChange}
              items={["Nam", "Nữ"]}
            />
          </div>
        </div>

        <div className="form-row row">
          <div className="col-md-6">
            <CustomInput
              name="dateOfBirth"
              label="Ngày sinh"
              value={employee.dateOfBirth}
              onChangeHandle={handleChange}
              type="date"
            />
          </div>
          <div className="col-md-6">
            <CustomInput
              name="phoneNumber"
              label="SĐT"
              value={employee.phoneNumber}
              onChangeHandle={handleChange}
              type="string"
            />
          </div>
        </div>

        <CustomInput
          name="address"
          label="Địa chỉ"
          value={employee.address}
          onChangeHandle={handleChange}
          type="string"
        />

        <div className="form-row row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Cấp bậc</label>
              <select className="form-select">
                <option value={"Nhân viên"}>Nhân viên</option>
                <option value={"Quản lí"}>Quản lí</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <CustomInput
              name="email"
              label="Email"
              value={employee.email}
              onChangeHandle={handleChange}
              type="string"
            />
          </div>
        </div>

        <div className="form-row row">
          <div className="col-md-6">
            <CustomInput
              name="userName"
              label="Tên đăng nhập"
              value={employee.userName}
              onChangeHandle={handleChange}
              type="string"
            />
          </div>
          <div className="col-md-6">
            <CustomInput
              name="password"
              label="Password"
              value={employee.password}
              onChangeHandle={handleChange}
              type="string"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Thêm nhân viên
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
