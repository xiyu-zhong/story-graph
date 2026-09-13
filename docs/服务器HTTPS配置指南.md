# 服务器 HTTPS 配置指南（Let's Encrypt）

> 适用对象：本项目线上服务器。环境已实测确认，命令可直接照抄。
>
> ⚠️ 本文件**不记录服务器公网 IP**——仓库是公开的，IP 用域名代替即可
> （`dig +short www.muxixi.xin` 或阿里云控制台可查）。
>
> | 项 | 值 |
> |---|---|
> | 服务器 | 阿里云轻量应用服务器（华北2 北京） |
> | 系统 | Ubuntu 24.04 |
> | Web 服务 | nginx 1.24.0 (Ubuntu) |
> | 站点配置 | `/etc/nginx/sites-available/narraverse` → `sites-enabled/narraverse` |
> | 站点目录 | `/var/www/narraverse` |
> | 域名 | `www.muxixi.xin`、`muxixi.xin`（均已解析到该服务器） |

## ✅ 执行记录（2026-09-13 20:36–20:39，已完成）

本指南已按步骤执行完毕。线上当前状态：

| 项 | 结果 |
|---|---|
| 配置备份 | `/root/narraverse.conf.bak-2026-09-13-2036`、`/root/narraverse.conf.bak-redirect-2026-09-13-2037` |
| `server_name` | `www.muxixi.xin muxixi.xin` |
| 证书 | Let's Encrypt，`CN=www.muxixi.xin`，有效期 2026-09-13 → 2026-12-12 |
| 443 监听 | ✅ nginx 已监听 `0.0.0.0:443` 与 `[::]:443` |
| HTTP→HTTPS | ✅ 301。`www.muxixi.xin`、`muxixi.xin`、以及裸 IP 访问均跳转到 `https://www.muxixi.xin` |
| 全路由回归 | `/`、`/work/odyssey`、`/work/journey`、`/work/mortal`、`/work/condor` 全部 200 |
| 尾斜杠规则 | `/work/condor/` → 301 → `/work/condor` |
| 404 兜底 | 不存在路径返回 404 |
| 外网验证 | ✅ 从公网成功拉取 `https://www.muxixi.xin/` 与 `/work/mortal`，证书被正常信任 |
| 自动续期 | ✅ `certbot.timer` 已激活（下次检查 2026-09-14 05:08） |

三点说明：

1. **防火墙无需改动。** 控制台「防火墙模板」已放行 80 与 443，实测外网 443 可达，配置本来就是对的。原先「443 连不上」的真实原因是 nginx 未监听 443（当时还没有证书），与防火墙无关。
2. **未加 HSTS**，按第 9 节建议，等稳定运行一段时间后再加。
3. **未注册邮箱**（使用了 `--register-unsafely-without-email`）。自动续期不受影响；如需到期提醒：`certbot update_account --email 你的邮箱`。

---

## 0. 原理，一句话

Let's Encrypt 免费签发证书，`certbot` 负责申请与自动续期。首次签发走 **HTTP-01 挑战**：对方会访问 `http://www.muxixi.xin/.well-known/acme-challenge/...` 来验证域名确实归你所有。所以**申请时 80 端口必须能从公网访问**——本项目 80 上就是 nginx，天然满足。

证书有效期 90 天，`certbot` 自带定时任务自动续期，**不需要手写 crontab**。

## 1. 前置检查

| 前置条件 | 状态 |
|---|---|
| 域名解析到本机 | ✅ `www.muxixi.xin` 与 apex 均已解析到本机（IP 见上文说明） |
| 80 端口可从公网访问 | ✅ 当前已正常返回页面（HTTP 200） |
| ICP 备案 | ✅ 已通过（未备案时华北2 的 80 端口不会正常返回站点内容） |
| nginx 已安装 | ✅ 1.24.0 |
| **443 端口放行** | ✅ 已在轻量控制台放行，且 nginx 已监听（参见顶部执行记录） |

## 2. 第一步：在轻量控制台放行 443

阿里云**轻量应用服务器**的端口放行不在 ECS 安全组里，而是在轻量控制台的「防火墙」页：

> 轻量应用服务器控制台 → 服务器 → 点进实例 → **防火墙** → 添加规则 → 协议 `TCP`，端口 `443`，策略「允许」 → 保存

