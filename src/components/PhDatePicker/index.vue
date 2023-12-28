<script setup lang="ts">
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/dark.css'
import moment from 'moment'
import { computed, onMounted, ref, watchEffect } from 'vue'
import FlatPickr from 'vue-flatpickr-component'
import { useI18n } from 'vue-i18n'

interface Time {
  isDisplay?: boolean
  icon?: string
  size?: string | number
}

interface Repeat {
  isDisplay?: boolean
  icon?: string
  size?: string | number
  repeatedList: any
  monthlyDate?: any
  monthlyDay?: any
  monthlyWeek?: any
  customWeek?: any
  custom?: any
}

interface Props {
  offset?: string
  width?: string | number
  theme?: string
  location?: string | any
  size?: string | number
  color?: string
  icon?: string
  label?: string
  prependIcon?: string
  appendIcon?: string
  variant?: string | any
  openDelay?: string | number
  openOnClick?: boolean
  closeOnContentClick?: boolean
  openOnHover?: boolean
  activator?: string
  timeSlot?: Time
  repeatedSlot?: Repeat
  dateFields?: boolean
  isVisible?: boolean
  startDate?: string | any
  endDate?: string | any
  startTime?: string | any
  endTime?: string | any
  dateFormat?: string | any
  isRepeatedShow?: boolean | any
  isTimerShow?: boolean
  repeatedOn?: string | any
  customWeekOrMonthly?: string | any
  customEveryWeek?: string | any
  customRepeatDay?: string | any
  customRepeatDate?: string | any
  customSelectedDays?: string[] | any
  weeklySelectDays?: string[] | any
  monthlyDayRepeat?: string | any
  monthlyWeekRepeat?: string | any
  monthlyWeekOrDay?: string | any
  monthlyRepeatDate?: string | any
  selectedDates?: any
  customWeekOrDay?: any
  title?: string
}

interface Emit {
  (e: 'change', value: object): void
}

// Props
const props = withDefaults(defineProps<Props>(), {
  theme: 'dark',
  density: 'compact',
  size: 'small',
  color: 'primary',
  activator: 'parent',
  location: 'top',
  isVisible: true,
  width: 'fit-content',
  offset: '2px',
  openOnClick: true,
  openOnHover: false,
  isTimerShow: false,
  dateFormat: 'D MMM',
  openDelay: '3000',
  repeatedOn: '',
  customSelectedDays: () => ([]),
  weeklySelectDays: () => ([]),
  timeSlot: () => ({
    isDisplay: true,
    icon: 'icon-clock',
    size: 18,
  }),
  repeatedSlot: () => ({
    isDisplay: true,
    icon: 'icon-refresh',
    size: 18,
    repeatedList: [
      {
        title: 'Daily',
        value: 'daily',
      },
      {
        title: 'Weekly',
        value: 'weekly',
      },
      {
        title: 'Monthly',
        value: 'monthly',
      },
      {
        title: 'Yearly',
        value: 'yearly',
      },
      {
        title: 'Periodically',
        value: 'periodically',
      },
      {
        title: 'Custom',
        value: 'custom',
      },
    ],
    monthlyDate: [
      {
        title: '1',
        value: '1',
      },
      {
        title: '2',
        value: '2',
      },
      {
        title: '3',
        value: '3',
      },
      {
        title: '4',
        value: '4',
      },
      {
        title: '5',
        value: '5',
      },
      {
        title: '6',
        value: '6',
      },
      {
        title: '7',
        value: '7',
      },
      {
        title: '8',
        value: '8',
      },
      {
        title: '9',
        value: '9',
      },
      {
        title: '10',
        value: '10',
      },
      {
        title: '11',
        value: '11',
      },
      {
        title: '12',
        value: '12',
      },
      {
        title: '13',
        value: '13',
      },
      {
        title: '14',
        value: '14',
      },
      {
        title: '15',
        value: '15',
      },
      {
        title: '16',
        value: '16',
      },
      {
        title: '17',
        value: '17',
      },
      {
        title: '18',
        value: '18',
      },
      {
        title: '19',
        value: '19',
      },
      {
        title: '20',
        value: '20',
      },
      {
        title: '21',
        value: '21',
      },
      {
        title: '22',
        value: '22',
      },
      {
        title: '23',
        value: '23',
      },
      {
        title: '24',
        value: '24',
      },
      {
        title: '25',
        value: '25',
      },
      {
        title: '26',
        value: '26',
      },
      {
        title: '27',
        value: '27',
      },
      {
        title: '28',
        value: '28',
      },
      {
        title: '29',
        value: '29',
      },
      {
        title: '30',
        value: '30',
      },
      {
        title: '31',
        value: '31',
      },
    ],
    monthlyDay: [
      {
        title: '1st',
        value: 'first',
      },
      {
        title: '2nd',
        value: 'second',
      },
      {
        title: '3rd',
        value: 'third',
      },
      {
        title: '4th',
        value: 'fourth',
      },
      {
        title: '5th',
        value: 'fifth',
      },
    ],
    monthlyWeek: [
      {
        title: 'Sunday',
        value: 'sunday',
      },
      {
        title: 'Monday',
        value: 'monday',
      },
      {
        title: 'Tuesday',
        value: 'tuesday',
      },
      {
        title: 'Wednesday',
        value: 'wednesday',
      },
      {
        title: 'Thursday',
        value: 'thursday',
      },
      {
        title: 'Friday',
        value: 'friday',
      },
      {
        title: 'Saturday',
        value: 'saturday',
      },
    ],
    customWeek: [
      {
        title: '1',
        value: '1',
      },
      {
        title: '2',
        value: '2',
      },
      {
        title: '3',
        value: '3',
      },
      {
        title: '4',
        value: '4',
      },
      {
        title: '5',
        value: '5',
      },
      {
        title: '6',
        value: '6',
      },
      {
        title: '7',
        value: '7',
      },
      {
        title: '8',
        value: '8',
      },
      {
        title: '9',
        value: '9',
      },
      {
        title: '10',
        value: '10',
      },
      {
        title: '11',
        value: '11',
      },
      {
        title: '12',
        value: '12',
      },
    ],
    custom: [
      {
        title: 'Week',
        value: 'week',
      },
      {
        title: 'Month',
        value: 'month',
      },
    ],
  }),
  closeOnContentClick: false,
  dateFields: true,
})

