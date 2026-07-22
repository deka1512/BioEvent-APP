import api from "./index";


/*
|--------------------------------------------------------------------------
| Request interceptor
|--------------------------------------------------------------------------
*/

api.interceptors.request.use(

  (config) => {


    const token = localStorage.getItem("bio_token");


    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }


    return config;

  },


  (error) => {

    return Promise.reject(error);

  }

);



/*
|--------------------------------------------------------------------------
| Response interceptor
|--------------------------------------------------------------------------
*/

api.interceptors.response.use(

  (response) => {


    return response;


  },


  (error) => {


    if (!error.response) {

      console.error(
        "Erreur réseau : serveur inaccessible"
      );

      return Promise.reject(error);

    }


    switch(error.response.status) {


      case 401:

        console.warn(
          "Session expirée"
        );

        localStorage.removeItem("bio_token");

        break;



      case 422:

        console.warn(
          "Erreur validation Laravel",
          error.response.data
        );

        break;



      case 500:

        console.error(
          "Erreur serveur Laravel"
        );

        break;


    }


    return Promise.reject(error);

  }

);


export default api;
