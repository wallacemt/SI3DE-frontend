import axios from "axios";
import { baseURL, handleToken, type SimpleResponse } from "./api";
import type { FeedbackResponse } from "@/types/feedbacks";

const feedbackApi = axios.create({
  baseURL: `${baseURL}/feedback`,
  withCredentials: true,
});

export const postFeedback = async ({ tipo, mensagem }: { tipo: string; mensagem: string }): Promise<SimpleResponse> => {
  try {
    handleToken(feedbackApi);
    const response = await feedbackApi.post("/new", { tipo, mensagem });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFeeedBacks = async (): Promise<FeedbackResponse> => {
  try {
    handleToken(feedbackApi);
    const response = await feedbackApi.get<FeedbackResponse>("");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteFeedBack = async (id: string): Promise<SimpleResponse> => {
  try {
    handleToken(feedbackApi);
    const response = await feedbackApi.delete<SimpleResponse>(`/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
