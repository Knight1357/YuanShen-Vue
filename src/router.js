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