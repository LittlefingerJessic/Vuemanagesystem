import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input, Message, Header,
  Main, Aside, Container, Menu, Submenu, MenuItemGroup,
  MenuItem, Breadcrumb, BreadcrumbItem, Card,
  Col, Row, Table, TableColumn, Pagination, Dialog, Checkbox
} from 'element-ui'

Vue.use(Pagination)
Vue.use(Button)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Container)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(MenuItemGroup)
Vue.use(Checkbox)
// 挂载到Vue全局上，每个组件可以同this.$message使用这个弹框插件
Vue.prototype.$message = Message
