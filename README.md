# Azure Speech Services Demo

![Azure Speech Services Demo](https://github.com/amalv/azure-speech-services-demo/blob/main/screenshot.png)

A demo repository showcasing the implementation of Text-to-Speech (TTS) and Automatic Speech Recognition (ASR) using Microsoft Azure Speech Services.

## Technologies Used

- 🎤 **Microsoft Azure Speech Services**: For TTS and ASR capabilities.
- ⚡ **Vite**: For fast front-end tooling.
- ⚛️ **React**: For building user interfaces.
- 🟦 **TypeScript**: For static type checking.
- 🧪 **Vitest**: For testing React components.
- 🍞 **Bun**: As a dependency manager.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it [here](https://nodejs.org/).
- **Bun**: Install Bun by following the instructions [here](https://bun.sh/).

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/amalv/azure-speech-services-demo.git
    cd azure-speech-services-demo
    ```

2. Install dependencies using Bun:
    ```sh
    bun install
    ```

## Configuration

1. **Azure Speech Services**: 
    - Set up an Azure account and create a Speech Services resource. You can follow the instructions [here](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/).
    - Update the configuration file with your Azure Speech Services API key and region.

## Development

To start the development server:
```sh
bun run dev