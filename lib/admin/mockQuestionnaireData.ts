export type QuestionnaireFieldId =
  | 'multiple-choice'
  | 'text-input'
  | 'file-upload'
  | 'date-time-picker';

export type QuestionnaireField = {
  id: QuestionnaireFieldId;
  label: string;
  enabled: boolean;
};

export type QuestionnaireSettings = {
  createQuestionsEnabled: boolean;
  fields: QuestionnaireField[];
  assignToCategoryEnabled: boolean;
};

export const defaultQuestionnaireSettings: QuestionnaireSettings = {
  createQuestionsEnabled: true,
  fields: [
    { id: 'multiple-choice', label: 'Multiple Choice', enabled: true },
    { id: 'text-input', label: 'Text Input', enabled: true },
    { id: 'file-upload', label: 'File Upload', enabled: true },
    { id: 'date-time-picker', label: 'Date/Time Picker', enabled: false },
  ],
  assignToCategoryEnabled: true,
};
