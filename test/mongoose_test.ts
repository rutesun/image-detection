import { should, expect } from 'chai';
import 'mocha';
import VisionSchema from '../src/models/vision_schema'

import * as mongoose from "mongoose";
import env from '../src/environment';

let dbEndpoint = env.getDbEndpoint();
should();

describe('mongodb test', () => {
  beforeEach((done) => {
    if (mongoose.connection.db) return done();
    try {
      mongoose.connect(dbEndpoint, { useMongoClient: true });
    } catch (e) {
      console.error(e);
    }
    done();
  });

  it("save", (done) => {
    let model = new VisionSchema({
      url: "http://img.insight.co.kr/static/2017/05/11/700/767CRT3G7TTIP0A3NA40.jpg", results: [
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
        },
        {
          "mid": "/m/0clcjj",
          "description": "bún bò huế",
          "score": 0.8144441
        },
        {
          "mid": "/m/0b960h",
          "description": "okinawa soba",
          "score": 0.8079454
        },
        {
          "mid": "/m/01xw9",
          "description": "chinese food",
          "score": 0.760632
        },
        {
          "mid": "/m/0mfnf",
          "description": "noodle",
          "score": 0.74737877
        },
        {
          "mid": "/m/0b97cn",
          "description": "lamian",
          "score": 0.6856352
        },
        {
          "mid": "/m/06q545",
          "description": "kimchi jjigae",
          "score": 0.6781578
        },
        {
          "mid": "/m/02hz3p",
          "description": "chinese noodles",
          "score": 0.6714335
        },
        {
          "mid": "/m/09jy30",
          "description": "rice noodles",
          "score": 0.67028314
        },
        {
          "mid": "/m/0ddm59",
          "description": "asian soups",
          "score": 0.6603504
        },
        {
          "mid": "/m/03ldyd",
          "description": "pozole",
          "score": 0.6595612
        },
        {
          "mid": "/m/01z45gc",
          "description": "southeast asian food",
          "score": 0.6551787
        },
        {
          "mid": "/m/027rch",
          "description": "laksa",
          "score": 0.65121627
        },
        {
          "mid": "/m/014jz8",
          "description": "udon",
          "score": 0.6339912
        },
        {
          "mid": "/m/07hxn",
          "description": "thai food",
          "score": 0.62720925
        }
      ]
    })
    // console.debug('model = ', model);
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
});


