import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Magnet } from '@/components/reactbits/magnet';

export function AccountAccess() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span>
          <Magnet>
            <Button variant="outline" className="login-button">
              用户登录
            </Button>
          </Magnet>
        </span>
      </DialogTrigger>
      <DialogContent>
        <small>ONE—G ACCOUNT</small>
        <DialogTitle>欢迎回来</DialogTitle>
        <DialogDescription>登录以管理机器人设备、开发项目与团队成员。</DialogDescription>
        <form className="login-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            邮箱
            <input type="email" placeholder="name@example.com" required />
          </label>
          <label>
            密码
            <input type="password" placeholder="••••••••" required />
          </label>
          <Button className="dialog-submit" type="submit">
            登录 <span>→</span>
          </Button>
        </form>
        <p className="dialog-note">演示界面，暂未连接用户系统。</p>
      </DialogContent>
    </Dialog>
  );
}