实测当前 `443` 完全没有监听，且防火墙大概率也没放行。**这一步不做，后面申请证书会失败或证书签下来也连不上。**

## 3. 第二步：备份现有配置

```bash
cp /etc/nginx/sites-available/narraverse \
   /root/narraverse.conf.bak-$(date +%F-%H%M)
```

回滚时用这个文件覆盖回去即可。

## 4. 第三步：把 `server_name` 改成真实域名

现在配置里写的是 `server_name _;`（通配）。`certbot --nginx` 靠 `server_name` 匹配站点，**不改会报 "Could not automatically find a matching server block"**。

改成：

```nginx
server_name www.muxixi.xin muxixi.xin;
```

> **不会中断访问**：当 nginx 只有一个 server 块时，它会自动充当默认站点，所以改成域名之后**用 IP 直接访问依然正常**。

改完校验并重载：

```bash
nginx -t && systemctl reload nginx
```

## 5. 第四步：安装 certbot

```bash
apt update
apt install -y certbot python3-certbot-nginx
```

## 6. 第五步：签发证书

```bash
certbot --nginx -d www.muxixi.xin -d muxixi.xin
```

交互过程：

1. 填邮箱（证书到期通知用），同意条款。
2. 询问是否把 HTTP 重定向到 HTTPS → **选 `2`（Redirect）**，让 http 自动跳 https。

`certbot` 会自动改写 nginx 配置：加上 `listen 443 ssl;`、证书路径、以及 80 → 443 的跳转。你不需要手写这些。

## 7. 第六步：验证

```bash
curl -sI https://www.muxixi.xin/ | head -3
curl -sI http://www.muxixi.xin/ | head -3
```

期望结果：第一条返回 `HTTP/2 200` 或 `HTTP/1.1 200`；第二条返回 `301` 并带 `Location: https://...`。

查看证书信息：

```bash
echo | openssl s_client -connect www.muxixi.xin:443 \
  -servername www.muxixi.xin 2>/dev/null \
  | openssl x509 -noout -issuer -dates
```

签发者应显示 `Let's Encrypt`。

## 8. 第七步：确认自动续期

```bash
systemctl list-timers | grep certbot
certbot renew --dry-run
```

`--dry-run` 是演练，不会消耗真实签发额度，也不会改动现有证书。看到 “Congratulations, all simulated renewals succeeded” 就说明续期链路是通的。

## 9. 可选加固

- **HSTS**：等 HTTPS 稳定跑一段时间再加，且**不要**加 `preload`：
  ```nginx
  add_header Strict-Transport-Security "max-age=31536000" always;
  ```
  一旦加了 HSTS，浏览器会强制走 HTTPS，如果证书出问题会很难回退——所以别急着加。
- 证书路径：`/etc/letsencrypt/live/www.muxixi.xin/`
- 续期后 nginx 重载由 certbot 的 nginx 插件自动完成。

## 10. 回滚

```bash
cp /root/narraverse.conf.bak-<时间戳> /etc/nginx/sites-available/narraverse
nginx -t && systemctl reload nginx
```

如要删除证书：`certbot delete --cert-name www.muxixi.xin`。

## 11. 常见问题

| 症状 | 原因与处理 |
|---|---|
| 443 连不上 | 九成是轻量控制台**防火墙**没放行，不是 nginx 问题。回第 2 步。 |
| certbot 报找不到匹配的 server block | `server_name` 还是 `_`。回第 4 步。 |
| 挑战验证失败 / 超时 | 80 端口不通，或被 CDN、其他进程占用。本项目 80 就是 nginx，正常情况不会失败。 |
| 用了 CDN 加速 | 需要把 CDN 回源也支持 HTTPS，或改用 DNS-01 挑战。当前项目未接 CDN，不涉及。 |
| 担心影响现有站点 | nginx 配置已备份；证书申请只增不改站点内容，`/var/www/narraverse` 不会被碰。 |

## 12. 与地图任务的关系

HTTPS 做完之后，如果后续要接高德：

- Key 白名单可填 `https://www.muxixi.xin`（高德按「协议 + 域名 + 端口」校验）。
- Key 与 `securityJsCode` 必须**构建时注入**（`.env.local` 或 CI 变量），**不得提交入库**——与本项目既有安全红线一致。
