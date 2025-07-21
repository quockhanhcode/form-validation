import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../store/StudentReducer";

export default function ActionForm() {
  const dispatch = useDispatch();
  const getStudentById = useSelector((state) => state.student.editStudent);

  const [state, setState] = useState({
    values: {
      id: "",
      name: "",
      phone: "",
      email: "",
    },
    errors: {
      id: "",
      name: "",
      phone: "",
      email: "",
    },
  });
  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      values: {
        ...state.values,
        [name]: value,
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(state.values));
    setState({
      values: {
        id: "",
        name: "",
        phone: "",
        email: "",
      },
      errors: {
        id: "",
        name: "",
        phone: "",
        email: "",
      },
    });
    // console.log(state);
  };
  //   const handleError = (e) => {
  //     const { name, value } = e.targer;
  //   };

  useEffect(() => {
    if (getStudentById) {
      setState((state) => ({
        ...state,
        values: getStudentById,
      }));
    }
  }, [getStudentById]);

  return (
    <div>
      <h1
        className="bg-[#3D3D3D] text-white p-2.5 font-medium text-xl mb-5
"
      >
        Thông tin sinh viên
      </h1>
      <form id="formStudent" onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-3.5 md:grid-cols-2">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mã SV
            </label>
            <input
              onChange={handleOnchange}
              value={state.values.id}
              //   onBlur={handleError}
              name="id"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={2}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Họ tên
            </label>
            <input
              onChange={handleOnchange}
              name="name"
              type="text"
              value={state.values.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ngyễn Văn B"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Số điện thoại
            </label>
            <input
              onChange={handleOnchange}
              name="phone"
              type="tel"
              value={state.values.phone}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123456789"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              onChange={handleOnchange}
              name="email"
              type="email"
              value={state.values.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Thêm sinh viên
        </button>
      </form>
    </div>
  );
}
