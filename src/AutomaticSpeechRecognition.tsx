import { useState } from "react";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";

export const AutomaticSpeechRecognition: React.FC = () => {
  const [recognizedText, setRecognizedText] = useState("");

  const handleSpeechRecognition = () => {
    const speechConfig = sdk.SpeechConfig.fromSubscription(
      import.meta.env.VITE_AZURE_SPEECH_KEY,
      import.meta.env.VITE_AZURE_SPEECH_REGION,
    );
    speechConfig.speechRecognitionLanguage = "en-US";

    const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizeOnceAsync((result) => {
      switch (result.reason) {
        case sdk.ResultReason.RecognizedSpeech:
          setRecognizedText(`RECOGNIZED: Text=${result.text}`);
          break;
        case sdk.ResultReason.NoMatch:
          setRecognizedText("NOMATCH: Speech could not be recognized.");
          break;
        case sdk.ResultReason.Canceled:
          {
            const cancellation = sdk.CancellationDetails.fromResult(result);
            setRecognizedText(`CANCELED: Reason=${cancellation.reason}`);

            if (cancellation.reason === sdk.CancellationReason.Error) {
              setRecognizedText(
                `CANCELED: ErrorCode=${cancellation.ErrorCode}`,
              );
              setRecognizedText(
                `CANCELED: ErrorDetails=${cancellation.errorDetails}`,
              );
              setRecognizedText(
                "CANCELED: Did you set the speech resource key and region values?",
              );
            }
          }
          break;
      }
      recognizer.close();
    });
  };

  return (
    <div className="asr">
      <h2>Speech Recognition</h2>
      <button type="button" onClick={handleSpeechRecognition}>
        Start Recognition
      </button>
      <p>{recognizedText}</p>
    </div>
  );
};
