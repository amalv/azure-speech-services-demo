import { TextToSpeech } from "./TextToSpeech";
import { AutomaticSpeechRecognition } from "./AutomaticSpeechRecognition";

export const Demo: React.FC = () => {
  return (
    <div className="demo">
      <h1>Azure Speech Services Demo</h1>
      <TextToSpeech />
      <AutomaticSpeechRecognition />
    </div>
  );
};
