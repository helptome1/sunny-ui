import { PropType } from 'vue';
export type MessageType = 'success' | 'warning' | 'danger' | 'message';

export interface MessageProps {
  type: MessageType;
  text: String;
  offset: Number;
}

export const messageProps = {
  type: {
    type: String as PropType<MessageType>,
    default: 'message',
    validator(value: MessageType) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger', 'message'].includes(value);
    }
  },
  text: {
    type: String,
    default: ''
  },
  offset: {
    type: Number,
    default: 20
  }
};

// 定义一个对象，包含三种情况的样式，对象key就是类型字符串
export const styleList = {
  warning: {
    icon: 'WarningFilled',
    color: '#E6A23C',
    backgroundColor: 'rgb(253, 246, 236)',
    borderColor: 'rgb(250, 236, 216)'
  },
  danger: {
    icon: 'CircleCloseFilled',
    color: '#F56C6C',
    backgroundColor: 'rgb(254, 240, 240)',
    borderColor: 'rgb(253, 226, 226)'
  },
  success: {
    icon: 'SuccessFilled',
    color: '#67C23A',
    backgroundColor: 'rgb(240, 249, 235)',
    borderColor: 'rgb(225, 243, 216)'
  },
  message: {
    icon: 'InfoFilled',
    color: '#999',
    backgroundColor: 'rgb(245, 245, 245)',
    borderColor: 'rgb(228, 228, 228)'
  }
};

export type IMessageParams = MessageProps | string;
