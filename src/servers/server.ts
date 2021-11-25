import Koa from 'koa'
import { getConfigs } from '../config/config'
import { getRouter } from '../routers/router'


type GetServerParams = {
    port?: string | number
    onListen?: () => void
}

const getApp = () => {
    const koa = new Koa();
    const router = getRouter();

    koa.
        use(router.routes())
    return koa;
}

export const startServer = ({
    port = getConfigs().port,
    onListen }: GetServerParams = {}) => {
    return getApp().listen(port, () => {
        console.log(`Server listening on port ${port}`)
        onListen?.()
    })
}