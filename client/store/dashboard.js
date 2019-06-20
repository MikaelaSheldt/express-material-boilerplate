// INITIAL STATE
const allStudents = {
  students: []
};

// ACTION TYPES
const GOT_STUDENTS = "GOT_STUDENTS";

// ACTION CREATORS
const gotStudents = students => ({
  type: GOT_STUDENTS,
  students
});

// THUNK CREATORS
export const getStudents = attendancePercentage => async dispatch => {
  const {data} = await axios.get(`/api/studentss/${attendancePercentage}`);
  dispatch(gotStudents(data));
};

// REDUCER
export default function(state = allStudents, action) {
  switch (action.type) {
    case GOT_STUDENTS: {
      return action.students;
    }
    default:
      return state;
  }
}
