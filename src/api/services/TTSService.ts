import { Service } from 'typedi';
import textToSpeech from '@google-cloud/text-to-speech';
import { google } from '@google-cloud/text-to-speech/build/protos/protos';

@Service()
export class TTSService {
  async getAudioFromWord(
    _word: string,
    _languageCode: string
  ): Promise<string | Uint8Array | null | undefined> {
    return '';
  }
}