// Emit
const emit = defineEmits<Emit>()

// i18
// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore: Unreachable code error
const { t } = useI18n({ locale: 'en', useScope: 'global' })

// constant
const TIME_LIST: any = [
  {
    title: '00:00',
    value: '00:00',
  },
  {
    title: '00:30',
    value: '00:30',
  },
  {
    title: '01:00',
    value: '01:00',
  },
  {
    title: '01:30',
    value: '01:30',
  },
  {
    title: '02:00',
    value: '02:00',
  },
  {
    title: '02:30',
    value: '02:30',
  },
  {
    title: '03:00',
    value: '03:00',
  },
  {
    title: '03:30',
    value: '03:30',
  },
  {
    title: '04:00',
    value: '04:00',
  },
  {
    title: '04:30',
    value: '04:30',
  },
  {
    title: '05:00',
    value: '05:00',
  },
  {
    title: '05:30',
    value: '05:30',
  },
  {
    title: '06:00',
    value: '06:00',
  },
  {
    title: '06:30',
    value: '06:30',
  },
  {
    title: '07:00',
    value: '07:00',
  },
  {
    title: '07:30',
    value: '07:30',
  },
  {
    title: '08:00',
    value: '08:00',
  },
  {
    title: '08:30',
    value: '08:30',
  },
  {
    title: '09:00',
    value: '09:00',
  },
  {
    title: '09:30',
    value: '09:30',
  },
]

const DAYS: any = [
  {
    label: 'M',
    value: 'Monday',
  },
  {
    label: 'T',
    value: 'Tuesday',
  },
  {
    label: 'W',
    value: 'Wednesday',
  },
  {
    label: 'T',
    value: 'Thursday',
  },
  {
    label: 'F',
    value: 'Friday',
  },
  {
    label: 'S',
    value: 'Saturday',
  },
  {
    label: 'S',
    value: 'Sunday',
  },
]

// Data
const date = ref<any>('')
const startTime = ref<any>('')
const endTime = ref<any>('')
const isAddTimeVisible = ref<boolean>(false)
const isRepeatedVisible = ref<boolean>(false)
const selectDay = ref<any[]>([])
const selectedDay = ref<any[]>([])
const repeatedOn = ref<any>('')
const monthlyOption = ref<any>('week')
const monthlyRepeat = ref<any>('')
const monthlyDayRepeat = ref<any>('')
const monthlyWeekRepeat = ref<any>('')
const customWeek = ref<any>('')
const custom = ref<any>('')
const customOption = ref<any>('week')
const customRepeatDate = ref<any>('')
const selectDayCustom = ref<any[]>([])
const showStartDate = ref<boolean>(false)
const startDate = ref<any>('')
const endDate = ref<any>('')

