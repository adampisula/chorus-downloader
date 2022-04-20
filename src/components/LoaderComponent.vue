<template>
  <div class="fulfilling-square-spinner mx-auto mt-4">
    <div class="spinner-inner"></div>
  </div>
</template>

<style scoped>
.fulfilling-square-spinner , .fulfilling-square-spinner * {
  box-sizing: border-box;
}

.fulfilling-square-spinner {
  height: 30px;
  width: 30px;
  position: relative;
  border: 4px solid white;
  animation: fulfilling-square-spinner-animation 2.5s infinite ease;
}

.fulfilling-square-spinner .spinner-inner {
  vertical-align: top;
  display: inline-block;
  background-color: white;
  width: 100%;
  opacity: 1;
  animation: fulfilling-square-spinner-inner-animation 2.5s infinite ease-in;
}

@keyframes fulfilling-square-spinner-animation {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes fulfilling-square-spinner-inner-animation {
  0% {
    height: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
}
</style>