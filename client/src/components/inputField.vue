<script setup>
const props = defineProps(["label", "type", "placeholder", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
    <label class="block mb-2 text-sm font-medium text-gray-900">{{
        props.label
    }}</label>
    <input
        :type="props.type"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @input="#emit('update:modelValue', $event.target.value)"
        class="text-sm rounded-lg focus:ring-blue-500 focus:border-e-500 block w-full p-2"
    />
</template>
