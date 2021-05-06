export const validateData = (schema, data, setUserState) => {
  schema.validate(data, { abortEarly: false }).catch((err) => {
    err.inner.forEach((ele) => {
      if (ele.path === 'input') {
        setUserState({
          type: 'setErrTxt',
          payload: {
            subType: 'inputErr',
            data: ele.message,
          },
        });
      }
      if (ele.path === 'output') {
        setUserState({
          type: 'setErrTxt',
          payload: {
            subType: 'outputErr',
            data: ele.message,
          },
        });
      } if (ele.path === 'marks') {
        setUserState({
          type: 'setErrTxt',
          payload: {
            subType: 'marksErr',
            data: ele.message,
          },
        });
      }
    });
  });
};
