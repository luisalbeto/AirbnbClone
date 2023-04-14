'use client';
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";

const RegisterModal = () => {
  const RegisterModal = useRegisterModal();
  const[isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

const onSubmit: SubmitHandler<FieldValues> = (data) => {
  setIsLoading(true);

  axios.post('/api/regsiter', data)
    .then(() =>{
      RegisterModal.onClose();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    })
}
return(
    <Modal
      disabled={isLoading}
      isOpen={RegisterModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={RegisterModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      />
)
}


export default RegisterModal;  