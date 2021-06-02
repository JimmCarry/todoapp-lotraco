<template>
    <header class="todo-header">
        <h1>Můj den</h1>
        <span>{{ todayCze() }}</span>
        
    </header>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            daysOfWeek: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
            months: ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'],
        })

        const todayCze = () => {
            let todayTime = new Date();
            let todayDay = todayTime.getDate();
            let dayOfWeek = state.daysOfWeek[todayTime.getDay()];
            let todayMonth = state.months[todayTime.getMonth()];
            let allDate = '';
            allDate += dayOfWeek + ' ';
            allDate += todayDay + '. ';
            allDate += todayMonth;
            return allDate;
        }
    
        return {
            ...toRefs(state),
            todayCze
        }
    }
}
</script>

<style lang="scss" scoped>
.todo-header {
    color: #fff;
    margin-bottom: 1rem;
    h1 {
      margin: 0;
      margin-bottom: 0.2rem;
    }
}
</style>