import { qlsvActions } from "../actions/qlsv";

const initalState = {
  studentArr: [],
  loading: false,
};

export const qlsvReducer = (state = initalState, action) => {
  switch (action.type) {
    case qlsvActions.ADD_ONE_SV:
      return { ...state, studentArr: [...state.students, action.payload] };

    case qlsvActions.SET_ALL_SV:
      console.log("DEBUG IN REDUCER -> ", action.payload);
      return { ...state, loading: false, studentArr: action.payload };

    case qlsvActions.UPDATE_ONE_SV:
      const newSvArr = [...state.studentArr];
      const foundSvIdx = state.studentArr.findIndex((sv) => sv.id === action.payload.id);
      if (foundSvIdx < 0) return { ...state };
      newSvArr.splice(foundSvIdx, 1, action.payload);
      return { ...state, studentArr: newSvArr };

    default:
      return state;
  }
};
