<template>
    <v-container fluid fill-height class="d-flex align-center justify-center" style="background-image: url('https://example.com/golf-background.jpg'); background-size: cover; background-position: center; height: 50vh;">
      <v-row>
        <v-col cols="12" class="text-center">
          <h1 class="main-heading">Welcome to Pro Golf World</h1>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  // No script required for this basic example
  </script>
  
  <style scoped>
  .main-heading {
    font-size: 5rem; /* Adjust the font size */
    font-weight: 700; /* Bold text */
    color: #fff; /* White color for better contrast */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Optional: add shadow for better readability */
    margin: 0; /* Remove default margin */
  }
  </style>
  