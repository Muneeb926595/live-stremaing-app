import io from "socket.io-client";

const PROD_ENDPOINT = "https://streamily.herokuapp.com";
export const socket = io(PROD_ENDPOINT);
