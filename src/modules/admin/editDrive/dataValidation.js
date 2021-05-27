export const validateData = (schema, putData, setEditDrive) => {
  schema.validate(putData, { abortEarly: false }).catch((err) => {
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
      } if (ele.path === 'drives_problems_attributes[0].problem_id') {
        setEditDrive({
          type: 'problemErrTxt',
          payload: ele.message,
        });
      }
    });
  });
};