// Computed
const dateMode = computed(() => showStartDate.value ? 'range' : 'single')
const isIconOnly = computed(() => !props?.prependIcon?.length && !props?.appendIcon?.length && !props?.label?.length && props?.icon?.length)

const config: any = computed(() => {
  return {
    wrap: true,
    altFormat: 'M j, Y',
    altInput: false,
    dateFormat: 'Y-m-d',
    inline: true,
    mode: dateMode.value,
    theme: props?.theme,
    defaultDate: [...selectedDay.value],
  }
})

const formattedDateRange = computed(() => {
  const formatStartDate = startDate.value
    ? moment(startDate.value).format(props.dateFormat)
    : null

  const formatEndDate = endDate.value
    ? moment(endDate.value).format(props.dateFormat)
    : null

  return (formatStartDate && formatEndDate)
    ? (`${formatStartDate} - ${formatEndDate}`)
    : (formatEndDate || formatStartDate || null)
})

// Methods
const update = () => {
  const updateDate = {
    startDate: startDate.value,
    dueDate: endDate.value,
    startTime: startTime.value,
    endTime: endTime.value,
    defaultDate: selectedDay.value,
    date: date.value,
    isRepeatedShow: isRepeatedVisible.value,
    isTimerShow: isAddTimeVisible.value,
    repeatedOn: repeatedOn.value,
    customWeekOrMonthly: custom.value,
    customSelectedDays: selectDayCustom.value,
    customWeekOrDay: customOption.value,
    customRepeatDate: customRepeatDate.value,
    customEveryWeek: customWeek.value,
    weeklySelectDays: selectDay.value,
    monthlyDayRepeat: monthlyDayRepeat.value,
    monthlyWeekRepeat: monthlyWeekRepeat.value,
    monthlyWeekOrDay: monthlyOption.value,
    monthlyRepeatDate: monthlyRepeat.value,
  }

  emit('change', updateDate)
}

const clearAll = () => {
  date.value = null
  startDate.value = null
  endDate.value = null
  startTime.value = null
  endTime.value = null
  selectDay.value = []
  repeatedOn.value = null
  monthlyRepeat.value = null
  monthlyDayRepeat.value = null
  monthlyWeekRepeat.value = null
  customWeek.value = null
  custom.value = null
  customOption.value = null
  customRepeatDate.value = null
  selectDayCustom.value = []
  update()
}

const weeklyDatesSelect = (
  weekStartDate: any,
  weekEndDate: any,
  customSelectDay: any,
) => {
  const dates = []

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  let newStartDate = weekStartDate
  while (newStartDate <= weekEndDate) {
    const dayIndex = new Date(newStartDate).getDay()
    if (customSelectDay.includes(daysOfWeek[dayIndex]))
      dates.push(new Date(newStartDate))
    newStartDate = new Date(newStartDate).setDate(new Date(newStartDate).getDate() + 1)
  }

  return dates
}

