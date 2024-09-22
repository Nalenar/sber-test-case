import {useState, useEffect, useRef, useCallback} from "react";
import cn from "classnames";

import {Div, SVG, Button} from "@/components";

import type {BaseComponentType} from "@/types/main.types";

import s from "./Carousel.module.scss";

interface Props extends Omit<BaseComponentType, "children"> {
  children: (props: {currentSlide: number}) => React.ReactNode;
  cover?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  autoPlay?: boolean;
  timeoutDuration?: number;
}

const Carousel = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideCountRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    slideCountRef.current = document.querySelectorAll(".slide").length;
  }, []);

  const nextSlide = useCallback(() => {
    if (slideCountRef.current && currentSlide === slideCountRef.current - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide]);

  const prevSlide = () => {
    if (slideCountRef.current && currentSlide === 0) {
      setCurrentSlide(slideCountRef.current - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePlayButton = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        nextSlide();
      }, props.timeoutDuration);

      return () => clearInterval(interval);
    }
  }, [props.timeoutDuration, currentSlide, nextSlide, isPlaying]);

  return (
    <Div {...props} className={cn(s.root, props.className)}>
      {props.children({currentSlide})}

      {/*Background Cover */}
      {props.cover && <Div className={cn(s.cover, "carousel__cover")} />}

      {/* Navigation */}
      {props.navigation && (
        <Div className={s.navigation}>
          <Button className={cn(s.toggle, s.toggle_left)} onClick={prevSlide}>
            <SVG.Arrow className={s.icon} />
          </Button>
          <Button className={cn(s.toggle, s.toggle_right)} onClick={nextSlide}>
            <SVG.Arrow className={s.icon} />
          </Button>
        </Div>
      )}

      {/* Pagination */}
      {props.pagination && (
        <Div className={s.pagination}>
          {Array.from({length: slideCountRef.current || 0}).map((_, index) => (
            <Button
              key={index}
              className={cn(s.circle, {[s.circle_active]: index === currentSlide})}
              onClick={() => goToSlide(index)}
            />
          ))}
        </Div>
      )}

      {/* Auto Play */}
      {props.autoPlay && (
        <Button className={s.autoPlay} onClick={handlePlayButton}>
          {!isPlaying ? <SVG.Play className={s.icon} /> : <SVG.Stop className={s.icon} />}
        </Button>
      )}
    </Div>
  );
};

export default Carousel;
