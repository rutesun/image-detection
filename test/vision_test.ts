import { expect } from 'chai';
import 'mocha';
import Vision from '../src/libs/vision'

describe('Vision Library Test', () => {
  it('single uri request', async () => {
    let v = new Vision();
    let res = await v.detectByUri(['http://img.insight.co.kr/static/2017/05/11/700/767CRT3G7TTIP0A3NA40.jpg'], ['LABEL_DETECTION'])
    console.log(res);
    return;
  }).timeout(10 * 1000)

  it('multiple uri request', async () => {
    let v = new Vision();
    let res = await v.detectByUri([
      'http://img.insight.co.kr/static/2017/05/11/700/767CRT3G7TTIP0A3NA40.jpg',
      'http://cfile21.uf.tistory.com/image/275CC93F54FAD14912A5A1'
    ], ['LABEL_DETECTION'])
    console.log(res);
    return;
  }).timeout(10 * 1000)
})