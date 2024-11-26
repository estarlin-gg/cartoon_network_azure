import { MdOutlineFileUpload } from "react-icons/md";

interface FileInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileInput = ({ onChange }: FileInputProps) => {
  return (
    <div className="mb-6">
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        className="hidden"
        id="imageUpload"
      />
      <label
        htmlFor="imageUpload"
        className="w-full bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer transition duration-300 ease-in-out flex items-center justify-center"
      >
        <MdOutlineFileUpload className="mr-2" size={20} />
        <span>Cargar Imagen</span>
      </label>
    </div>
  );
};
