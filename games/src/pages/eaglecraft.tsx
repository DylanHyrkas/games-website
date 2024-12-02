import React, { useState, useRef, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp, faExpand } from '@fortawesome/free-solid-svg-icons';

const EagleCraftPage: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Check URL parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const muteParam = urlParams.get('mute');
    if (muteParam === 'yes') {
      setIsMuted(true);  // Set mute state to true if 'mute=yes' is in the URL
    } else if (muteParam === 'no') {
      setIsMuted(false);  // Set mute state to false if 'mute=no' is in the URL
    }
  }, []);

  // Toggle mute functionality
  const toggleMute = () => {
    if (iframeRef.current) {
      // Access the iframe's content window and mute the entire audio or video
      const iframeWindow = iframeRef.current.contentWindow;
      if (iframeWindow) {
        // Try to mute/unmute all <audio> or <video> elements in the iframe
        const audioElements = Array.from(iframeWindow.document.querySelectorAll('audio, video')) as HTMLMediaElement[];
        audioElements.forEach((audio) => {
          audio.muted = !isMuted;
        });
      }
    }
    setIsMuted(!isMuted); // Toggle the state
  };

  // Toggle fullscreen functionality
  const toggleFullscreen = () => {
    if (iframeRef.current) {
      iframeRef.current.requestFullscreen(); // Only request fullscreen
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>EagleCraft</h2>

      {/* Buttons for mute and fullscreen */}
      <div style={{ marginBottom: '10px' }}>
        <IconButton onClick={toggleMute}>
          <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
        </IconButton>
        <IconButton onClick={toggleFullscreen}>
          <FontAwesomeIcon icon={faExpand} />
        </IconButton>
      </div>

      <iframe
        ref={iframeRef}
        src="/eaglecraft/index.html"
        title="EagleCraft"
        style={{
          width: '100%',
          height: '600px',
          border: 'none',
        }}
      ></iframe>
    </div>
  );
};

export default EagleCraftPage;
