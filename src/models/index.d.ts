export interface Prediction {
  probability: number;
  tagId: string;
  tagName: string;
}

export interface Data {
  id: string;
  project: string;
  iteration: string;
  created: string;
  predictions: Prediction[];
}
