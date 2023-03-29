import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import { TelegramShareButton, TelegramIcon } from 'react-share';

const SOCIAL_BUTTON_SIZE = 32;

const propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

const defaultProps = {
  title: '',
  url: '',
};

const SocialShare = ({ title, url }) => (
  <Stack direction="row" spacing={1}>
    <TelegramShareButton title={title} url={url}>
      <TelegramIcon round size={SOCIAL_BUTTON_SIZE} />
    </TelegramShareButton>
  </Stack>
);

SocialShare.propTypes = propTypes;
SocialShare.defaultProps = defaultProps;

export default SocialShare;
