import {
    Row, Col,
    Dialog,
    Loading,
    Tabs,TabPane,
    Input, Button,
    Form, FormItem,
    Radio,RadioGroup,
    Table, TableColumn,

} from 'element-ui'
const locale = require('element-ui/lib/locale/lang/zh-CN');
const element = {
    install: function (Vue: any) {
        Vue.prototype.$ELEMENT = { size: 'mini', locale: locale.default };
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Dialog)
        Vue.use(Loading)
        Vue.use(Button)
        Vue.use(Tabs)
        Vue.use(TabPane)
        Vue.use(Input)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Radio)
        Vue.use(RadioGroup)
        Vue.use(Table)
        Vue.use(TableColumn)
    }
}
export default element