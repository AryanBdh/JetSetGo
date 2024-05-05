import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import API from "../../API";
import Swal from "sweetalert2";

const RegisterSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  password_confirm: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Password confirm must be same as password"),
  gender: yup.string().required(),
  role: yup.string().required(),
});

export default function RegisterComponent() {
  let token = localStorage.getItem("token") ?? "";
  const {
    register,
    setError,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const Register = (data) => {
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("gender", data.gender);
    formData.append("role", data.role);
    formData.append("image", data.image[0]);
    API.post("/user", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.data.status) {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        } else {
          console.log("data not inserted");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit(Register)}>
        <div className="form-group mb-2">
          <label>
            {" "}
            Name:
            <a className="text-danger">
              {errors.name?.message && <span>{errors.name?.message}</span>}
            </a>
          </label>
          <input
            type="text"
            name="name"
            {...register("name")}
            className="form-control"
          />
        </div>
        <div className="form-group mb-2">
          <label>
            Email address:
            <a className="text-danger">
              {errors.email?.message && <span>{errors.email?.message}</span>}
            </a>
          </label>
          <input
            type="email"
            name="email"
            {...register("email")}
            className="form-control"
          />
        </div>
        <div className="form-group mb-2">
          <label>
            Password:
            <a className="text-danger">
              {errors.password?.message && (
                <span>{errors.password?.message}</span>
              )}
            </a>
          </label>
          <input
            type="password"
            name="password"
            {...register("password")}
            className="form-control"
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="password_confirm">
            Password Confirm:
            <a className="text-danger">
              {errors.password_confirm?.message && (
                <span>{errors.password_confirm?.message}</span>
              )}
            </a>
          </label>
          <input
            type="password"
            name="password_confirm"
            {...register("password_confirm")}
            className="form-control"
          />
        </div>
        <div className="form-group mb-2">
          <label>
            {" "}
            Gender:
            <a className="text-danger">
              {errors.gender?.message && <span>{errors.gender?.message}</span>}
            </a>
          </label>
          <select
            name="gender"
            {...register("gender")}
            className="form-control"
          >
            <option value="">Select Gender </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <label>
            {" "}
            Gender:
            <a className="text-danger">
              {errors.role?.message && <span>{errors.role?.message}</span>}
            </a>
          </label>
          <select name="role" {...register("role")} className="form-control">
            <option value="">Select Role </option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <div className="form-group mb-2">
          <label className="custum-file-upload" htmlFor="file">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill=""
                viewBox="0 0 24 24"
              >
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill=""
                    d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="text">
              <span> upload image</span>
            </div>
            <input type="file" id="file" {...register("image")}/>
          </label>
        </div>
        <div className="form-group mb-2">
          <button className="btn btn-primary">Add User</button>
        </div>
      </form>
    </div>
  );
}
