import { TEMPLATE } from 'redux/admin/template/actionConstants';

// request
export const templateRequestAction = (payload) => ({
  type: TEMPLATE.TEMPLATE_REQUEST_ACTION,
  payload,
});

// success
export const templateSuccessAction = (payload) => ({
  type: TEMPLATE.TEMPLATE_SUCCESS_ACTION,
  payload,
});

// failure
export const templateFailureAction = (payload) => ({
  type: TEMPLATE.TEMPLATE_FAILURE_ACTION,
  payload,
});
