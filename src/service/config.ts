const devBaseURL = 'https://pump.iotn2n.com';
const proBaseURL = 'https://pump.iotn2n.com';


export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;
