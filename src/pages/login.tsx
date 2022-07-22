import LogoDark from '@components/icons/LogoDark';
import InputV2 from '@components/inputs/InputV2';
import FooterLayout from '@layouts/FooterLayout';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    formState: { errors },
  } = useForm<any>({});

  return (
    <div className="flex items-center bg-gradient-to-l from-emerald-700 to-emerald-100">
      <FooterLayout>
        <div className="mx-auto my-auto flex max-w-xs flex-col items-center justify-center rounded-2xl bg-white/75 p-10 shadow-2xl">
          <div>
            <div className="w-full">
              <LogoDark className="mx-2 w-24" />
            </div>
            <h1 className="my-4 w-full text-3xl font-bold">
              Bienvenido al sistema
            </h1>
            <form className="mt-12">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="peer h-10 w-full border-0 border-b-2 border-gray-300 bg-white/0 text-gray-900 placeholder-transparent focus:border-emerald-600 focus:outline-none focus:ring-0"
                  placeholder="Correo electrónico"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-sm text-gray-900 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Correo electrónico
                </label>
              </div>
              <div className="relative mt-10">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="peer h-10 w-full border-0 border-b-2 border-gray-300 bg-white/0 text-gray-900 placeholder-transparent outline-none focus:border-emerald-600 focus:outline-none focus:ring-0"
                  placeholder="Contraseña"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Contraseña
                </label>
              </div>
              <input
                type="sumbit"
                value="Ingresar"
                className="mt-16 block w-full cursor-pointer rounded bg-emerald-600/70 px-4 py-2 text-center font-semibold text-white hover:bg-emerald-600/50 focus:outline-none focus:ring focus:ring-emerald-600/50 focus:ring-opacity-80 focus:ring-offset-2"
              />
            </form>
            {/* <div className="my-4">
              <Input
                errorMessage={errors.email}
                label="Email"
                name="email"
                type="text"
                register={register}
              />
            </div>
            <div className="my-4">
              <Input
                errorMessage={errors.password}
                label="Contraseña"
                name="password"
                type="password"
                register={register}
              />
            </div> 
            <div className="my-4">
              <Button
                loading={false}
                text="Ingresar"
                type="button"
                onClick={() => console.log('hola')}
              />
            </div> */}
            <Link href="register">
              <p className="mt-4 cursor-pointer text-center text-sm">
                No tienes una cuenta?{' '}
                <span className="underline decoration-emerald-600 decoration-2 hover:text-emerald-600">
                  Regístrate
                </span>
              </p>
            </Link>
          </div>
        </div>
      </FooterLayout>
      <div className=" hidden w-full lg:block">
        <img className="aspect-1" src="/login.svg" alt="login" />
      </div>
    </div>
  );
};

export default Register;
