import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import { combineReducers } from "redux";
import messages from "./messages";
import typing from "./typing";

const test = { user, contacts }
console.log(test,"ZXCVBNM<")

export default combineReducers(
  {
    user,
    contacts,
    messages,
    typing,
    activeUserId
  }
);