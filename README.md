# ph-date-picker

## Version 1.0.0

# CoresTech - ph-date-picker

## Dependency

- Node Version : 18.14.1
- Vue3
- Typescript
- Vite
- @divyesh-zignuts/vue3-ts-date-picker
- @vue-flatpickr-component

## Install

[npm i @vue-flatpickr-component](npm%20i%20@divyesh-zignuts/vue3-ts-date-picker)

### Global

    import { createApp } from 'vue';
    import App from './App.vue';
    
    import PhDatePicker from '@divyesh-zignuts/vue3-ts-date-picker';
   
    const app = createApp(App);
    app.component('PhDatePicker', PhDatePicker);

### Local

    <script>
     import PhDatePicker from '@divyesh-zignuts/vue3-ts-date-picker';
      
     export default {
     components: { PhDatePicker }
     }
    </script>

## Props

- theme
- timeSlot
  - isDisplay
  - icon
  - size
- repeatedSlot
  - isDisplay
  - icon
  - size
  - repeatedList
- openOnClick
- openOnHover
- closeOnContentClick
- activator
- location
- dateFields
- width
- color
- size
- isVisible
- startDate
- endDate
- startTime
- endTime
- dateFormat
- isRepeatedShow
- isTimerShow
- repeatedOn
- customWeekOrMonthly
- customEveryWeek
- customRepeatDay
- customRepeatDate
- customSelectedDays
- weeklySelectDays
- monthlyDayRepeat
- monthlyWeekRepeat
- monthlyWeekOrDay
- monthlyRepeatDate
- selectedDates
- customWeekOrDay

## Props

| Prop  | Type  | Default Value |
| :------------ |:---------------:| -----:|
| theme | string | dark |
| density | string | compact |
| timeSlot | object | _undefined_ |
| timeSlot.isDisplay | boolean | true |
| timeSlot.icon | string | 'mdi-clock' |
| timeSlot.size | number, string | 18 |
| repeatedSlot | object | _undefined_ |
| repeatedSlot.isDisplay | boolean | true |
| repeatedSlot.icon | string | 'mdi-repeat' |
| repeatedSlot.size | number, string | 18 |
| repeatedSlot.repeatedList | any | _undefined_ |
| height | string, number | _undefined_ |
| width | string, number | _undefined_ |
| openOnClick | boolean | _undefined_ |
| openOnHover | boolean | _undefined_ |
| closeOnContentClick | boolean | _undefined_ |
| activator | string | 'parent' |
| location | any | _undefined_ |
| dateFields | boolean | true |
| color | string | 'primary' |
| size | string, number | 'small' |
| isVisible | boolean |  _undefined_ |
| startDate |  string , any |  _undefined_ |
| endDate |  string , any |  _undefined_ |
| startTime |  string , any |  _undefined_ |
| endTime |  string , any |  _undefined_ |
| dateFormat |  string , any |  _undefined_ |
| isRepeatedShow |  boolean | _undefined_ |
| isTimerShow |  boolean | _undefined_ |
| repeatedOn |  string | '' |
| customWeekOrMonthly | string , any |  _undefined_ |
| customEveryWeek |  string, any | _undefined_ |
| customRepeatDay |  string, any | _undefined_ |
| customRepeatDate | string, any | _undefined_ |
| customSelectedDays |  string[] , any | [] |
| weeklySelectDays | string[] , any | [] |
| monthlyDayRepeat |  string, any | _undefined_ |
| monthlyWeekRepeat | string, any | _undefined_ |
| monthlyWeekOrDay | string | any |
| monthlyRepeatDate |  string | any |
| selectedDates | string[] , any | _undefined_ |
| customWeekOrDay | string , any | _undefined_ |

## Features

- Start date (optional)
- Due date (optional)
- Start time (optional)
- Due time (optional
- Range selection (Start and due date will be updated accordingly)
- Repeated on (optional/select any one)
  - Daily
  - Weekly
  - Monthly
  - Yearly
  - Periodically
  - Custom
- Repeated on fields in checkbox/dropdown etc.
- Month change dropdown
- Clear all (mandatory)
