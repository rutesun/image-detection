
class Source {
  uri: string

  constructor(uri: string) {
    this.uri = uri;
  }

  public toJSON() {
    return {
      source: {
        imageUri: this.uri
      }
    }
  }
}

class Feature {
  type: string
  size: number

  constructor(type: string, size: number) {
    this.type = type
    this.size = size;
  } 
  public toJSON() {
    return {
      type: this.type,
      maxResults: this.size
    }
  }
}

export default class Request {
  private _source: Source 
  private _features: Feature[]

  constructor(uri: string, types: string[], size: number) {
    this._source = new Source(uri);
    this._features = types.map(t => { return new Feature(t, size)})
  }

  public toJSON() {
      let json = {
        image: this._source.toJSON(),
        features: this._features.map((x) => x.toJSON())
      }
      return json
  }
}