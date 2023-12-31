import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home"
import xingwen from "../components/xingwen"
import jiaose from "../components/jiaose"
import shijie from "../components/shijie"
import manhua from "../components/manhua"
import shequ from "../components/shequ"
import Mengde from "../components/jiaose/Mengde"
import Liyue from "../components/jiaose/Liyue"
import Daoqi from "../components/jiaose/Daoqi"

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