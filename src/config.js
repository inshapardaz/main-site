let NODE_ENV = 'local';
let API_URL = 'http://localhost:4000';
let LIBRARIES_URL = 'http://localhost:4400';
let LIBRARY_EDITOR_URL = 'http://localhost:4300';
let DICTIONARY_URL = 'http://localhost:4200';
let FONTS_URL = 'https://fonts.nawishta.dev';
let TOOLS_URL = 'https://tools.nawishta.dev';

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
    DICTIONARY_URL = 'https://dictionary.nawishta.co.uk';
    FONTS_URL = 'https://fonts.nawishta.co.uk';
    TOOLS_URL = 'https://tools.nawishta.co.uk';
    console.log('Environment is: production');
} else {
    console.log('Environment is: local');
}
console.log('--------------------------------------------------')

const GITHUB_ORG_URL = 'https://github.com/inshapardaz';
const MAKTABA_REPO_URL = 'https://github.com/inshapardaz/maktaba';
const MAKTABA_RELEASES_URL = 'https://github.com/inshapardaz/maktaba/releases/latest';

export {
    NODE_ENV,
    API_URL,
    LIBRARIES_URL,
    LIBRARY_EDITOR_URL,
    DICTIONARY_URL,
    FONTS_URL,
    TOOLS_URL,
    GITHUB_ORG_URL,
    MAKTABA_REPO_URL,
    MAKTABA_RELEASES_URL
}
