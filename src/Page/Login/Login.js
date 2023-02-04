// import { id } from 'date-fns/locale';
import React, { useEffect } from 'react'
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
function Login() {

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  let signInError;
  const  navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  if (loading || googleLoading) {
    return <Loading></Loading>
  }
  if (error || googleError) {
    signInError = <p className='text-red-500 text-center'><small>{error?.message || googleError?.message}</small>  </p>
  }

 
  if (user || googleUser) {
    navigate(from, {replace: true});
  }


  const onSubmit = data => {
    // console.log(data)
    signInWithEmailAndPassword(data.email, data.password)
  };

  return (

    <div class='flex h-screen justify-center items-center'>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email Address is required"
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valied Email'
                  }
                })}
              />
              <label class="label">
                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="password"
                placeholder="Password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required"
                  },
                  pattern: {
                    value: /((?=.*\d)(?=.*[a-zA-Z])(?=(.*\W){2}).{8,})/,
                    message: 'Password Must contain 1 digit,1 alphabet,2 special character & 8 characters long'
                  }
                })}
              />
              <label class="label">
                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>

            {signInError}



            <input className='btn w-full max-w-xs text-white' type="submit" value='login' />
          </form>

          <p className='text-center'><small>New to Doctors Portal? <Link className='text-primary' to='/signUp'>Create New Account</Link> </small></p>

          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline "
          >Continue with Google</button>
        </div>
      </div>

    </div>
  )
}

export default Login