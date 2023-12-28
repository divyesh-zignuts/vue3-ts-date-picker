import { Icon } from '@iconify/vue'
import { h } from 'vue'
import type { IconAliases, IconProps, IconSet } from 'vuetify'

const aliases: IconAliases = {
  collapse: 'bx-chevron-up',
  complete: 'bx-check',
  cancel: 'bx-x',
  close: 'bx-x',
  delete: 'bxs-x-circle',
  clear: 'bx-x',
  success: 'bx-check-circle',
  info: 'bx-info-circle',
  warning: 'bx-info-circle',
  error: 'bx-x',
  prev: 'bx-chevron-left',
  next: 'bx-chevron-right',
  checkboxOn: 'mdi-checkbox-outline',
  checkboxOff: 'mdi-checkbox-blank-outline',
  checkboxIndeterminate: 'mdi-minus-box-outline',
  delimiter: 'bx-circle',
  sort: 'bx-up-arrow-alt',
  expand: 'bx-chevron-down',
  menu: 'bx-menu',
  subgroup: 'bx-caret-down',
  dropdown: 'bx-chevron-down',
  radioOn: 'tabler:circle-dot',
  radioOff: 'tabler:circle',
  edit: 'bx-pencil',
  ratingEmpty: 'bx-star',
  ratingFull: 'bxs-star',
  ratingHalf: 'bxs-star-half',
  loading: 'bx-refresh',
  first: 'bx-skip-previous-circle',
  last: 'bx-skip-next-circle',
  unfold: 'bx-expand-vertical',
  file: 'bx-paperclip',
  plus: 'bx-plus',
  minus: 'bx-minus',
  sortAsc: 'bx-sort-up',
  sortDesc: 'bx-sort-down',
}

export const iconify: IconSet = {
  // @ts-expect-error: no scoped error
  component: (props: IconProps) => h(Icon, props),
}

export const icons = {
  defaultSet: 'iconify',
  aliases,
  sets: {
    iconify,
  },
}
