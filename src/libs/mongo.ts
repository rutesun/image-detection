import * as mongoose from "mongoose";

class Mongo {
  public save(model: mongoose.Document): PromiseLike<any> {
    return new Promise((resolve, reject) => {
      model.save((err, doc) => {
        if (err) reject(err);
        console.debug(JSON.stringify(doc));
        resolve(doc);
      })
    })
  }

  public list(model: mongoose.Model<mongoose.Document>, query: object = {}, sort: object = null): PromiseLike<any> {
    return new Promise((resolve, reject) => {
      model.find(query, null, sort, (err, doc) => {
        if (err) reject(err);
        console.debug(JSON.stringify(doc));
        resolve(doc); 
      })
    });
  }

}


export default Mongo;