<template>
    <div>
        <div class="flex items-center justify-between">
            <h3 class="text-2xl font-bold text-left py-2">Danh sách khách hàng</h3>
            <button @click="Create" class="px-5 p-1.5 rounded bg-gray-600 font-bold text-white  hover:bg-gray-300 hover:text-gray-600  transition duration-400 ease-in-out">
                Thêm Khách hàng
            </button>
            <div class="flex items-center px-5 p-1.5 rounded bg-gray-600 font-bold text-white">
                <label class="mr-2">Sắp xếp theo Mã chi nhánh:</label>
                <!-- Dropdown -->
                <select class="text-gray-600" v-model="selectedSortOption" @change="sortCustomers">
                    <option v-for="option in sortByOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                    </option>
                </select>   
            </div>
            <!-- <add-customer-modal></add-customer-modal> -->
        </div>
        <div class="overflow-x-auto relative  sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                <th scope="col" class="py-3 px-6">STT</th>
                <th scope="col" class="py-3 px-6">CMND</th>
                <th scope="col" class="py-3 px-6">Họ và tên</th>
                <th scope="col" class="py-3 px-6">Email</th>
                <th scope="col" class="py-3 px-6">Số điện thoại</th>
                <th scope="col" class="py-3 px-6">Ngày sinh</th>
                <th scope="col" class="py-3 px-6">Mã chi nhánh</th>
                <th scope="col" class="py-3 px-6">Loại thẻ</th>
                <th scope="col" class="py-3 px-6">Mã thẻ</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(item, index) in customers"
                    :key="index">
                    <th scope="row" class="py-3 px-6">{{  index + 1 }}</th>
                    <th scope="row" class="py-3 px-6">{{  item.CMND }}</th>
                    <th scope="row" class="py-3 px-6">{{  item.HoVaTen }}</th>
                    <th scope="row" class="py-3 px-6">{{  item.Email }}</th>
                    <th scope="row" class="py-3 px-6">{{  item.SDT }}</th>
                    <th scope="row" class="py-3 px-6">{{  item.NgaySinh }}</th>
                    <th scope="row" class="py-3 px-6">{{  item.MaChiNhanh }}</th>
                    <th scope="row" class="py-3 px-6">{{  item.LoaiThe }}</th>
                    <th scope="row" class="py-3 px-6">{{  item.MaThe }}</th>
                    <button @click="getRating(item.CMND)" class="border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </button>
                    <span class="inline-block w-4"></span>
                    <button @click="Update(item)" class="border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                    <span class="inline-block w-4"></span>
                    <button @click="openDeleteModal(item.CMND)" class="border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                    <!-- <button @click="Delete(item.CMND)" class=" border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                        
                    </button> -->
                    
                </tr>
                    
            </tbody>
            </table>
        </div>

        <div v-if="showModal" class="fixed inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen">
                <div class="bg-gray-600 p-8 w-1/2 rounded">
                    <p class="text-2xl font-bold mb-4 text-white">Bạn có chắc chắn muốn xóa?</p>
                    <div class="mt-4">
                            <button @click="cancelDelete" class="ml-2 text-white">Hủy</button>
                            <span class="inline-block w-4"></span>
                            <button @click="confirmDelete" class="bg-gray-900 text-white py-2 px-4 rounded">Xóa</button>
                        </div>
                </div>
            </div>
        </div>

        <div v-if="isModalOpen" id="customersModal" class="fixed inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen">
                <div class="bg-gray-600 p-8 w-1/2 rounded">
                    <h3 class="text-2xl font-bold mb-4 text-white">Thông tin khách hàng khách hàng</h3>
        
                    <!-- Form for customer information -->
                    <form @submit.prevent="submitForm">
                        <div class="mb-4 flex items-center">
                            <label class="block text-white text-sm font-semibold mb-2 w-24">CMND:</label>
                            <input id="CMND" v-model="customersModal.dataCustomers.CMND" type="text" class="border p-2 w-full" required />
                        </div>

                        <div class="mb-4 flex items-center">
                            <label class="block text-white text-sm font-semibold mb-2 w-24">Họ tên:</label>
                            <input id="HoVaTen" v-model="customersModal.dataCustomers.HoVaTen" type="text" class="border p-2 w-full" required />
                        </div>

                        <div class="mb-4 flex items-center">
                            <label class="block text-white text-sm font-semibold mb-2 w-24">Email:</label>
                            <input id="Email" v-model="customersModal.dataCustomers.Email" type="text" class="border p-2 w-full" required />
                        </div>

                        <div class="mb-4 flex items-center">
                            <label class="block text-white text-sm font-semibold mb-2 w-24">SĐT:</label>
                                <input id="SDT" v-model="customersModal.dataCustomers.SDT" type="text" class="border p-2 w-full" required />
                        </div>

                        <div class="mb-4 flex items-center">
                            <label class="block text-white text-sm font-semibold mb-2 w-24">Ngày sinh:</label>
                            <input id="NgaySinh" v-model="customersModal.dataCustomers.NgaySinh" type="text" class="border p-2 w-full" required />
                        </div>

                        <div class="mb-4 flex items-center">
                            <label class="block text-white text-sm font-semibold mb-2 w-24">Mã chi nhánh:</label>
                            <input id="MaChiNhanh" v-model="customersModal.dataCustomers.MaChiNhanh" type="text" class="border p-2 w-full" required />
                        </div>
                        <div class="mb-4 flex items-center">
                            <label class="block text-white text-sm font-semibold mb-2 w-24">Loại thẻ:</label>
                            <input id="LoaiThe" v-model="customersModal.dataCustomers.LoaiThe" type="text" class="border p-2 w-full" required />
                        </div>
                        
                        <div class="mt-4">
                            <button @click="closeModal" class="ml-2 text-white">Hủy</button>
                            <span class="inline-block w-4"></span>
                            <button @click="Submit" class="bg-gray-900 text-white py-2 px-4 rounded">Lưu</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </template>
  
