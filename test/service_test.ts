import { should, expect } from 'chai';
import 'mocha';

import { detect, list } from '../src/service/image';

import * as mongoose from "mongoose";
import env from '../src/environment';

let dbEndpoint = env.getDbEndpoint();

describe('service test', () => {
  before((done) => {
    if (mongoose.connection.db) return done();
    try {
      mongoose.connect(dbEndpoint, { useMongoClient: true });
    } catch (e) {
      console.error(e);
    } finally {
      return done();
    }
  });

  it('detect', async () => {
    let res = await detect('https://d3cbihxaqsuq0s.cloudfront.net/images/40583353_xl.jpg', 'LABEL_DETECTION')
    expect(res).be.ok
    console.info(res);
    return; 
  }).timeout(10 * 1000);

  it('list', async () => {
      let res = await list({});
      expect(res).be.ok
      console.log(res)
      return;
  }).timeout(10 * 1000);

  after((done) => {
    mongoose.disconnect(err => {
      done(err);
    })
  });
})