import {postAddActionCreator, profileReducer} from './profile-reducer'

it("length up", () => {
  let state = {
    posts: [
      { post: "I love anime!", likes: 5 },
      { post: "I love rock!", likes: 7 },
      { post: "I love pop!", likes: 2 },
    ],

  };

  let action = postAddActionCreator('hello');

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);

});

