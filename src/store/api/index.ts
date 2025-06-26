import { $fetch } from "@/utils/fetcher";
import { useMutation, useQuery } from "@tanstack/react-query";

const BASE_URL = "https://alibackend.duckdns.org";

export const signup = async (data: { email: string; password: string }) =>
  $fetch(`${BASE_URL}/authentication_app/signup/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: data,
  });

export const signin = async (data: { email: string; password: string }) =>
  $fetch(`${BASE_URL}/authentication_app/signin/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: data,
  });

export const getUserProfile = async (token: string) =>
  $fetch(`${BASE_URL}/authentication_app/user_profile/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    token,
  });

// --- REACT QUERY HOOKS ---
export const useSignup = () => useMutation({ mutationFn: signup });
export const useSignin = () => useMutation({ mutationFn: signin });
export const useUserProfile = (token: string) =>
  useQuery({
    queryKey: ["userProfile"],
    queryFn: () => getUserProfile(token),
    enabled: !!token,
  });
