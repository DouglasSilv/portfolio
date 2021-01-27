import { oneOf, string } from 'prop-types';
import { SkillRatingName, SkillRatingStars } from './styles';
import { TiStar, TiStarOutline } from 'react-icons/ti';
import { COLORS } from '../../constants/colors';

const SkillRating = ({ name, stars, className }) => {
  return (
    <div className={className}>
      <SkillRatingName>{name}</SkillRatingName>
      <SkillRatingStars>
        {Array(stars)
          .fill()
          .map((item, index) => (
            <TiStar key={index} size="35" color={COLORS.secondaryFont} />
          ))}
        {stars &&
          Array(5 - stars)
            .fill()
            .map((item, index) => (
              <TiStarOutline key={index} size="35" color={COLORS.secondaryFont} />
            ))}
      </SkillRatingStars>
    </div>
  );
};

SkillRating.propTypes = {
  name: string.isRequired,
  stars: oneOf([1, 2, 3, 4, 5]).isRequired,
  className: string,
};

export default SkillRating;
