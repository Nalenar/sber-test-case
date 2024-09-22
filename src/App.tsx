import {Carousel, CarouselSlide} from "@components/blocks/Carousel";
import {Div, CenteredLayout} from "@components/layout";

import {imgArr} from "./data/images";

import s from "@styles/App.module.scss";

const App = () => {
  return (
    <CenteredLayout className={s.root}>
      <Div className={s.background}>
        <Carousel className={s.carousel} cover navigation pagination autoPlay timeoutDuration={2000}>
          {({currentSlide}) => (
            <>
              {imgArr.map((slide, index) => (
                <CarouselSlide key={index} isShow={currentSlide === index}>
                  <Div className={s.slide}>
                    <img src={slide} />
                  </Div>
                </CarouselSlide>
              ))}
            </>
          )}
        </Carousel>
      </Div>
    </CenteredLayout>
  );
};

export default App;
