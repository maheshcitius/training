import axios from 'axios';

import { getCurrentUser } from '../services/users.server';

export function jwtInterceptor() {
    axios.interceptors.request.use(request => {
        // add auth header with jwt if account is logged in and request is to the api url
        const account = getCurrentUser.user;
        const isLoggedIn = account?.token;
      //  const isApiUrl = request.url.startsWith(process.env.REACT_APP_API_URL);

        if (isLoggedIn) {
            request.headers.common.Authorization = `Bearer ${account.accessToken}`;
        }

        return request;
    });
}