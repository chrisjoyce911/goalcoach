import { SIGNED_IN } from '../constants';

let user = {
    email: null
}

export default (state = user, action) => {
    switch (action.type) {
        case SIGNED_IN:
            const { email } = action;
            user = {
                email
            }
            console.log("return user in reducer_user.jsx", user);
            return user;
        default:
            console.log("return state in reducer_user.jsx", user);
            return user;
    }
}