<template>
  <div>
    <h1 :class="classes">{{ msg }} = {{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
    title: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const count = ref(0)
    const classes = computed(() => ({
      title: props.title,
    }))
    return { count, classes }
  },
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
