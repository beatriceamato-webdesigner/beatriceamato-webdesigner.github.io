import React from 'react';
import { FormattedMessage } from 'react-intl';

const formattedMessage = {
  title: <FormattedMessage id="t.app.aboutMe.title" defaultMessage="About me" />,
  subtitle1: (
    <FormattedMessage
      id="t.app.aboutMe.subtitle1"
      defaultMessage='Hello, I`m Beatrice. My hometown is Caltagirone, located in the inland of Sicily. I`ve always studied in Caltagirone at the "Steve Jobs" Academy, where I delved into <b>Digital Marketing</b> and <b>visual communication.</b> Later, I moved to Milan for work, specializing in <b>Digital Art Direction</b> and <b>UI/UX Design.</b>'
      values={{
        b: (chunks) => <b>{chunks}</b>
      }}
    />
  ),
  subtitle2: (
    <FormattedMessage
      id="t.app.aboutMe.subtitle2"
      defaultMessage="<b>If you`d like to learn more,</b> I encourage you to download my Curriculum Vitae below "
      values={{
        b: (chunks) => <b>{chunks}</b>
      }}
    />
  ),
  downloadCV: <FormattedMessage id="t.app.general.downloadCV" defaultMessage="Download CV" />
};

export default formattedMessage;
