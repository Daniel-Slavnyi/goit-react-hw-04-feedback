import React from 'react';
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
