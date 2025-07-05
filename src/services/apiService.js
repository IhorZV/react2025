import axios from "axios";

import {baseURL} from "../constats/urls";

const apiService = axios.create({baseURL});

export {apiService};