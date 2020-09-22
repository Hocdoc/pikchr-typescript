const factory = require('./a.out.js');
let pik: any;

export interface PikchrResult {
  svg?: string;
  errorAsHtml?: string;
}

export const pikchr = async (source: string): Promise<PikchrResult> => {
  if (!pik) {
    const instance = await factory();
    pik = instance.cwrap('pikchr', 'string', ['string']);
  }

  const result: string = pik(source);

  if (result.startsWith('<svg')) {
    return { svg: result };
  } else {
    return { errorAsHtml: result };
  }
};
