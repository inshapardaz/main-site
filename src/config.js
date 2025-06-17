let NODE_ENV = 'local';
let API_URL = 'http://localhost:4000';
let LIBRARIES_URL = 'http://localhost:4400';
let LIBRARY_EDITOR_URL = 'http://localhost:4300';
let DICTIONARY_URL = 'http://localhost:4200';

console.log('--------------------------------------------------')
console.log('window.location.host:', window.location.host);

if (window.location.host.toLocaleLowerCase() == 'editor.nawishta.dev') {
    NODE_ENV = 'development';
    API_URL = 'http://api.nawishta.dev';
    console.log('Environment is: development');
} else if (window.location.host.toLocaleLowerCase() == 'www.nawishta.co.uk' ||
    window.location.host.toLocaleLowerCase() == 'nawishta.co.uk') {
    NODE_ENV = 'production';
    API_URL = 'https://api.nawishta.co.uk';
    LIBRARIES_URL = 'https://libraries.nawishta.co.uk';
    LIBRARY_EDITOR_URL = 'https://editor.nawishta.co.uk';
    DICTIONARY_URL = 'https://dictionaries.nawishta.co.uk';
    console.log('Environment is: production');
} else {
    console.log('Environment is: local');
}
console.log('--------------------------------------------------')

export {
    NODE_ENV,
    API_URL,
    LIBRARIES_URL,
    LIBRARY_EDITOR_URL,
    DICTIONARY_URL
}
