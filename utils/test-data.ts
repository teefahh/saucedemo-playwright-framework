// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

export const SauceDemoUsers = {
    standard: {

        username: process.env.SAUCEDEMO_STANDARD_USER || 'standard_user',
        password: process.env.SAUCEDEMO_PASSWORD || 'secret_sauce'
    },

    locked: {

        usermane: process.env.SAUCEDEMO_LOCKED_USER || 'locked_out_user',
        password: process.env.SAUCEDEMO_PASSWORD || 'secret_sauce'
    },

    problem: {

        username: process.env.SAUCEDEMO_PROBLEM_USER || 'problem_user',
        password: process.env.SAUCEDEMO_PASSWORD || 'secret_sauce'
    }

};


export const TestURLS = {
    sauceDemo: process.env.SAUCEDEMO_BASE_URL || 'https://saucedemo.com',
    todoMVC: process.env.TODOMVC_BASE_URL || 'https//demo.playwright.dev/todomvc',
    theInternet: 'https//the-internet.erokuapp.com'
};

export const APIEndpoints = {

    jsonPlaceholder: process.env.JSONPLACEHOLDER_API || 'https://jsonplaceholder.typicode.com',
    fakeStoreAPI: process.env.FAKESTOREAPI_URL || 'https://fakestoreapi.com',
    reqres: process.env.REQRES_API || 'https://reqres.in//api'
};