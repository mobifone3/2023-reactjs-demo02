export const qlsvActions = {
  ADD_ONE_SV: "qlsv/ADD_ONE_SV",
  SET_ALL_SV: "qlsv/SET_ALL_SV",
  UPDATE_ONE_SV: "qlsv/UPDATE_ONE_SV",

  addOneSv: (newSv) => {
    return {
      type: qlsvActions.ADD_ONE_SV,
      payload: newSv,
    };
  },

  setAllSv: (students) => {
    return {
      type: qlsvActions.SET_ALL_SV,
      payload: students,
    };
  },

  updateOneSv: (updatedSv) => {
    return {
      type: qlsvActions.UPDATE_ONE_SV,
      payload: updatedSv,
    };
  },
};
