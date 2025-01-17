import Router from "koa-router";
import adminRouter from "./admin";
import { Login } from "@/controller/login";
import { currentUser } from "@/controller/user";
import { prefix } from "@/constants/router";

export const router = new Router();
const v1 = new Router({ prefix });
// 用户登录
v1.post("/login", Login);
// 用户鉴权
v1.get("/currentUser", currentUser);
v1.use(adminRouter.routes());
router.use(v1.routes());
