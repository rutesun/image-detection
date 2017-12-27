
class VisionType {
  private static _instance:VisionType = new VisionType();

  private types = {
    LABEL: 'LABEL_DETECTION', 
    FACE: 'FACE_DETECTION', 
    LANDMARK: 'LANDMARK_DETECTION',
    LOGO: 'LOGO_DETECTION' 
  }

  public static getInstance():VisionType {
    return VisionType._instance;
  }

  public getKey(type) {
    return this.types[type]
  }

  public supprtedTypes() {
    return this.types;
  }

  public isSupported(type: string) {
    return Object.keys(this.types).indexOf(type) !== -1
  }

}
export const visionType = VisionType.getInstance();
