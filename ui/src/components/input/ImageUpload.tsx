import { Upload } from 'phosphor-react';
import React, { useState, DragEvent, ChangeEvent } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    handleImageUpload(event.dataTransfer.files);
  };

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      handleImageUpload(files);
    }
  };

  const handleImageUpload = (files: FileList) => {
    const file = files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataURL = reader.result as string;
        setImage(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <p className="text-gray-400">Campaign Image*</p>
      <div className="grid auto-rows-fr grid-cols-12 gap-5 items-center">
        <div className="mt-4  col-span-6 flex w-full flex-col items-center justify-center">
          <label
            className="border-2 h-[200px] w-full border-dashed border-gray-500 p-4 text-center cursor-pointer"
            onDrop={(e) => handleDrop(e as React.DragEvent<HTMLLabelElement>)}
            onDragOver={handleDragOver}
          >
            {image ? (
              <div>Uploaded</div>
            ) : (
              <div className=" leading-7 text-gray-400">
                <div className=" w-full flex justify-center">
                  <Upload size={40} />
                </div>

                <p className="mt-4">Drag & drop your image here</p>
                <p>or</p>
                <label className="cursor-pointer" htmlFor="actual-btn">
                  Choose File
                </label>
                <input
                  id="actual-btn"
                  type="file"
                  accept="image/*"
                  className="hidden w-full"
                  onChange={handleFileInput}
                />
              </div>
            )}
          </label>
        </div>
        {image && (
          <div className="col-span-6 ">
            <img className="h-[200px]" src={image} />
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUpload;
