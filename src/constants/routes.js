//app has multiple routes. All the routes are saved in a const. Each route corresponds to a page. 
export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';//user goes here, there is a signup option if not already registered
export const LANDING = '/';//the root node
export const HOME = '/home';//protected route. only accessible if registered
export const ACCOUNT = '/account';//protected. Only accessible if registered. Has password reset/change options
export const PASSWORD_FORGET = '/pw-forget';