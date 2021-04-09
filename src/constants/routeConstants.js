export const ROUTES = {
  HOME: '/',
  CANDIDATE: '/candidate',
  ADMIN: '/admin',
  REVIEWER: '/reviewer',
};

export const CANDIDATE_ROUTES = {
  OVERVIEW: '/overview/:id',
  CANDIDATE_DETAILS: '/:id/details',
  IDE: '/ide',
  RULES_AND_PROFILE: '/profile/create',
  ENDPAGE:'/endpage',
};

export const ADMIN_ROUTES = {
  HOME: '/home',
  LOGIN: '/login',
  CREATE_PROBLEM: '/create/problem',
  SHOW_CANDIDATE_LIST: '/candidate/list',
  SEND_INVITE: '/send/invite/:drifeid',
  DRIVE_RESULT: '/result',
};
