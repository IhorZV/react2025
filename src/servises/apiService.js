import axios from "axios";
import {baseURL} from "../contants/Urls";

const apiService = axios.create({baseURL})

export {apiService};