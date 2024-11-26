import axios from "axios";
import { Data } from "../models";

export class CustomVision {
  static AnalyzeURL = async (url: string | null): Promise<Data | undefined> => {
    try {
      const response = await axios.post<Data>(
        import.meta.env.VITE_API_URL,
        { Url: url },
        {
          headers: {
            "Prediction-Key": import.meta.env.VITE_Prediction_Key,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  };
}
