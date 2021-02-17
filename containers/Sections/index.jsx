import { Fragment } from 'react';
import GrayLine from '../GrayLine';
import { SectionsBody, SectionsBodyContainer } from './styles';
import { SECTIONS } from '../../constants/sections';

const Sections = () => {
  const numberOfSections = SECTIONS.length;

  return (
    <SectionsBodyContainer>
      <SectionsBody>
        {SECTIONS.map((Section, index) => {
          const isLastElement = index + 1 === numberOfSections;

          return (
            <Fragment key={index}>
              <Section />
              {!isLastElement && <GrayLine />}
            </Fragment>
          );
        })}
      </SectionsBody>
    </SectionsBodyContainer>
  );
};

export default Sections;
