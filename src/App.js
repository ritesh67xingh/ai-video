import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputText from "./components/InputText";
import AvatarSelector from "./components/AvatarSelector";
import VoiceSelector from "./components/VoiceSelector";
import Video from "./components/Video";
import { generateVideo } from "./actions/video";

const App = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [avatar, setAvatar] = useState("neutral");
  const [voice, setVoice] = useState("Matthew");
  const { loading, error, url } = useSelector((state) => state.video);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleVoiceChange = (e) => {
    setVoice(e.target.value);
  };

  const handleGenerateVideo = () => {
    const apiKey = process.env.REACT_APP_D_ID_API_KEY;

    dispatch(generateVideo(apiKey, text, avatar, voice));
  };

  return (
    <div>
      <h1>AI Generated Video</h1>
      <InputText text={text} handleTextChange={handleTextChange} />
      <AvatarSelector avatar={avatar} handleAvatarChange={handleAvatarChange} />
      <VoiceSelector voice={voice} handleVoiceChange={handleVoiceChange} />
      <button onClick={handleGenerateVideo} disabled={loading}>
        {loading ? "Generating video..." : "Generate Video"}
      </button>
      {error && <p>{error}</p>}
      <Video url={url} />
    </div>
  );
};

export default App;
