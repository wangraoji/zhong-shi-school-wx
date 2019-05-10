import {
    Row, Col, Dropdown,
    DropdownMenu,
    DropdownItem,
    Popover,
    Button,
    Input,
} from 'element-ui'
const locale = require('element-ui/lib/locale/lang/zh-CN');
const element = {
    install: function (Vue: any) {
        Vue.prototype.$ELEMENT = { size: 'mini', locale: locale.default };
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Dropdown)
        Vue.use(DropdownMenu)
        Vue.use(DropdownItem)
        Vue.use(Popover)
        Vue.use(Button)
        Vue.use(Input)
    }
}
export default element