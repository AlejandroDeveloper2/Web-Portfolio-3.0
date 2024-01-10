import { Project, ServerResponseError } from "@models/DataModels";
import { client } from "@config/pocketbase.config";

export const getAllProjects = async (): Promise<Project[]> => {
  let response: Project[] = [];
  try {
    const projects = await client.collection("projects").getFullList<Project>();
    response = projects;
  } catch (error: unknown) {
    const parsedError: ServerResponseError = error as ServerResponseError;
    throw parsedError;
  }
  return response;
};
