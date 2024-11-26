import { ChangeEvent, useState } from "react";
import { CustomVision } from "../services/CustomVision";
import { Data } from "../models";
import axios from "axios";

export const useFetch = () => {
  const [inputUrl, setInputUrl] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [response, setResponse] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const HandleUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value);
  };

  const HandleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    console.log(selectedFile);

    if (selectedFile) {
      const validTypes = ["image/jpeg", "image/png", "image/bmp"];
      if (!validTypes.includes(selectedFile.type)) {
        setError("Solo se permiten archivos .jpg, .png o .bmp.");
        setFile(undefined);
        return;
      }
      if (selectedFile.size > 4 * 1024 * 1024) {
        setError("El archivo no debe exceder los 4 MB.");
        setFile(undefined);
        return;
      }

      setError(null);
      setFile(selectedFile);

      try {
        setIsLoading(true);
        setResponse(null);

        const imageURL = await uploadToCloudinary(selectedFile);
        setImageUrl(imageURL);
        const res = await CustomVision.AnalyzeURL(imageURL);
        setResponse(res!);
        setIsLoading(false);
      } catch (error) {
        console.log("Error al procesar la imagen:", error);
        setError("Error al subir la imagen a Cloudinary o al procesarla.");
        setResponse(null);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const SubmitUrl = async () => {
    if (!inputUrl?.trim()) {
      setError("La URL no puede estar vacía.");
      return;
    }
    try {
      setIsLoading(true);
      setResponse(null);
      const data = await CustomVision.AnalyzeURL(inputUrl);
      setResponse(data || null);
      setImageUrl(inputUrl);
      setError(null);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError("Hubo un error al procesar la URL.");
    } finally {
      setIsLoading(false);
    }
  };

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "cartoon");
    formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.secure_url) {
        return response.data.secure_url;
      } else {
        throw new Error("No se recibió una URL segura.");
      }
    } catch (error) {
      console.error("Error al subir la imagen a Cloudinary:", error);
      throw new Error("Error al subir la imagen a Cloudinary.");
    }
  };

  return {
    file,
    imageUrl,
    response,
    error,
    isLoading,
    HandleUrl,
    SubmitUrl,
    HandleFile,
  };
};
