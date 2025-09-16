import ResetButton from './ResetButton';

export default {
  title: 'Components/ResetButton',
  component: ResetButton,
  args: {
    label: 'Återställ',
    onClick: () => {}
  }
};

export const Default = {};
export const MedText = { args: { label: 'Starta om spelet' } };
