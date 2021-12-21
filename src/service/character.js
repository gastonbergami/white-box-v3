import { axiosBase } from ".";

const CharacterApi = {
  get: (url) => axiosBase.get(`/character/${url}`),
};

export { CharacterApi };
