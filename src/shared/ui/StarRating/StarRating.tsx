import { FC, MouseEvent, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Icon } from "../Icon/Icon";
import { HStack } from "../Stack";
import StarIcon from "../../assets/icons/star.svg?react";
import cl from "./StarRating.module.scss";

interface StarRatingProps {
  className?: string;
  onSelect: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = (props) => {
  const { className, size = 24, selectedStars = 0, onSelect } = props;

  const [hoveredStar, setHoveredStar] = useState<number>(selectedStars);

  const handleMouseOver = (count: number) => (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setHoveredStar(count);
  };

  const handleMouseLeave = () => {
    setHoveredStar(0);
  };

  const handleStarClick = (count: number) => () => {
    onSelect(count);
  };

  const renderStars = () =>
    stars.map((star) => (
      <Icon
        onMouseOver={handleMouseOver(star)}
        onMouseLeave={handleMouseLeave}
        onClick={handleStarClick(star)}
        Svg={StarIcon}
        className={classNames(cl.star, {
          [cl.hovered]: star <= hoveredStar,
          [cl.selected]: star <= selectedStars,
        })}
        width={size}
        height={size}
        key={star}
        data-testid={`StarRating.${star}`}
        data-selected={star <= hoveredStar}
      />
    ));

  return (
    <HStack gap="4" className={classNames(cl.StarRating, {}, [className])}>
      {renderStars()}
    </HStack>
  );
};
