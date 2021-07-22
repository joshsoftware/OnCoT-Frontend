import React, { useReducer, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TemplateComponent from 'modules/admin/template/TemplateComponent';
import { reducer } from 'modules/admin/template/TemplateContainer/reducer';
import { templateRequestAction } from 'redux/admin/template/action';
import { getTemplates } from 'modules/admin/template/TemplateContainer/getTemplates';
import { Spinner } from 'core-components';
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';

const TemplateContainer = () => {
  const history = useHistory();
  const initialUserState = {
    templates: [],
  };
  const dispatch = useDispatch();

  const [updateTemplate, setUpdateTemplate] = useReducer(reducer, initialUserState);
  const [templatesIsLoading, setTemplatesIsLoading] = useState(true);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const [templatesDetails, setTemplatesDetails] = useState();
  const [languageSelected, setLanguageSelected] = useState({});
  const [code, setCode] = useState('');

  useEffect(async () => {
    const templatesData = await getTemplates();
    const { templates, templatesLoading } = templatesData;
    if (!templatesLoading) {
      setTemplatesDetails(templates);
      setTemplatesIsLoading(templatesLoading);
    }

    if (templatesDetails && templatesDetails.length > 0) {
      setCode(templatesDetails[0].code);
      setLanguageSelected({
        language_id: templatesDetails[0].language_id,
        language: templatesDetails[0].language,
      });
    }
    const templatesArray = templatesData !== undefined ? [...templatesData.templates] : [];
    // setUserState({
    //   type: 'setAndDeleteTestCase',
    //   payload: {
    //     subType: 'setTestCases',
    //     data: tcs,
    //   },
    // });
    setUpdateTemplate({
      type: 'templates',
      payload: templatesArray,
    });
  }, [templatesIsLoading]);
  console.log('updateTemplate', updateTemplate);

  const handleCode = (
    (value) => {
      // setCode(value);
      // setUpdateTemplate({
      //   type: 'code',
      //   payload: value,
      // });

      let index;
      console.log('templatesDetails', templatesDetails);
      console.log('value', templatesDetails[0].language_id);
      console.log('languageSelected', languageSelected.language_id);
      for (let i = 0; i < templatesDetails.length; i += 1) {
        console.log('00000', templatesDetails[i].language_id, index);
        if (templatesDetails[i].language_id === languageSelected.language_id) {
          index = i;
          break;
        }
      }
      console.log('value', value, index);
      setUpdateTemplate({
        type: 'updateTemplateCode',
        payload: {
          value,
          index,
        },
      });
    }
  );

  const handleLanguage = (
    (value) => {
      const data = {
        language_id: value.target.getAttribute('id'),
        language: value.target.getAttribute('language'),
        code: value.target.getAttribute('code'),
      };
      setLanguageSelected(data);
      setCode(data.code);
    }
  );

  const handleTitleChange = useCallback(
    (event) => {
      const title = event.target.value;
      setUpdateTemplate({
        type: 'code',
        payload: code,
      });
    },
    [updateTemplate.title],
  );

  const handleDescriptionChange = useCallback(
    (event) => {
      const description = event.target.value;
      setUpdateTemplate({
        type: 'language',
        payload: code,
      });
    },
    [updateTemplate.language],
  );

  // const handleCountChange = useCallback(
  //   (event) => {
  //     const submissionCount = event.target.value;
  //     setEditProblem({
  //       type: 'submissionCount',
  //       payload: submissionCount,
  //     });
  //   },
  //   [editProblem.submissionCount],
  // );

  const finishProblemEdit = useCallback(() => {
    history.push(ROUTES.ADMIN + ADMIN_ROUTES.PROBLEMS);
  });
  if (templatesIsLoading) {
    return <Spinner />;
  }
  console.log('templatesDetails', templatesDetails);
  console.log('updateTemplate', updateTemplate.templates);
  return (
    <TemplateComponent
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      // handleCountChange={handleCountChange}
      finishProblemEdit={finishProblemEdit}
      templatesDetails={updateTemplate.templates}
      templatesIsLoading={templatesIsLoading}
      dropdownOpen={dropdownOpen}
      toggle={toggle}
      code={code}
      languageSelected={languageSelected}
      handleLanguage={handleLanguage}
      handleCode={handleCode}
    />
  );
};
export default React.memo(TemplateContainer);
