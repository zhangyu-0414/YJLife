import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {Header,
Menu,
Submenu,
MenuItem,
Button,
Container,
Main,
Footer,
Form,
FormItem,
Input,
Row,
Col,
Pagination,
Backtop,
Icon,
RadioGroup,
Select,
Option,
Message
} from 'element-ui'

Vue.use(Message)
Vue.use(Option)
Vue.use(Select)
Vue.use(RadioGroup)
Vue.use(Header)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)
Vue.use(Backtop)
Vue.use(Icon)

Vue.prototype.$message = Message