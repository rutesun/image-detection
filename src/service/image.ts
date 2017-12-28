import * as mongoose from "mongoose";
import env from '../environment';
import VisionSchema from '../models/vision_schema';
import Vision from '../libs/vision';
import Mongo from '../libs/mongo';

export let detect = async (uri: string, type: string) => {
  let res = await new Vision().detectByUri([uri], [type]);
  let model = new VisionSchema({url: uri, results: res});
  // just insert
  await new Mongo().save(model)
  return res;
}

export let list = async (query: object) => {
  return new Promise((resolve, reject) => {
    return VisionSchema.find(query, (err, docs) => {
      if (err) reject(err);
      resolve(docs);
    })
  })
}