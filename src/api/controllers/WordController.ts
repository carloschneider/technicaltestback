import {
  JsonController,
  Param,
  Get,
} from 'routing-controllers';
import { Service } from 'typedi';
import { TTSService } from "../services/TTSService";

@JsonController('/words')
@Service()
export class WordController {
  constructor(public ttsService: TTSService) {}
  @Get('/:word/:languageCode', { transformResponse: false })
  async getWord(@Param('word') word: string, @Param('languageCode') languageCode: string): Promise<string | Uint8Array | null | undefined> {
    return this.ttsService.getAudioFromWord(word, languageCode);
  }
}
