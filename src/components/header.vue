<script setup lang="ts">
import { navbar } from "@/components/ui";
</script>
<template>
  <main class="flex flex-col">
    <navbar />
    <!-- TODO: Set Img for background -->
    <section class="w-full h-[85vh] grid grid-cols-1 grid-rows-1">
      <img
        src="#"
        alt="Main-background"
        class="h-full w-full col-start-1 row-start-1"
      />
      <div
        class="self-center justify-self-start ml-[25vw] flex flex-col items-center col-start-1 row-start-1"
      >
        <h1>lorem header</h1>
        <p>Im Saeed :)))</p>
      </div>
    </section>
  </main>
</template>
<style scoped></style>
