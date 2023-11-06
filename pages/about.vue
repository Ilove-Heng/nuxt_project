<script lang="ts" setup></script>

<template>
  <div>
    Page: foo

    <nuxt-layout name="custom">
      <p>from layout custom</p>
      <nuxt-link to="/" class="text-blue-500">
        <button>
          Go back to index
        </button>
      </nuxt-link>
    </nuxt-layout>
  </div>
</template>

<style scoped></style>
