import React from 'react';
import { FormattedMessage } from 'react-intl';

const formattedMessage = {
  profileName: <FormattedMessage id="t.app.profileName" defaultMessage="Beatrice Amato" />,
  aboutMe: <FormattedMessage id="t.app.header.aboutMe" defaultMessage="About me" />,
  portfolio: <FormattedMessage id="t.app.header.portfolio" defaultMessage="Portfolio" />,
  contact: <FormattedMessage id="t.app.header.contact" defaultMessage="Contact" />,
  en: <FormattedMessage id="t.app.header.en" defaultMessage="EN" />,
  it: <FormattedMessage id="t.app.header.it" defaultMessage="IT" />
};

export default formattedMessage;
