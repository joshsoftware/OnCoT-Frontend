export const validateData = (schema, postData, setCreateDrive) => {
  schema.validate(postData, { abortEarly: false }).catch((err) => {
    err.inner.forEach((ele) => {
      if (ele.path === 'name') {
        setCreateDrive({
          type: 'nameErrTxt',
          payload: 'name is a required field',
        });
      }
      if (ele.path === 'description') {
        setCreateDrive({
          type: 'descriptionErrTxt',
          payload: ele.message,
        });
      } if (ele.path === 'start_time') {
        setCreateDrive({
          type: 'start_timeErrTxt',
          payload: ele.message,
        });
      } if (ele.path === 'end_time') {
        setCreateDrive({
          type: 'end_timeErrTxt',
          payload: ele.message,
        });
      } if (ele.path === 'drives_problems_attributes[0].problem_id') {
        setCreateDrive({
          type: 'problemErrTxt',
          payload: ele.message,
        });
      }
    });
  });
};
