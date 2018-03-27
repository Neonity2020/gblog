export default (http, router) => {
    //https://github.com/axios/axios#interceptors
    http.interceptors.response.use(response => response.data, (error) => {
        const { response } = error

        if (response && response.status == 404) {
            router.push({name: '404'})
        }

        console.log('error...........')
        console.error(response.status)

        return Promise.reject(error)
    })
}
