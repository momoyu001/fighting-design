import type { PropType, CSSProperties, ExtractPropTypes } from 'vue'
import type { alertType, fixedStyleInterface, overflowType } from './interface'

export const Props = {
  type: {
    type: String as PropType<alertType>,
    default: (): alertType => 'primary',
    validator: (val: alertType): boolean => {
      return (
        ['primary', 'success', 'danger', 'warning', 'default'] as const
      ).includes(val)
    }
  },
  fontSize: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  bold: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  center: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  icon: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  close: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  simple: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  title: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  background: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  color: {
    type: String as PropType<string>,
    default: (): string => ''
  },
  fixed: {
    type: Boolean as PropType<boolean>,
    default: (): boolean => false
  },
  fixedStyle: {
    type: Object as PropType<fixedStyleInterface> as PropType<unknown> as PropType<CSSProperties>,
    default: (): null => null,
    validator: (val: CSSProperties): boolean => {
      if (val.bottom || val.left || val.right || val.top) {
        return true
      }
      return false
    }
  },
  overflow: {
    type: String as PropType<overflowType>,
    default: (): overflowType => '',
    validator: (val: overflowType) => {
      return (['hidden', 'roll', 'ellipsis', ''] as const).includes(val)
    }
  }
} as const

export const Emits = {
  'close-end': (evt: MouseEvent): MouseEvent => evt
} as const

export type FPropsType = ExtractPropTypes<typeof Props>
