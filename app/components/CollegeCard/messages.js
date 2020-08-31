/*
 * CollegeCard Messages
 *
 * This contains all the text for the CollegeCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CollegeCard';

export default defineMessages({
  subHeading: {
    id: `${scope}.subHeading`,
    defaultMessage: 'Per Semester (3months)',
  },
  match: {
    id: `${scope}.match`,
    defaultMessage: '93% Match : ',
  },
});
