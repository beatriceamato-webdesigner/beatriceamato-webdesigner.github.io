import React from 'react';
import { FormattedMessage } from 'react-intl';

const formattedMessage = {
  title: <FormattedMessage id="t.app.hero.title" defaultMessage="Hi! I am Beatrice Amato" />,
  titleJob1: <FormattedMessage id="t.app.hero.titleJob1" defaultMessage="Digital Art Director" />,
  titleJob2: <FormattedMessage id="t.app.hero.titleJob2" defaultMessage="UI/UX Designer" />,
  subtitle: (
    <FormattedMessage
      id="t.app.hero.subtitle"
      defaultMessage="On this website, you will have access to a comprehensive list of clients I have collaborated with over time, as well as a selection of projects I have undertaken throughout the years."
    />
  ),
  and: <FormattedMessage id="t.app.hero.and" defaultMessage="and" />,
  downloadCV: <FormattedMessage id="t.app.general.downloadCV" defaultMessage="Download CV" />,
  findOutMore: <FormattedMessage id="t.app.general.findOutMore" defaultMessage="Find out more" />
};

export default formattedMessage;
