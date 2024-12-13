<template>
    <div>
      <h1>Welcome, {{ name }}!</h1>
      <p>This is your first Nuxt 3 page.</p>
      <button class="btn btn-info">Click Me</button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        name: 'User',
      };
    },
  };
  </script>
  