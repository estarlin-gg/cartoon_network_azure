/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Data } from "../models";

export class CustomVision {
  static AnalyzeURL = async (
    url: string | null
  ): Promise<Data | string | undefined> => {
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
    } catch (error: any) {
      if (error.response?.status === 400) {
        return "El formato de la imagen no es válido o no se puede procesar.";
      }

      console.log(error);
      return "Hubo un problema al procesar la URL.";
    }
  };
}
