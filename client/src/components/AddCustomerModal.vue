<!-- AddCustomerModal.vue -->
<template>
    <div>
      <!-- Trigger button to open the modal -->
      <button @click="openModal" class="px-5 p-1.5 rounded bg-gray-600 font-bold text-white  hover:bg-gray-300 hover:text-gray-600  transition duration-400 ease-in-out">
        Thêm Khách hàng
      </button>
  
      <!-- Modal -->
      <div v-if="isModalOpen" class="fixed inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen">
          <div class="bg-white p-8 w-1/2 rounded">
            <h2 class="text-2xl font-bold mb-4">Thêm Khách hàng</h2>
  
            <!-- Form for customer information -->
            <form @submit.prevent="submitForm">
                <!-- CMND -->
              <div class="mb-4 flex items-center">
                <label class="block text-gray-600 text-sm font-semibold mb-2 w-24">CMND:</label>
                <input v-model="cmnd" type="text" class="border p-2 w-full" required />
              </div>

                <!-- Họ và tên -->
              <div class="mb-4 flex items-center">
                <label class="block text-gray-600 text-sm font-semibold mb-2 w-24">Họ tên:</label>
                <input v-model="HVT" type="text" class="border p-2 w-full" required />
              </div>

              <div class="mb-4 flex items-center">
                <label class="block text-gray-600 text-sm font-semibold mb-2 w-24">Email:</label>
                <input v-model="email" type="text" class="border p-2 w-full" required />
              </div>

              <div class="mb-4 flex items-center">
                <label class="block text-gray-600 text-sm font-semibold mb-2 w-24">SĐT:</label>
                <input v-model="sdt" type="text" class="border p-2 w-full" required />
              </div>

              <div class="mb-4 flex items-center">
                <label class="block text-gray-600 text-sm font-semibold mb-2 w-24">Ngày sinh:</label>
                <input v-model="bdate" type="text" class="border p-2 w-full" required />
              </div>

              <div class="mb-4 flex items-center">
                <label class="block text-gray-600 text-sm font-semibold mb-2 w-24">Mã chi nhánh:</label>
                <input v-model="mcn" type="text" class="border p-2 w-full" required />
              </div>
              <!-- Repeat similar structure for other input fields -->
  
              <div class="mt-4">
                <button @click="closeModal" class="ml-2 text-gray-600">Hủy</button>
                <span class="inline-block w-4"></span>
                <button type="submit" class="bg-gray-600 text-white py-2 px-4 rounded">Lưu</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isModalOpen: false,
        cmnd: '',
        // Add other data properties for other fields
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
        // Clear form fields
        this.cmnd = '';
        // Clear other fields
      },
      submitForm() {
        // Perform form validation here
        if (this.validateForm()) {
          // Perform form submission logic
          console.log('Form submitted successfully');
          // Close the modal after successful submission
          this.closeModal();
        }
      },
      validateForm() {
        // Implement your form validation logic here
        // Check if fields are not empty, etc.
        return this.cmnd.trim() !== '' /* && Add other validation conditions */;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  