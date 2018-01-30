<template>
    <div>
        <common-header bgColor="rgb(33, 150, 243)">
            <span slot="title">Movie</span>
        </common-header>
        <h1>movie</h1>
        <common-footer bgColor="rgb(33, 150, 243)"></common-footer>
    </div>
</template>

<script>
import CommonHeader from "@/components/common/Header";
import CommonFooter from "@/components/common/Footer";
export default {
  components: {
    CommonHeader,
    CommonFooter
  }
};
</script>

<style scoped>

</style>
