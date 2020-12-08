/* eslint-disable react/no-children-prop */
import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Responsive = ({ children }) => (
  <div>
    <Desktop children={children} />
    <Tablet children={children} />
    <Mobile children={children} />
  </div>
);

Responsive.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default React.memo(Responsive);
