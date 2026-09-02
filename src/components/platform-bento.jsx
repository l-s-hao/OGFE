import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';

export function PlatformBento() {
  return (
    <BentoGrid>
      <BentoCard className="code-card">
        <span>SDK</span>
        <div>
          <small>FOR DEVELOPERS</small>
          <h3>开放开发工具</h3>
          <p>从仿真到真机部署，保持一套工作流。</p>
        </div>
      </BentoCard>
      <BentoCard className="model-card" delay={0.08}>
        <div className="model-orbit">
          <i></i>
          <b>AI</b>
        </div>
        <div>
          <small>FOUNDATION MODEL</small>
          <h3>具身基础模型</h3>
          <p>看懂指令、规划步骤并适应新任务。</p>
        </div>
      </BentoCard>
      <BentoCard className="cloud-card" delay={0.16}>
        <div className="cloud-grid"></div>
        <div>
          <small>FLEET SYSTEM</small>
          <h3>机器人集群</h3>
          <p>跨设备更新、监控与持续学习。</p>
        </div>
      </BentoCard>
    </BentoGrid>
  );
}
