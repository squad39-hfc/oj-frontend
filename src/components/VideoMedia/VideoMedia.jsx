import styles from './VideoMedia.module.css';

const VideoMedia = props => {
  const generateLink = link => {
    let newLink = link.split('=');
    newLink = newLink[1].split('&');
    return newLink[0];
  };

  const videoLink = generateLink(props.link);

  return (
    <div className={styles.VideoMedia}>
      <iframe
        // width="600"
        // height="400"
        src={`https://www.youtube.com/embed/${videoLink}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoMedia;
