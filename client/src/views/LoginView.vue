<template>
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
              <input class = "rounded-md my-1 py-2 px-4 text-red-900 bg-blue-500" type="text" placeholder="Email" value = "sManager" name = "uName" required />
              <i class="bx bx-user-pin"></i>
            </div>
            <div class="grid place-items:center">
              <input class = "rounded-md my-1 py-2 px-4 text-red-900 bg-blue-500" type="password" placeholder="Password" value = "sManager" name = "pwd" required />
              <i class="bx bx-lock"></i>
            </div>
            <div class="grid place-items:center">
                <button type="submit" class="rounded-md my-1 py-2 px-4 text-red-900 bg-blue-500">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>