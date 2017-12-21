import { should, expect } from 'chai';
import 'mocha';

import { list } from '../src/service/image';

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

  it('query', async () => {
      let res = await list({});
      expect(res).be.ok
      return;
  }).timeout(10 * 1000)

  after((done) => {
    mongoose.disconnect(err => {
      done(err);
    })
  });
})