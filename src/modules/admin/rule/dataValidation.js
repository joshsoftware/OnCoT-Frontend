export const validateData = (schema, data, setUserState) => {
  schema.validate(data, { abortEarly: false }).catch((err) => {
    err.inner.forEach((ele) => {
      if (ele.path === 'description') {
        setUserState({
          type: 'setErrTxt',
          payload: {
            subType: 'ruleErr',
            data: ele.message,
          },
        });
      }
    });
  });
};
