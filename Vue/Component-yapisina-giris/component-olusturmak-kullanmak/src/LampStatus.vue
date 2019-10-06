<template>
<div>
    <p> Lamba Durumu : {{ status }}</p>
    <button @click="openLamp">Lambayı ac</button>
</div>
    
</template>

<script>
export default {
    data : function(){
        return{ 
            status : "Kapalı"
        }
    },
    methods : {
        openLamp(){
            this.status="Açık..."
        }
    }
}
</script>

