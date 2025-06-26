import { useSignup } from "@/store/api";
import { setAuthError, setAuthLoading, setAuthUser } from "@/store/features/auth/authSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

interface Props extends React.ComponentProps<"div"> {}

export const SignupPage = ({ ...props }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate, isPending } = useSignup();
  const error = useSelector((state: any) => state.auth.error);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      dispatch(setAuthError("Passwords do not match"));
      return;
    }
    dispatch(setAuthLoading(true));
    mutate(
      { email, password },
      {
        onSuccess: (data: any) => {
          dispatch(
            setAuthUser({ user: data.user || null, token: data.token || data.access || "" }),
          );
          dispatch(setAuthLoading(false));
          dispatch(setAuthError(null));
          navigate("/login");
        },
        onError: (err: any) => {
          dispatch(setAuthError(err.message || "Signup failed"));
          dispatch(setAuthLoading(false));
        },
      },
    );
  };

  return (
    <div {...props}>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 text-black sm:px-6 lg:px-8 dark:text-black">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nil%20vyaa-01%201-s1lG2XvZDZZWuxbLHlsQtygDfSadsB.png"
              alt="Logo"
              className="mb-8 h-16 w-auto"
            />
            <h2 className="text-3xl font-bold text-gray-900">Create account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter The Email Address Associated With Your Account. We'll Send You An OTP To Your
              Email.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  New Password
                </label>
                <div className="relative mt-1">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {/* Eye icon here */}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="h-5 w-5 text-gray-400"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative mt-1">
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {/* Eye icon here */}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="h-5 w-5 text-gray-400"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0-29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {error && <div className="text-sm text-red-500">{error}</div>}
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
              disabled={isPending}
            >
              {isPending ? "Signing up..." : "Sign Up"}
            </button>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already Have An Account?{" "}
                <a
                  className="font-medium text-blue-600 hover:text-blue-500"
                  href="/login"
                  data-discover="true"
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