// eslint-disable-next-line sonarjs/cognitive-complexity
const generateDateRange = () => {
  let days: any[] = []
  const today = new Date()
  const year = today.getFullYear()
  for (let month = today.getMonth(); month < 12; month++) {
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate()

    // If daily is selected, add all days from today to the end of the year

    if (repeatedOn.value === 'daily') {
      const startDay = endDate.value
        ? new Date(endDate.value).getDate()
        : month === today.getMonth()
          ? today.getDate()
          : 1

      for (let day = startDay; day <= lastDayOfMonth; day++) {
        const dailyDate = new Date(year, month, day)

        days.push(dailyDate)
      }
    }
    else if (repeatedOn.value === 'yearly') {
      const startYear = endDate.value ? moment(endDate.value).year() : year

      for (
        let currentYear = startYear;
        currentYear <= startYear + 1;
        currentYear++
      ) {
        const yearlyDate = endDate.value
          ? moment(endDate.value).set('year', currentYear).toDate()
          : moment().set('year', currentYear).toDate()

        days.push(yearlyDate)
      }
    }
    else if (repeatedOn.value === 'monthly') {
      if (
        monthlyOption.value === 'week'
        && monthlyRepeat.value
        && monthlyRepeat.value >= 1
        && monthlyRepeat.value <= 31
      ) {
        const monthlySelectedDay = monthlyRepeat.value

        const monthlyDate = new Date(year, today.getMonth(), monthlySelectedDay)

        while (monthlyDate <= new Date(year + 2, 11, 31)) {
          if (today <= monthlyDate)
            days.push(new Date(monthlyDate))

          // Move to the next month
          monthlyDate.setMonth(monthlyDate.getMonth() + 1)
        }
      }
      else if (
        monthlyOption.value === 'day'
        && monthlyDayRepeat.value
        && monthlyWeekRepeat.value
      ) {
        const daysOfWeek = ['first', 'second', 'third', 'fourth', 'fifth']

        const selectedWeek
          = daysOfWeek.indexOf(monthlyDayRepeat.value.toLowerCase()) + 1

        const dayMap: { [key: string]: number } = {
          sunday: 0,
          monday: 1,
          tuesday: 2,
          wednesday: 3,
          thursday: 4,
          friday: 5,
          saturday: 6,
        }

        const selectedDayForMonth = dayMap[monthlyWeekRepeat.value.toLowerCase()]

        // // Calculate the date of the selected day in the current month
        for (let i = 0; i < 12; i++) {
          const monthlyYear
            = today.getFullYear() + Math.floor((today.getMonth() + i) / 12)

          const getMonth = (today.getMonth() + i) % 12

          const firstDayOfMonth = new Date(monthlyYear, getMonth, 1)
          const monthlyDate = firstDayOfMonth

          // Find the first occurrence of the selected day in the current month
          while (monthlyDate.getDay() !== selectedDayForMonth)
            monthlyDate.setDate(monthlyDate.getDate() + 1)

          // Move to the selected week
          monthlyDate.setDate(monthlyDate.getDate() + (selectedWeek - 1) * 7)

          // If the month has changed, move to the next week
          if (monthlyDate.getMonth() !== getMonth)
            continue // Skip to the next iteration if not in the correct month

          // Add the date to the days array
          days.push(new Date(monthlyDate))
        }
      }
      else if (endDate.value) {
        const parsedDate = new Date(endDate.value)
        const currentDate = new Date(parsedDate)
        while (currentDate <= new Date(year + 2, 11, 31)) {
          days.push(new Date(currentDate))

          // Move to the next month
          currentDate.setMonth(currentDate.getMonth() + 1)
        }
      }
      else {
        for (let i = 0; i < 24; i++) {
          const currentDateForMonth = new Date(
            year + Math.floor((today.getMonth() + i) / 12),
            (today.getMonth() + i) % 12,
            today.getDate(),
          )

          days.push(currentDateForMonth)
        }
      }
    }
    else if (repeatedOn.value === 'weekly') {
      if (selectDay?.value && selectDay?.value?.length) {
        const currentDay = new Date(today)
        const endOfYear = new Date(currentDay.getFullYear() + 1, 11, 31)

        days = [
          ...days,
          ...weeklyDatesSelect(currentDay, endOfYear, selectDay.value),
        ]

        update()
      }
    }
    else if (
      repeatedOn.value === 'custom'
      && custom.value
    && customWeek.value
    && ((custom.value === 'month' && customRepeatDate.value)
      || custom.value === 'week')
    ) {
      let currentDate = new Date(today)

      const endDateOfNextYear = moment(today)
        .add(1, 'years')
        .endOf('year')
        .toDate()

      while (currentDate <= endDateOfNextYear) {
        if (custom.value === 'week') {
          const startOfWeek = moment(currentDate).startOf('week').toDate()
          const endOfWeek = moment(currentDate).endOf('week').toDate()

          days = [
            ...days,
            ...weeklyDatesSelect(startOfWeek, endOfWeek, selectDayCustom.value),
          ]
          currentDate = moment(currentDate)
            .add(customWeek.value, 'weeks')
            .toDate()
        }
        else if (custom.value === 'month') {
          currentDate.setDate(Number(customRepeatDate.value))

          if (currentDate >= today)
            days.push(new Date(currentDate))

          currentDate = moment(currentDate)
            .add(customWeek.value, 'months')
            .toDate()
        }
      }
    }
  }

  return days
}