<script>
import AddCustomerModal from '../components/AddCustomerModal.vue';
import axios from "../fetch/axios";
import { Modal } from "flowbite";

export default {
    components: {
        AddCustomerModal,
    },
    props: [],
    name:"customer",
    data(){
        return{
            customers:[],
            customersModal:{
                txtTitle:'',
                submitType: null,
                dataCustomers:{
                    CMND: null,
                    HoVaTen: null,
                    Email: null,
                    SDT: null,
                    NgaySinh: null,
                    MaChiNhanh: null,
                    LoaiThe: null,
                    MaThe: null,
                },
            },
            modal: null,
            isModalOpen: false,
            showModal: false,
            customerToDelete: null,
            rating: null,
            sortByOptions: [
                { label: "Sắp xếp tăng dần", value: "ascending" },
                { label: "Sắp xếp giảm dần", value: "descending" },
            ],
            selectedSortOption: "ascending",
        };
    },
    mounted(){
        // this.modal = new Modal(document.querySelector("#customersModal"));
        this.getCustomer();
    },
    methods: {
        async getCustomer() {
            try {
                const res = await axios.get('http://localhost:3000/khachhang');
                //  
                this.customers = res.data;
            } catch (error) {
                console.log('Cannot call API', error);
            }
        },
        async Create() {
            this.isModalOpen = true;
            // this.modal.toggle();
            this.customersModal = {
                txtTitle: "Thêm mới khách hàng",
                submitType: "create",
                dataCustomers:{
                    CMND: null,
                    HoVaTen: null,
                    Email: null,
                    SDT: null,
                    NgaySinh: null,
                    MaChiNhanh: null,
                    LoaiThe: null,
                },
            };
        },
        async Update(customerItem) {
            this.isModalOpen = true;
            // this.modal.toggle();
            this.customersModal = {
                txtTitle: "Sửa khách hàng",
                submitType: "update",
                dataCustomers: {
                    CMND: customerItem.CMND,
                    HoVaTen: customerItem.HoVaTen,
                    Email: customerItem.Email,
                    SDT: customerItem.SDT,
                    NgaySinh: customerItem.NgaySinh,
                    MaChiNhanh: customerItem.MaChiNhanh,
                    LoaiThe: customerItem.LoaiThe,
                },
            };
        },
        async Submit(){
            const submitType = this.customersModal.submitType;
            console.log(submitType);
            const data = this.customersModal.dataCustomers;
            if (this.validateForm()) {
                if (submitType === "create") {
                    // "service/store" là url của backend apis
                    console.log(data);
                    await axios.post('http://localhost:3000/khachhang/create', data);
                    
                } else {
                    const { CMND, ...rest } = data;
                    console.log(rest);
                    await axios.put(`http://localhost:3000/khachhang/update/${CMND}`, rest);
                }
            }

            await this.getCustomer();
            // this.modal.hide();
        },
        async Delete(CMND) {
            await axios.delete(`http://localhost:3000/khachhang/delete/${CMND}`);
            await this.getCustomer();
        },
        async getRating(CMND) {
            try {
                const res = await axios.get(`http://localhost:3000/khachhang/rating/${CMND}`);
                this.rating = res.data.avgRating;
                alert("Rating trung bình của khách hàng này là: " + this.rating);
            } catch (error) {
                console.log('Cannot call API', error);
            }
        },
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
            this.customersModal.dataCustomers.CMND = '';
            this.customersModal.dataCustomers.HoVaTen = '';
            this.customersModal.dataCustomers.Email = '';
            this.customersModal.dataCustomers.SDT = '';
            this.customersModal.dataCustomers.NgaySinh = '';
            this.customersModal.dataCustomers.MaChiNhanh = '';
        },
        async submitForm() {
            // Perform form validation here
            if (this.validateForm()) {
            // this.modal.hide();
            // Perform form submission logic
            console.log('Thêm khách hàng thành công');
            // Close the modal after successful submission
            this.closeModal();
            }
            else {
                alert("Thông tin nhập không chính xác, bạn hãy kiểm tra lại!!");
            }
        },
        validateForm() {
            // Implement your form validation logic here
            // Check if fields are not empty, etc.
            const isCmndValid = /^\d{12}$/.test(this.customersModal.dataCustomers.CMND);
            const isHoVaTenValid = this.customersModal.dataCustomers.HoVaTen.trim() !== '';
            const isEmailValid = this.customersModal.dataCustomers.Email.trim() !== '';
            const isSdtValid = /^\d{10}$/.test(this.customersModal.dataCustomers.SDT);
            const isNgaySinhValid = /^\d{4}-\d{2}-\d{2}$/.test(this.customersModal.dataCustomers.NgaySinh);
            const isMaChiNhanhValid = ['D49Q7', 'THDTP', 'BKLTK', 'TQDPN', 'PVTGV'].includes(this.customersModal.dataCustomers.MaChiNhanh);
            const isLoaiTheValid = ['NOR', 'VIP'].includes(this.customersModal.dataCustomers.LoaiThe);

            return (
                isCmndValid &&
                isHoVaTenValid &&
                isEmailValid &&
                isSdtValid &&
                isNgaySinhValid &&
                isMaChiNhanhValid &&
                isLoaiTheValid
            );
        },
        sortCustomers() {
            if (this.selectedSortOption === "ascending") {
                this.customers.sort((a, b) => a.MaChiNhanh.localeCompare(b.MaChiNhanh));
            } else {
                this.customers.sort((a, b) => b.MaChiNhanh.localeCompare(a.MaChiNhanh));
            }
        },
        openDeleteModal(CMND) {
            this.showModal = true;
            this.customerToDelete = CMND;
            },
        cancelDelete() {
            this.showModal = false;
            this.customerToDelete = null;
        },
        async confirmDelete() {
            await axios.delete(`http://localhost:3000/khachhang/delete/${this.customerToDelete}`);
            await this.getCustomer();
            this.showModal = false;
            this.customerToDelete = null;
        },
    },
}
</script>

<style>

</style>