<template>
  <div>
    <!-- ─── Navbar ─── -->
    <AppNav />

    <!-- ─── Page transition ─── -->
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="$route.fullPath" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
import AppNav from '@/components/AppNav.vue'
</script>
