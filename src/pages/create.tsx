import Button from '@components/Button';
import Input from '@components/inputs/Input';
import { login } from '@store/counter/loginReducer';
import { useAppDispatch } from '@store/hooks';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { requester } from 'utils/requester';

interface Inputs {
  email: string;
  password: string;
}

const create = () => {
  const dispatch = useAppDispatch();
  const mutation = useMutation((formData) => {
    return requester.post('/login/', formData);
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    mutation.mutate({ email, password });
  };
  console.log(watch('email'));
  console.log(watch('password'));
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          labelClassName=" font-semibold"
          errorMessage={errors.email}
          label="Email"
          name="email"
          type="text"
          register={register}
        />

        <Input
          labelClassName=" font-semibold"
          errorMessage={errors.password}
          label="Contraseña"
          name="password"
          type="password"
          register={register}
        />

        <Button loading={false} text="Ingresar" type="submit" />
      </form>
    </>
  );
};

export default create;
