import express, { Router } from 'express'
import client from './client';
import app from './app';
import management from './management';
import sales from './sales';

const router = express.Router()

export default () => {
    client(router);
    app(router);
    management(router);
    sales(router);
}