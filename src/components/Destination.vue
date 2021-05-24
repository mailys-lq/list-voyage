<template>
    <div>
        
        <h2>{{ pays }}</h2>
        <span>{{ ville }}</span>
    </div>
</template>
<script>
    // import Name from '@/components/Name.vue';
    
    export default {
        props: {
            ville: String, 
            pays: String, 
        }
    };
</script>
<style scoped>
    
</style>