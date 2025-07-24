import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listData: [],
  editStudent: null,
  searchKeyword: "",
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
    searchStudent: (state, action) => {
      state.searchKeyword = action.payload;
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
