import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store1 = {
    
    _state: {

        profilePage: {
    
            posts: [
                {post: 'I love anime!', likes: 5},
                {post: 'I love rock!', likes: 7},
                {post: 'I love pop!', likes: 2}
            ],
    
            description: [
                {avatar: 'https://i.pinimg.com/736x/da/27/c8/da27c8ce5999dac6dfe3308091a3fa76.jpg',
                name: 'Naruto', age: 17, info: 'Naruto Uzumaki is a shinobi of Konohagakure"s Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood.'}
            ],
    
            newPost: 'hello'
        },
    
        dialogsPage: {
    
            people: [
                {name: 'Anya', id: 1, mes: 'I love anime!'},
                {name: 'Anya', id: 2, mes: 'I love anime!'},
                {name: 'Anya', id: 3, mes: 'I love anime!'}
              ],

            newMes: 'hello'
    
        },
    
        friendsBar: {
    
            friends: [
                {image : 'https://i1.sndcdn.com/avatars-000272333422-wk7031-t500x500.jpg',
                name: 'Kakashi'}, 
                {image: 'https://a.wattpad.com/useravatar/Haruno_Sakura001.256.167932.jpg',
                name: 'Sakura'},
                {image: 'https://i.pinimg.com/564x/b7/8e/b3/b78eb361686a4d367dc919cca82131fb.jpg',
                name: 'Sasuke'}
            ]
        }
    },


    dispatch(action) {
        dialogsReducer(this._state.dialogsPage, action);
        profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed')
    },
    
    subscribe(observer){
        this._callSubscriber = observer;
    }
};





export default store1;