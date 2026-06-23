<template>
  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 18.5C11 18.5 1.5 12.5 1.5 6.5C1.5 4.01472 3.51472 2 6 2C7.96185 2 9.65 3.16 10.5 4.84C10.72 5.27 11.28 5.27 11.5 4.84C12.35 3.16 14.0382 2 16 2C18.4853 2 20.5 4.01472 20.5 6.5C20.5 12.5 11 18.5 11 18.5Z"
      :fill="filled ? '#e03226' : 'none'"
      :stroke="filled ? '#e03226' : '#9e9e9e'"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'HeartIcon',
  props: { filled: { type: Boolean, default: false } },
}
</script>
