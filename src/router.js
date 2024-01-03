import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home"
import xingwen from "./views/xingwen"
import jiaose from "./views/jiaose"
import shijie from "./views/shijie"
import manhua from "./views/manhua"
import shequ from "./views/shequ"
import Mengde from "./views/jiaose/Mengde"
import Liyue from "./views/jiaose/Liyue"
import Daoqi from "./views/jiaose/Daoqi"
/*
    6.页面中使用 vue-router 插件实现页面跳转功能
    Vue Router 创建路由的配置文件
    引入了一些视图组件，如 Home、xingwen、jiaose 等，对应不同路由路径的页面。
*/
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: "/",
        component: Home
    },
    {
        path: "/xingwen",
        component: xingwen
    },
    {
        path: '/jiaose',
        component: jiaose,
        children: [{
            path: "mengde",
            component: Mengde
        },
        {
            path: "liyue",
            component: Liyue
        },
        {
            path: "daoqi",
            component: Daoqi
        },
        ]
    },
    {
        path: '/shijie',
        component: shijie
    },
    {
        path: '/manhua',
        component: manhua
    },
    {
        path: '/shequ',
        component: shequ
    }
    ]
});

export default router;