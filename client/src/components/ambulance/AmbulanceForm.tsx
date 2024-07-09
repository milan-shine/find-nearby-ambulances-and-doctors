import React, { useState } from 'react'
import styled from 'styled-components';
import { Ambulance } from './AmbulanceList';
import { useForm } from 'react-hook-form';

interface AmbulanceFormProps {
  ambulance?: Ambulance;
  onSubmit: (data: Ambulance, file: File | null) => void;
}

const AmbulanceForm: React.FC<AmbulanceFormProps> = ({ ambulance, onSubmit }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Ambulance>({
    defaultValues: ambulance || {}
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(ambulance?.image);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  console.log(isSubmitting)
  const onSubmitForm = (data: Ambulance) => {
    onSubmit(data, selectedFile);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <Input
        {...register('title', { required: 'Title is required' })}
        placeholder="Title"
      />
      {errors.title && <span>{errors.title.message}</span>}

      <Input
        {...register('description', { required: 'Description is required' })}
        placeholder="Description"
      />
      {errors.description && <span>{errors.description.message}</span>}

      <Input
        {...register('location', { required: 'Location is required' })}
        placeholder="Location"
      />
      {errors.location && <span>{errors.location.message}</span>}

      <Input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
      />

      {previewUrl && (
        <ImagePreview>
          <img src={previewUrl} alt="Preview" />
        </ImagePreview>
      )}

      <Button type="submit" disabled={isSubmitting}>{ambulance ? 'Update' : 'Create'}</Button>
    </Form>
  )
}

export default AmbulanceForm;


const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ImagePreview = styled.div`
  margin-bottom: 10px;
  img {
    max-width: 100%;
    max-height: 200px;
  }
`;