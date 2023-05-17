import { VNode, createVNode, render } from 'vue';
import MessageCom from './messaga.vue';
// import { IMessageParams } from './messageProps';
let instances: VNode[] = [];

export default ({ type, text }: { type: string; text: string }) => {
  let offset = 20;
  instances.forEach((instance: VNode) => {
    offset += instance.el!.offsetHeight + 20;
  });
  let timer: NodeJS.Timer | null = null;
  // 创建容器
  const div = document.createElement('div');
  div.setAttribute('class', 'sunny-message-container');
  // 1. 将消息提示组件编译为虚拟节点
  const vNode = createVNode(MessageCom, { type, text, offset });
  // 2. 将虚拟节点渲染进容器中, 通过render函数
  render(vNode, div);
  document.body.appendChild(div);
  instances.push(vNode);
  // 3. 销毁定时器
  timer && clearTimeout(timer);
  timer = setTimeout(() => {
    render(null, div);
    if (typeof document !== 'undefined') {
      document.body.removeChild(div);
    }
  }, 3000);
};
