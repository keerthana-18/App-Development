import {createStore} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./cartReducers";
const store=createStore(rootReducers);
export default store;