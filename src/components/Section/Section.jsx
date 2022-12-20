import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrap } from './Section.styled';
import { Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionWrap>
      <Title>{title}</Title>
      {children}
    </SectionWrap>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
