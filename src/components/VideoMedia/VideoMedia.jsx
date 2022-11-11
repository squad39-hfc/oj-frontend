const VideoMedia = props => {
  const generateLink = link => {
    let newLink = link.split('=');
    newLink = newLink[1].split('&');
    return newLink[0];
  };

  const videoLink = generateLink(props.link);

  console.log(videoLink);

  return (
    <iframe
      width="600"
      height="400"
      src={`https://www.youtube.com/embed/${videoLink}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoMedia;
