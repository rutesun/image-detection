import * as mongoose from "mongoose";
import env from '../environment';
import VisionSchema from '../models/vision_schema'

export let detect = async (uris: string[], types: string[]) => {

}

export let list = async (query: object) => {
  return new Promise((resolve, reject) => {
    return VisionSchema.find(query, (err, docs) => {
      if (err) reject(err);
      resolve(docs);
    })
  })
}