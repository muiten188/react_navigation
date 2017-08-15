import * as action_types from '../actions/action_types';
const initState = {
    prizesJson: {
        special: ["89370"],
        first: ["73044"],
        second: ["91392", "91392"],
        third: ["06858", "03361", "47744", "93298", "42624", "39990"],
        fourth: ["4773", "8133", "5864", "2201"],
        fifth: ["5540", "2870", "5563", "9150", "8172", "5631"],
        sixth: ["069", "936", "829"],
        seventh: ["26", "99", "13", "36"]
    },
    isLoading: false
};
export default function homeReducer(state = initState || {} || {}, action = {}) {
    switch (action.type) {
        case action_types.GETLUCKYDRAWER:
            return {
                ...state,
                prizesJson: action.prizesJson,
                isLoading: action.isLoading
            }
        case action_types.LOADINGLUCKYDRAWER:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}