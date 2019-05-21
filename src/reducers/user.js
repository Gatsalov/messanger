import { generateUser } from "../generateFakeData/staticData";


export default function user(state = generateUser(), action) {
    return state;
}