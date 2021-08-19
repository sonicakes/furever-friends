<template>
    <div class="row" style="background-color: #fffbf8; height: 30vh">
        <div class="col-5" style="padding-top: 10vh">
            <h1 style="text-align: right; line-height: 10vh">{{ count }}</h1>
        </div>
        <div class="col-7" style="padding-top: 10vh">
            <p style="text-align: left;font-size: 20px; font-family: 'Montserrat', sans-serif; line-height: 10vh;">Furever Friends matched<img style="height: 50px;top: -12px;position: relative;" src="../assets/pawprints.png"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'counter',
    data: function() {
        return {
            count: 1203,
            timer: '',
        }
    },
    created() {
         this.timer = setInterval(this.addCount, 2000)
    },
    methods: {
        addCount: function() {
            this.count += 1
            this.$emit('increment')
        }
    }
}
</script>

<style scoped>
</style>