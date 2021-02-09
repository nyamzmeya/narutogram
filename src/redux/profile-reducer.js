import { profileAPI } from "../common/api";

let initialState = {
  posts: [
    { post: "I love anime!", likes: 5 },
    { post: "I love rock!", likes: 7 },
    { post: "I love pop!", likes: 2 },
  ],

  description: [
    {
      avatar:
        "https://i.pinimg.com/736x/da/27/c8/da27c8ce5999dac6dfe3308091a3fa76.jpg",
      name: "Naruto",
      age: 17,
      info:
        'Naruto Uzumaki is a shinobi of Konohagakure"s Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood.',
    },
  ],

  status: "",

  friendsBar: {
    friends: [
      {
        image: "https://i1.sndcdn.com/avatars-000272333422-wk7031-t500x500.jpg",
        name: "Kakashi",
      },
      {
        image:
          "https://a.wattpad.com/useravatar/Haruno_Sakura001.256.167932.jpg",
        name: "Sakura",
      },
      {
        image:
          "https://i.pinimg.com/564x/b7/8e/b3/b78eb361686a4d367dc919cca82131fb.jpg",
        name: "Sasuke",
      },
    ],
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "network/profile/ADD-POST":
      let text = {
        post: action.post,
        likes: 0,
      };

      return { ...state, posts: [...state.posts, text] };

    case "network/profile/SET-STATUS":
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const postAddActionCreator = (post) => {
  return {
    type: "network/profile/ADD-POST",
    post,
  };
};

export const setProfileStatus = (status) => {
  return {
    type: "network/profile/SET-STATUS",
    status,
  };
};


export const getStatus = (userId) => async (dispatch) => {
  let responce = await profileAPI.getStatus(userId);
  dispatch(setProfileStatus(responce.data));
};



export const updateStatus = (status) => async (dispatch) => {
  let responce = await profileAPI.updateStatus(status);
  if (responce.data.resultCode === 0) {
    dispatch(setProfileStatus(status));
  }
};

export default profileReducer;
