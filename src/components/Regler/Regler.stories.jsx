// src/components/Regler/Regler.stories.jsx
import React from 'react';
import { Regler } from '.';


export default {
  title: 'Components/Regler',
  component: Regler,
  parameters: {
    docs: {
      description: {
        component: `
The **Regler** component shows a button that opens a modal with the rules of Gomoku.

### Features
- Opens a modal when clicked
- Displays game rules inside the modal
- Accessible with \`role="dialog"\` and \`aria-modal="true"\`

### Props
- **buttonLabel**: *(string)* → Custom text for the button (default: "Regler")
        `,
      },
    },
  },
};

 // 👉 Default usage
export const Default = {
 /*  args: {
    buttonLabel: 'Regler',
  }, */
};
/* 
// 👉 Example with custom button text
export const CustomLabel = {
  args: {
    buttonLabel: 'Show Rules',
  },
};  */
