import React, { useState } from 'react'
import styled from 'styled-components';
import { Doctor } from './DoctorList';
import { useForm } from 'react-hook-form';

interface DoctorFormProps {
  doctor?: Doctor;
  onSubmit: (data: Doctor, file: File | null) => void;
}

const DoctorForm: React.FC<DoctorFormProps> = ({ doctor, onSubmit }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Doctor>({
    defaultValues: doctor || {}
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(doctor?.image);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const onSubmitForm = (data: Doctor) => {
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

      <Button type="submit" disabled={isSubmitting}>{doctor ? 'Update' : 'Create'}</Button>
    </Form>
  )
}

export default DoctorForm;


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