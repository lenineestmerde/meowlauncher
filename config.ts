import token from './public.pem';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'мяулаунчер',
};

export const api = {
    ws: 'ws://45.151.30.183:1371/ws',
    web: 'http://45.151.30.183:1371',
    // extraToken: token,
};

export const appPath = '.aurora-launcher';
