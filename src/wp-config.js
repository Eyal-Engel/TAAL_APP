import clientConfig from './client-config'
const wpConfig = {

    siteUrl: clientConfig.siteUrl,
    getRoutes: `${clientConfig.siteUrl}wp-json/wp/v2/routes`,
    getTasks: `${clientConfig.siteUrl}wp-json/wp/v2/tasks`,
    getPlaces: `${clientConfig.siteUrl}wp-json/wp/v2/places`,
    getUser: `${clientConfig.siteUrl}wp-json/wp/v2/users/me`
};

export default wpConfig;
