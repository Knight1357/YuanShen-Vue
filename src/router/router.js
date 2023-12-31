import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home"
import xingwen from "../pages/xingwen"
import jiaose from "../pages/jiaose"
import shijie from "../pages/shijie"
import manhua from "../pages/manhua"
import shequ from "../pages/shequ"
import Mengde from "../pages/jiaose/Mengde"
import Liyue from "../pages/jiaose/Liyue"
import Daoqi from "../pages/jiaose/Daoqi"

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