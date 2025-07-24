import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listData: [],
  editStudent: null,
  originalListData: [], // To keep the original list for search functionality
};

const StudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      // state.listData.push(action.payload);
      const exit = state.listData.some((item) => item.id === action.payload.id);
      if (!exit) {
        state.listData.push(action.payload);
      } else {
        alert(`ID ${action.payload.id} đã tồn tại`);
      }
    },
    deleteStudent: (state, action) => {
      const student = action.payload;
      state.listData = state.listData.filter((item) => item.id !== student.id);
    },
    getStudentByID: (state, action) => {
      state.editStudent = action.payload;
    },
    updateStudent: (state, action) => {
      const updateStudent = action.payload;
      const index = state.listData.findIndex(
        (item) => item.id === updateStudent.id
      );
      if (index !== -1) {
        state.listData[index] = updateStudent;
      }
    },
    // searchStudent: (state, action) => {
    //   console.log(action);
    //   const keyword = action.payload?.toLowerCase() || "";
    //   state.listData = state.listData.filter((item) =>
    //     item.name?.toLowerCase().includes(keyword)
    //   );
    // },
    searchStudent: (state, action) => {
      const keyword = action.payload?.toLowerCase() || "";

      // Nếu chưa lưu bản gốc thì lưu lần đầu tiên
      if (state.originalListData.length === 0) {
        state.originalListData = state.listData;
      }
      // Nếu ô search trống, trả lại toàn bộ danh sách
      if (!keyword) {
        state.listData = state.originalListData;
      } else {
        state.listData = state.originalListData.filter((item) =>
          item.name?.toLowerCase().includes(keyword)
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addStudent,
  deleteStudent,
  getStudentByID,
  updateStudent,
  searchStudent,
} = StudentSlice.actions;

export default StudentSlice.reducer;
