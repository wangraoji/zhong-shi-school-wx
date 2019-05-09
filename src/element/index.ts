import { Row, Col } from 'element-ui'
const element = {
    install: function (Vue: any) {
        Vue.use(Row)
        Vue.use(Col)
    }
}
export default element