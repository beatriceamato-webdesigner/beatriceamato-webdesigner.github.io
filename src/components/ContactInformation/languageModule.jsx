import React from 'react';
import { FormattedMessage } from 'react-intl';

const formattedMessage = {
  title: <FormattedMessage id="t.app.contract.title" defaultMessage="Contact Information" />,
  subtitle: (
    <FormattedMessage
      id="t.app.contract.subtitle"
      defaultMessage="Say something to start a live chat"
    />
  )
};

export default formattedMessage;
