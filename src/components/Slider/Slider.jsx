import React from "react";
import Slider from "react-slick";
import s from './Slider.module.css';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className={s.skiderr} {...settings}>
      <div>
        <img className={s.kartinka} src="https://i.pinimg.com/736x/9f/c3/53/9fc353e3df0e7308f1e51aec86e51051.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://steamuserimages-a.akamaihd.net/ugc/5930748225733258414/516F18BDBC29E14C15302939787C2012E72A0A5E/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/736x/36/c7/2e/36c72eb286b0c033eaf1e7012665931a.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://www.meme-arsenal.com/memes/922da8efddbaf20b454fd9ba5b1054ff.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://www.meme-arsenal.com/memes/bb5817d583de9e28fab897f6db795dc0.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://avatars.mds.yandex.net/i?id=ad9e8b8e78f963fa39a0d94a5a15c1f9_l-8901646-images-thumbs&n=13"></img>
      </div>
    </Slider>
  );
}