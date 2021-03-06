import React, { useRef } from 'react';
import { about_content } from 'shared/assets/context';
import landscape from 'shared/assets/images/landscapeAnimated.mp4';
import './about.sass';

interface BackgroundVideoProps {
  onEnded: () => void;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = (props) => (
  <div className="main-page__video">
    <video
      muted
      autoPlay
      onLoadStart={() => console.log('VIDEO LOADING STARTS')}
      onLoadedData={() => console.log('VIDEO LOADING ENDS')}
      {...props}>
      <source type='video/mp4' src={landscape} />
    </video>
  </div>
);

const AboutPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  function onVideoEnds() {
    const explosureDiv = document.createElement('div');
    explosureDiv.className ="main-page__explosure"

    contentRef.current!.style.top = '50%';
    contentRef.current!.style.transform = 'translateY(-50%)';

    titleRef.current!.style.color = 'white';
    contentRef.current!.appendChild(explosureDiv);
    explosureDiv.onanimationend = () => contentRef.current!.removeChild(explosureDiv);
  }

  return (
    <div className="main-page">
      <BackgroundVideo onEnded={onVideoEnds} />
      <div className="main-page__spread">
        <div className="main-page__content" ref={contentRef}>
          <div className="main-page__title" ref={titleRef}>ABOUT</div>
          <div className="main-page__context">{about_content}</div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
