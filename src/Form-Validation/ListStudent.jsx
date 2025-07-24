import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, getStudentByID } from "../store/StudentReducer";

export default function ListStudent(props) {
  const { setShowBtn } = props;

  const listStudent = useSelector((state) => state.student.listData);
  const keyword = useSelector((state) => state.student.searchKeyword);
  const dispatch = useDispatch();
  useEffect(() => {
    setShowBtn;
  }, [setShowBtn]);
  const handleEdit = (item) => {
    dispatch(getStudentByID(item));
    setShowBtn(false);
  };
  const filterStudent = listStudent.filter((item) =>
    item.name?.toLowerCase().includes(keyword.toLowerCase())
  );
  return (
    <div className="relative overflow-x-auto mt-8">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 w-[20%]">
              Mã SV
            </th>
            <th scope="col" className="px-6 py-3 w-[20%]">
              Họ Tên
            </th>
            <th scope="col" className="px-6 py-3 w-[20%]">
              SDT
            </th>
            <th scope="col" className="px-6 py-3 w-[20%]">
              Email
            </th>
            <th scope="col" className="px-6 py-3 w-[20%]"></th>
          </tr>
        </thead>
        <tbody>
          {filterStudent.map((item) => {
            return (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.id}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => dispatch(deleteStudent(item))}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Xóa
                  </button>
                  <button
                    onClick={() => handleEdit(item)}
                    id="edit-btn"
                    type="button"
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
