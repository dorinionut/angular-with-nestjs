import { ICharacter } from './character.interface';

export interface ICharactersResult {
    "code": number,
    "status": string,
    "copyright": string,
    "attributionText": string,
    "attributionHTML": string,
    "data": {
      "offset": number,
      "limit": number,
      "total": number,
      "count": number,
      "results": ICharacter[]
    },
    "etag": string
  }