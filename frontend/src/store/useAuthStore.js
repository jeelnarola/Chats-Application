import { create } from "zustand"
import { axiosInstance } from "../lib/axios"
import axios from 'axios'
export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIng: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/api/auth/check")

            set({ authUser: res })

        } catch (error) {
            set({ authUser: null })
            console.log("Error In useAuthStore :- ", error);

        } finally {
            set({ isCheckingAuth: false })
        }
    },
    signup: async (data) => {
        console.log("Signup data :- ", data);

        set({ isSigningUp: true })
        try {
            const res = await axiosInstance.post("/api/auth/signup", data)
            console.log("Signup :- ", res);

        } catch (error) {
            set({ authUser: null })
            console.log("Error In signup :- ", error);
        } finally {
            set({ isSigningUp: false })
        }
    },
    login: async (data) => {
        console.log("Signup data :- ", data);

        set({ isLoggingIng: true })
        try {
            const res = await axiosInstance.post("/api/auth/login", data)
            console.log("login :- ", res);
            set({ authUser: res.data.user })
        } catch (error) {
            set({ authUser: null })
            console.log("Error In login :- ", error);
        } finally {
            set({ isLoggingIng: false })
        }
    },
    logout: async () => {
        try {
             const res = await axiosInstance.post("/api/auth/logout")
            console.log("logout Data:- ", res);
            set({ authUser: null })
        } catch (error) {
            set({ authUser: null })
            console.log("Error In logout :- ", error);
        } finally {
            set({ isLoggingIng: true })
        }
    }
}))