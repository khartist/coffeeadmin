<!-- <template>
    <div class="">
      <div class="bg-gray-200 p-4 grid place-items: center">
        <a class="text-red-900 text-center">Đắng Coffee</a>
      </div>
    </div>

    <div class="grid place-items:center bg-gray-200">
      <div class="">
        <form>
          <h1 class = "bg-gray-200 p-4 text-center text-red-900">Nice to meet you, again</h1>
          <div class="form_input_body">
            <div class="grid place-items:center">
              <input v-model = "uName" class = "rounded-md my-1 py-2 px-4 text-red-900 bg-blue-500" type="text" placeholder="Email" name = "uName" required />
              <i class="bx bx-user-pin"></i>
            </div>
            <div class="grid place-items:center">
              <input v-model = "pwd" class = "rounded-md my-1 py-2 px-4 text-red-900 bg-blue-500" type="password" placeholder="Password" name = "pwd" required />
              <i class="bx bx-lock"></i>
            </div>
            <div class="grid place-items:center">
                <button type="submit" class="rounded-md my-1 py-2 px-4 text-red-900 bg-blue-500">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template> -->

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-200">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h2 class="text-2xl font-bold mb-4 text-gray-800">Đắng Cafe</h2>
      <p class="text-sm text-gray-600 mb-4">Chào mừng bạn quay lại!</p>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-600 mb-2">Tên đăng nhập:</label>
          <input v-model="username" type="text" id="username" name="username" class="w-full border p-2 rounded focus:outline-none focus:border-blue-500">
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-600 mb-2">Mật khẩu:</label>
          <input v-model="password" type="password" id="password" name="password" class="w-full border p-2 rounded focus:outline-none focus:border-blue-500">
        </div>

        <button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Đăng nhập
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (this.username === 'sManager' && this.password === 'admin2003') {
        this.$router.push({ path: '/home' });
      } else {
        alert('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin đăng nhập.');
      }
    },
  },
};
</script>