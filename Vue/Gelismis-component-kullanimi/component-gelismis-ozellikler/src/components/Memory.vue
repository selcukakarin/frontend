<template>
    <div>
        <div>
            <!-- <p>Bu çok güzel bir şeydir. {{ content }}</p> -->
            <slot name="heading"></slot>
        </div>
        <div>
            <slot ></slot>
        </div>
        <div class="memory">
            <slot name="author">
                <h3>Author</h3>
                <p>Bir içerik gelmemiş</p>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    // props : ["content"]
}
</script>

<style scoped>
    div {
        border:1px solid #ccc;
        box-shadow:1px 1px 2px #666;
        padding:20px 20px;
        margin-top:20px;
        text-align: center;
    }
</style>
