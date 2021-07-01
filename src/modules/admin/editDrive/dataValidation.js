export const validateData = (schema, validData, setEditDrive) => {
  schema.validate(validData, { abortEarly: false }).catch((err) => {
    err.inner.forEach((ele) => {
      if (ele.path === 'name') {
        setEditDrive({
          type: 'nameErrTxt',
          payload: 'name is a required field',
        });
      }
      if (ele.path === 'description') {
        setEditDrive({
          type: 'descriptionErrTxt',
          payload: ele.message,
        });
      } if (ele.path === 'start_time') {
        setEditDrive({
          type: 'start_timeErrTxt',
          payload: ele.message,
        });
      } if (ele.path === 'end_time') {
        setEditDrive({
          type: 'end_timeErrTxt',
          payload: ele.message,
        });
      } if (ele.path === 'currentProblems') {
        setEditDrive({
          type: 'problemErrTxt',
          payload: ele.message,
        });
      }
    });
  });
};
