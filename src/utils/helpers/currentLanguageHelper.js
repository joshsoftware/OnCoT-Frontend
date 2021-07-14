export const currentLangState = (
  code,
  answer,
  problemId,
  languages,
  backupLanguageId,
  languageSelected,
  backupCodeProblemId,
  submissionAllowed,
  leftSubmissionCount,
) => {
  let currCode = code;
  let currLanguageSelected = languageSelected;
  let currSubmissionAllowed = submissionAllowed;
  if ((!currCode || currCode === '') && answer) {
    currCode = answer;
    currLanguageSelected = languages.find((item) => item.id === backupLanguageId);
    currSubmissionAllowed = leftSubmissionCount;
  } else if ((!currCode || currCode === '') && (!answer || backupCodeProblemId !== problemId)) {
    currCode = '# Write your code here (Accept input from stdin using gets and print output using puts)';
    const [defaultLang] = languages;
    currLanguageSelected = defaultLang;
  }
  return { currCode, currLanguageSelected, currSubmissionAllowed };
};
