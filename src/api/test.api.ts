import api from "./index";


export function testApi(){

  return api.get("/");

}
