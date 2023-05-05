<template>
    <div>
        <Navbar></Navbar>
        <h1 class="text-danger">this queue</h1>
        <div class="d-flex justify-content-center align-items-center h-100 bg-light">
      <div class="text-center">
        
        <img src="https://placehold.it/300x300" alt="QR Code" class="img-fluid">
      </div>
    </div>
    </div>
    </template>
    
    <script>
    import Navbar from '@/components/Navbar.vue'
    
    export default ({
        name: "ServiceQueue",
        components: {
    Navbar
  },
        data() {
            return {
             
            }
        },
        computed: {
            
            
        },
        created() {
    
        },
        beforeUnmount(){
          
        },
        mounted(){
         
        },
       
        methods:{
          
        }
    })
    </script>
    
    <style scoped>
    
    </style>