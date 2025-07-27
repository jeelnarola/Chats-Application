import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const userGet = create((set) => ({
    isUser: null,

    alluser: async () => {
        try {
            const res = await axiosInstance.get("/api/user/all")
            set({isUser:res.data.user})
        } catch (error) {
            console.log("All User :- ", error);
        }

    }
}))