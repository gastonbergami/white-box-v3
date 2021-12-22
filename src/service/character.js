import { axiosBase } from '.';

const CharacterApi = {
  get: (url) => axiosBase.get(`/character/${url}`)
};

// eslint-disable-next-line import/prefer-default-export
export { CharacterApi };
