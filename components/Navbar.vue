<template>
    <div>
      <!-- Navbar -->
      <nav class="bg-gray-50 dark:bg-gray-800 shadow-md">
        <div class="container mx-auto flex justify-between items-center p-6">
          <NuxtLink
              to="https://progolf.mindstormstudios.com"
              target="_blank"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                src="https://img.icons8.com/?size=100&id=9767&format=png"
                alt="Home Icon"
                class="w-6 h-6"
              />
              <span class="ms-3">ProGolf CMS</span>
            </NuxtLink>
          
          <!-- Menu Links -->
          <div class="hidden  sm:flex space-x-2">
            <NuxtLink
              to="/"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                src="https://img.icons8.com/?size=100&id=2797&format=png"
                alt="Home Icon"
                class="w-6 h-6"
              />
              <span class="ms-3">Home</span>
            </NuxtLink>
  
            <NuxtLink
              to="/offers"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                src="https://img.icons8.com/?size=100&id=j0ExoHy0FNN5&format=png"
                alt="Offers Icon"
                class="w-6 h-6"
              />
              <span class="flex-1 ms-3">Offers</span>
            </NuxtLink>
          </div>
          </div>
        </nav>
    </div>
  </template>
  