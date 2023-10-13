import { h } from 'vue'
import type { IconProps, IconSet } from 'vuetify'

const aliases = import.meta.glob('assets/icons/*.svg', { as: 'raw', eager: true })

const custom: IconSet = {
  component: (props: IconProps) => {
    return h('span', { class: 'custom-icon', innerHTML: aliases[`/assets/icons/${props.icon}.svg`] })
  },
}

export { custom }
