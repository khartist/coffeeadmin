<template>
    <div>
        <div class="flex items-center justify-between">
            <h3 class="text-2xl font-bold text-left py-2">Danh sách khách hàng</h3>
            <button
            class="px-5 p-1.5 rounded bg-gray-600 font-bold text-white  hover:bg-gray-300 hover:text-gray-600  transition duration-400 ease-in-out"
            type="button"
            @click="Create"
            >
                Thêm khách hàng
            </button>
        </div>
        <div class="overflow-x-auto relative  sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                <th scope="col" class="py-3 px-6">CMND</th>
                <th scope="col" class="py-3 px-6">Họ và tên</th>
                <th scope="col" class="py-3 px-6">Email</th>
                <th scope="col" class="py-3 px-6">Số điện thoại</th>
                <th scope="col" class="py-3 px-6">Ngày sinh</th>
                <th scope="col" class="py-3 px-6">Mã chi nhánh</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(item, index) in renters"
                    :key="index"
                    class="bg-white border-b"
                >
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        {{ index + 1 }}
                    </th>
                    <td class="px-6 py-4">
                        {{ item.name }}
                    </td>
                    <td class="px-6 py-4">
                        <p>SĐT: {{ item.phone }}</p>
                        <p>CCCD: {{ item.id_card }}</p>
                        <p>Ngày sinh: {{ item.birth_day_f }}</p>
                        <p>Giới tính: {{ item.sex_f }}</p>
                    </td>
                    <td class="px-6 py-4">
                        {{ item.address_f }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.room?.name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.main_contact ? "ok" : "" }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.status }}
                    </td>
                    <td class="px-6 py-4 flex justify-center gap-2">
                        <button
                            @click="Update(item)"
                            class="px-4 py-1 rounded bg-cyan-700 text-white font-bold"
                        >
                            Chỉnh sửa
                        </button>
                        <button
                            @click="Delete(item._id)"
                            class="px-4 py-1 rounded bg-red-800 text-white font-bold"
                        >
                            Xóa
                        </button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>