// watchers
watchEffect(() => {
  if (['daily', 'yearly', 'monthly', 'weekly', 'custom'].includes(repeatedOn.value))
    selectedDay.value = generateDateRange()
  if (date.value)
    update()

  const val = (date.value && typeof date.value == 'string') ? date.value.split('to') : []

  if (val && val.length > 1) {
    startDate.value = val[0]
    endDate.value = val[1]
  }
  else if (val && val.length) {
    startDate.value = startDate.value ? val[0] : null
    endDate.value = !startDate.value ? val[0] : endDate.value
  }
  if (startDate.value)
    showStartDate.value = true
})

// Hooks
onMounted(() => {
  startTime.value = props?.startTime
  endTime.value = props?.endTime
  startDate.value = props?.startDate
  endDate.value = props?.endDate
  date.value
    = (startDate.value && endDate.value)
      ? `${startDate.value} to ${endDate.value}`
      : startDate.value
        ? startDate.value
        : endDate.value
          ? endDate.value
          : ''
  isRepeatedVisible.value = props?.isRepeatedShow
  isAddTimeVisible.value = props?.isTimerShow
  repeatedOn.value = props?.repeatedOn
  custom.value = props?.customWeekOrMonthly
  selectDayCustom.value = props?.customSelectedDays
  customRepeatDate.value = props?.customRepeatDate
  customWeek.value = props?.customEveryWeek
  selectDay.value = props?.weeklySelectDays
  monthlyDayRepeat.value = props?.monthlyDayRepeat
  monthlyWeekRepeat.value = props?.monthlyWeekRepeat
  monthlyOption.value = props?.monthlyWeekOrDay
  monthlyRepeat.value = props?.monthlyRepeatDate
  customOption.value = props?.customWeekOrDay
})
</script>

