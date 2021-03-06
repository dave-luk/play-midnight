import React, { Fragment } from 'react';

import ModalWrapper from './ModalWrapper';
import StyledNotification from './NotificationModal.styles';

import PlayMidnightLogo from 'components/PlayMidnightLogo';

const NotificationModal = ({ details, ...props }) => {
  const { DETAILS, Template } = details.notification;
  const title = (
    <Fragment>
      <div className="Modal__header-image">
        <PlayMidnightLogo style={{ marginBottom: 5 }} />
      </div>
      <h2 className="Modal__header-title">
        Play Midnight <em>Material</em>
      </h2>
      <h6 className="Modal__header-version">
        {`v${details.version} by `}
        <a href="http://christieman.com/" target="_blank" rel="noopener noreferrer">
          Chris Tieman
        </a>
      </h6>
    </Fragment>
  );

  return (
    <StyledNotification>
      <ModalWrapper
        {...props}
        title={title}
        collapse
        useAccentButton
        footNote={`You won't see this notification again for v${details.version}`}
        closeText={DETAILS.buttonText || 'Awesome!'}
        cancelButton={false}
        locked
      >
        <div className="Modal__content-container">
          <Template />
        </div>
      </ModalWrapper>
    </StyledNotification>
  );
};

export default NotificationModal;
