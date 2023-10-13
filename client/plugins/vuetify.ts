import { custom } from 'assets/iconsets'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((NuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,

    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
        custom,
      },
    },
    defaults: {
      VTextField: {
        variant: 'outlined',
        bgColor: 'white',
        color: 'primary',
      },
      VSelect: {
        variant: 'outlined',
        bgColor: 'white',
        color: 'primary',
        noDataText: 'Ничего не найдено',
      },
      VAlert: {
        border: 'start',
      },
      VChip: {
        variant: 'flat', color: 'primary',
      },
      VBtn: {
        variant: 'outlined', color: 'primary',
      },
      VFileInput: {
        variant: 'outlined', color: 'primary',
      },
      VAutocomplete: {
        variant: 'outlined',
        bgColor: 'white',
        color: 'primary',
        noDataText: 'Ничего не найдено',
      },
      VDataTable: {
        noDataText: 'Не найдено анкет по заданному фильтру',
      },
    },
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#fff',
            error: '#FF7C7C',
            info: '#2196F3',
            success: '#27B19B',
            warning: '#FB8C00',
          },
        },
      },
    },
  })

  NuxtApp.vueApp.use(vuetify)
})
