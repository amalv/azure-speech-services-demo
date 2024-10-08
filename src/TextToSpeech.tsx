import { useState } from "react";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";

export const TextToSpeech: React.FC = () => {
  const [text, setText] = useState("");
  const [speech, setSpeech] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTextToSpeech = async () => {
    const speechConfig = sdk.SpeechConfig.fromSubscription(
      import.meta.env.VITE_AZURE_SPEECH_KEY,
      import.meta.env.VITE_AZURE_SPEECH_REGION,
    );
    const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
    const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

    synthesizer.speakTextAsync(
      text,
      (result) => {
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          setSpeech(`Speech synthesis succeeded for: ${text}`);
        } else {
          setSpeech(`Speech synthesis failed. Error: ${result.errorDetails}`);
        }
        synthesizer.close();
      },
      (error) => {
        setSpeech(`Speech synthesis failed. Error: ${error}`);
        synthesizer.close();
      },
    );
  };

  return (
    <div className="tts">
      <h2>Text-to-Speech</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text to convert to speech"
      />
      <button type="button" onClick={handleTextToSpeech}>
        Convert to Speech
      </button>
      <p>{speech}</p>
    </div>
  );
};
