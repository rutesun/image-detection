import { should, expect } from 'chai';
import 'mocha';
import VisionSchema from '../src/models/vision_schema'

import * as mongoose from "mongoose";
import env from '../src/environment';

import Mongo from '../src/libs/mongo';

let dbEndpoint = env.getDbEndpoint();
should();
let model: mongoose.Document = null;

describe('mongodb test', () => {
  before((done) => {
    if (mongoose.connection.db) return done();
    try {
      mongoose.connect(dbEndpoint, { useMongoClient: true });

      model = new VisionSchema({
        url: "http://img.insight.co.kr/static/2017/05/11/700/767CRT3G7TTIP0A3NA40.jpg", 
        results: [
          {
            "mid": "/m/02q08p0",
            "description": "dish",
            "score": 0.96725047
          },
          {
            "mid": "/m/02wbm",
            "description": "food",
            "score": 0.93220645
          },
          {
            "mid": "/m/01ykh",
            "description": "cuisine",
            "score": 0.917778
          },
          {
            "mid": "/m/08d_8c",
            "description": "noodle soup",
            "score": 0.84407187
          },
          {
            "mid": "/m/01z1m1x",
            "description": "soup",
            "score": 0.82264364
          },
          {
            "mid": "/m/01r1z5",
            "description": "asian food",
            "score": 0.81583595
          }
        ]
      })
    } catch (e) {
      console.error(e);
    } finally {
      return done();
    }
  });

  it("save", (done) => {
    model.save((err, res) => {
      if (err) done(err);
      done();
    });
  })

  it("list", (done) => {
    VisionSchema.find({}, (err, docs) => {
      docs.length.should.greaterThan(1);
      done();
    })
  })

  it('save with helper', async () => {
    let res = await new Mongo().save(model);
    expect(res).to.be.ok;
  });

  it('list with helper', async () => {
    let res = await new Mongo().list(VisionSchema, {}, {});
    expect(res).to.be.ok;
  });

  after((done) => {
    mongoose.disconnect(err => {
      done(err);
    })
  });
});