<template>
  <VBtn
    v-bind="$attrs"
    :density="props?.density"
    :size="props?.size"
    :color="props?.color"
    :variant="props?.variant"
    :icon="isIconOnly ? '' : undefined"
    :theme="props?.theme"
    class="text-primary ph-date-picker"
  >
    <template
      v-if="props?.prependIcon?.length && !props?.icon?.length"
      #prepend
    >
      <VIcon :icon="props?.prependIcon" />
    </template>
    <VIcon
      v-if="isIconOnly"
      :icon="props?.icon"
    />
    <span
      v-if="props?.label?.length"
      class="text-primary"
    >
      {{ startDate || endDate ? formattedDateRange : t(props?.label) }}
    </span>
    <template
      v-if="props?.appendIcon?.length && !props?.icon?.length"
      #append
    >
      <VIcon :icon="props?.appendIcon" />
    </template>
    <VMenu
      :offset="props?.offset"
      :location="props?.location"
      :open-on-click="props?.openOnClick"
      :open-on-hover="props?.openOnHover"
      :activator="props?.activator"
      :theme="props?.theme"
      :width="props?.width"
      :close-on-content-click="props?.closeOnContentClick"
      :open-delay="props?.openDelay"
      class="ph-date-picker__picker"
    >
      <VCard max-width="360">
        <VCardText>
          <VRow class="ph-date-picker__date-range">
            <VCol
              cols="6"
              class="d-flex justify-start align-center"
            >
              <VBtn
                v-if="!showStartDate"
                @click="showStartDate = true"
              >
                {{ t('datepicker.startDate') }}
              </VBtn>

              <VTextField
                v-if="props?.dateFields && showStartDate"
                v-model="startDate"
                :placeholder="t('datepicker.startDate')"
                class="ph-date-picker__startdate"
                @click:clear="update"
              />
            </VCol>
            <VCol
              cols="6"
              class="d-flex justify-end align-center"
            >
              <VTextField
                v-if="props?.dateFields"
                v-model="endDate"
                :placeholder="t('datepicker.dueDate')"
                class="ph-date-picker__duedate"
                @click:clear="update"
              />
            </VCol>
          </VRow>
          <VRow v-if="isAddTimeVisible">
            <VCol cols="6">
              <VSelect
                v-model="startTime"
                :placeholder="t('datepicker.startTime')"
                :items="TIME_LIST"
              />
            </VCol>
            <VCol cols="6">
              <VSelect
                v-model="endTime"
                :placeholder="t('datepicker.dueTime')"
                :items="TIME_LIST"
                class="ph-date-picker__repeated-dropdown"
              />
            </VCol>
          </VRow>
          <VRow class="ms-1 ph-date-picker__flat-picker">
            <VCol cols="12">
              <FlatPickr
                :key="selectedDay.length"
                v-model="date"
                :config="config"
                @on-change="update"
              />
            </VCol>
          </VRow>
          <div
            v-if="isRepeatedVisible"
            class="mt-3"
          >
            <VRow>
              <VCol
                cols="6"
                class="d-flex align-center"
              >
                {{ t('datepicker.repeats') }}
              </VCol>
              <VCol cols="6">
                <VSelect
                  v-model="repeatedOn"
                  :items="props?.repeatedSlot?.repeatedList"
                />
              </VCol>
            </VRow>
            <div v-if="repeatedOn === 'custom'">
              <VRow>
                <VCol
                  cols="4"
                  class="mt-1"
                >
                  {{ t('datepicker.every') }}
                </VCol>
                <VCol cols="4">
                  <VSelect
                    v-model="customWeek"
                    :items="props?.repeatedSlot?.customWeek"
                  />
                </VCol>
                <VCol cols="4">
                  <VSelect
                    v-model="custom"
                    :items="props?.repeatedSlot?.custom"
                  />
                </VCol>
              </VRow>
              <VRow v-if="custom === 'month'">
                <VCol cols="6">
                  <VRadioGroup v-model="customOption">
                    <VRadio
                      :label="t('datepicker.OnDay')"
                      value="week"
                    />
                  </VRadioGroup>
                </VCol>
                <VCol cols="6">
                  <VSelect
                    v-model="customRepeatDate"
                    :items="props?.repeatedSlot?.monthlyDate"
                  />
                </VCol>
              </VRow>
            </div>
            <div
              v-if="
                ['weekly'].includes(repeatedOn)
                  || (['custom'].includes(repeatedOn) && custom === 'week')
              "
            >
              <div class="mt-2">
                {{ t('datepicker.onTheseDays') }}
              </div>
              <VRow class="mt-1">
                <div
                  v-for="item in DAYS"
                  :key="item.label"
                  class="d-flex"
                >
                  <VCheckbox
                    v-if="repeatedOn === 'weekly'"
                    v-model="selectDay"
                    :label="item.label"
                    :value="item.value"
                    class="ph-date-picker__checkbox"
                  />
                  <VCheckbox
                    v-if="repeatedOn === 'custom'"
                    v-model="selectDayCustom"
                    :label="item.label"
                    :value="item.value"
                    class="ph-date-picker__checkbox"
                  />
                </div>
              </VRow>
            </div>
            <div v-if="repeatedOn === 'monthly'">
              <VRow>
                <VCol cols="4">
                  <div>
                    <VRadioGroup v-model="monthlyOption">
                      <VRadio
                        :label="t('datepicker.OnThe')"
                        value="day"
                      />
                    </VRadioGroup>
                  </div>
                </VCol>
                <VCol cols="4">
                  <VSelect
                    v-model="monthlyDayRepeat"
                    :disabled="monthlyOption === 'week'"
                    :items="props?.repeatedSlot?.monthlyDay"
                  />
                </VCol>
                <VCol cols="4">
                  <VSelect
                    v-model="monthlyWeekRepeat"
                    :disabled="monthlyOption === 'week'"
                    :items="props?.repeatedSlot?.monthlyWeek"
                  />
                </VCol>
              </VRow>

              <VRow>
                <VCol cols="6">
                  <VRadioGroup v-model="monthlyOption">
                    <VRadio
                      :label="t('datepicker.OnDay')"
                      value="week"
                    />
                  </VRadioGroup>
                </VCol>
                <VCol cols="6">
                  <VSelect
                    v-model="monthlyRepeat"
                    :disabled="monthlyOption === 'day'"
                    :items="props?.repeatedSlot?.monthlyDate"
                  />
                </VCol>
              </VRow>
            </div>
            <div v-if="repeatedOn === 'periodically'">
              <VRow>
                <VCol
                  cols="6"
                  class="mt-1"
                >
                  {{ t('datepicker.daysComplete') }}
                </VCol>
                <VCol cols="6">
                  <VSelect
                    v-model="monthlyRepeat"
                    :items="props?.repeatedSlot?.monthlyDate"
                  />
                </VCol>
              </VRow>
            </div>
          </div>
          <VDivider class="mt-4 mb-2" />
          <VRow class="mt-1">
            <VCol cols="4">
              <VBtn
                v-if="props?.repeatedSlot?.isDisplay"
                :variant="props?.variant"
                class="ph-date-picker-view__timebtn me-4"
                icon=""
                @click="
                  (isAddTimeVisible = !isAddTimeVisible),
                  (isRepeatedVisible = false)
                "
              >
                <VIcon :icon="props?.timeSlot?.icon" />
              </VBtn>
              <VBtn
                v-if="props?.timeSlot?.isDisplay"
                :variant="props?.variant"
                class="ph-date-picker__repeatedbtn"
                icon=""
                @click="
                  (isRepeatedVisible = !isRepeatedVisible),
                  (isAddTimeVisible = false)
                "
              >
                <VIcon :icon="props?.repeatedSlot?.icon" />
              </VBtn>
            </VCol>
            <VCol
              cols="8"
              class="d-flex align-center justify-end"
            >
              <VBtn
                :variant="props?.variant"
                class="ph-date-picker__clearbtn"
                @click="clearAll"
              >
                {{ t('datepicker.clearAll') }}
              </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VMenu>
  </VBtn>
