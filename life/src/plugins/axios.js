"use strict";

import Vue from 'vue';
import axios from "axios";


axios.defaults.baseURL = 'http://taogeshuai.cn:8088';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


let config = {

	
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
	
  function(config) {
	  let token = window.localStorage.getItem('token');
	  if(window.localStorage.getItem('token')!='' && window.localStorage.getItem('token')!=undefined){
		config.headers['Authorization'] = token;  
	  }
	  
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)


