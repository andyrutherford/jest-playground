import { SAVE_COMMENT, FETCH_COMMENTS, CLEAR_COMMENTS } from 'actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload, {}];
        case FETCH_COMMENTS:
            const comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments];
        case CLEAR_COMMENTS:
            return [];
        default:
            return state;
    }
}