</template>

<style lang="scss" scoped>
.ph-date-picker {
  // Flatpickr
  &__flat-picker {
    :deep(.flatpickr-calendar) {
      background: none;

      .flatpickr-months .flatpickr-month,
      .flatpickr-current-month .flatpickr-monthDropdown-months,
      span.flatpickr-weekday {
        background: none;
      }

      .flatpickr-current-month {
        .flatpickr-monthDropdown-months,
        input.cur-year {
          font-size: 1.17rem;
        }

        .flatpickr-monthDropdown-months {
          padding-inline-end: 1rem;
          padding-inline-start: 0;
          text-align: end;
        }
      }

      .flatpickr-day.inRange,
      .flatpickr-day.prevMonthDay.inRange,
      .flatpickr-day.nextMonthDay.inRange,
      .flatpickr-day.today.inRange,
      .flatpickr-day.prevMonthDay.today.inRange,
      .flatpickr-day.nextMonthDay.today.inRange,
      .flatpickr-day:hover, .flatpickr-day.prevMonthDay:hover,
      .flatpickr-day.nextMonthDay:hover, .flatpickr-day:focus,
      .flatpickr-day.prevMonthDay:focus,
      .flatpickr-day.nextMonthDay:focus {
        border-color: rgb(var(--v-theme-secondary));
        background: rgb(var(--v-theme-secondary));
      }

      .flatpickr-day.inRange {
        box-shadow: -5px 0 0 rgb(var(--v-theme-secondary)), 5px 0 0 rgb(var(--v-theme-secondary));
      }

      .flatpickr-day.selected,
      .flatpickr-day.startRange,
      .flatpickr-day.endRange,
      .flatpickr-day.selected.inRange,
      .flatpickr-day.startRange.inRange,
      .flatpickr-day.endRange.inRange,
      .flatpickr-day.selected:focus,
      .flatpickr-day.startRange:focus,
      .flatpickr-day.endRange:focus,
      .flatpickr-day.selected:hover,
      .flatpickr-day.startRange:hover,
      .flatpickr-day.endRange:hover,
      .flatpickr-day.selected.prevMonthDay,
      .flatpickr-day.startRange.prevMonthDay,
      .flatpickr-day.endRange.prevMonthDay,
      .flatpickr-day.selected.nextMonthDay,
      .flatpickr-day.startRange.nextMonthDay,
      .flatpickr-day.endRange.nextMonthDay {
        border-color: rgb(var(--v-theme-success));
        background: rgb(var(--v-theme-success));
      }
    }

    .flatpickr-input {
      display: none;
    }

    .flatpickr-days {
      border-inline-end: none !important;
      border-inline-start: none !important;
    }

    .flatpickr-innerContainer {
      border-block-end: none !important;
    }
  }

  &__date-range {
    .v-field__input {
      padding-inline-end: 0 !important;
    }
  }

  .v-selection-control--inline {
    display: grid !important;
    padding: 0.3125rem;
  }

  .v-selection-control--inline .v-label {
    margin-inline-start: 0.625rem;
  }
}
</style>
