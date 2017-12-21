import { should, expect } from 'chai';
import 'mocha';
import Request from '../src/models/request'

describe('model test',  () => {
  it('make request model', (done) => {
    let r = new Request("htts://google.com", ["LABEL_DETECTION"], 10)
    let res = { image: { source: { imageUri:'htts://google.com' } }, features: [ { type: 'LABEL_DETECTION', maxResults: 10 } ] }
    console.log(r.toJSON());

    expect(r.toJSON()).to.deep.eq(res);
    done();
  })
})