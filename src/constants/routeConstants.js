export const ROUTES = {
  HOME: '/',
  CANDIDATE: '/candidate',
  ADMIN: '/admin',
  REVIEWER: '/reviewer',
  ACCEPT_INVITATION: '/accept/invite/:token',
};

export const CANDIDATE_ROUTES = {
  OVERVIEW: '/overview/:id',
  CANDIDATE_DETAILS: '/:id/details',
  IDE: '/ide',
  RULES_AND_PROFILE: '/profile/create',
  ENDPAGE: '/endpage',
};

export const ADMIN_ROUTES = {
  HOME: '/home',
  PROBLEMS: '/problems',
  RULES: '/rules',
  EDIT_DRIVE: '/drive/:driveId/edit',
  CREATE_DRIVE: '/drive/create',
  SHOW_CANDIDATES: '/drive/:driveId/candidates',
  DRIVE_RESULT: '/drive/:driveId/result',
  INVITE_CANDIDATES: '/drive/:driveId/candidates/invite',
  PROBLEM_DETAILS: '/problem/:problemId/details',
  CREATE_PROBLEM: '/problem/create',
  EDIT_PROBLEM: '/problem/:problemId/edit',
  USER_PROFILE: '/profile',
};

export const ADMIN_AUTH_ROUTES = {
  LOGIN: '/login',
};
