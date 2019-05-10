import {
    Row, Col, Dropdown,
    DropdownMenu,
    DropdownItem,
    Popover,
    Button,
} from 'element-ui'
const element = {
    install: function (Vue: any) {
        // Vue.prototype.$ELEMENT = { size: 'mini' };
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Dropdown)
        Vue.use(DropdownMenu)
        Vue.use(DropdownItem)
        Vue.use(Popover)
        Vue.use(Button)
    }
}
export default element