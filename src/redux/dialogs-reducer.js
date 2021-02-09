let initialState = {
    
    people: [
        {name: 'Anya', id: 1, mes: 'I love anime!'},
        {name: 'Anya', id: 2, mes: 'I love anime!'},
        {name: 'Anya', id: 3, mes: 'I love anime!'}
      ]
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'network/dialogs/ADD-MES': 
            return {...state,
                people: [...state.people,
                    {mes: action.mes, name: 'Vasya', id: 4}]
            };
            

        default:
            return state;
    }
};

export const mesAddActionCreator = (mes) => {
    return {
        type: 'network/dialogs/ADD-MES', mes} 
};



export default dialogsReducer;