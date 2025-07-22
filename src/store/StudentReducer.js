import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listData: [],
  editStudent: null,
};

const StudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.listData.push(action.payload);
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
  },
});

// Action creators are generated for each case reducer function
export const { addStudent, deleteStudent, getStudentByID, updateStudent } =
  StudentSlice.actions;

export default StudentSlice.reducer;
