<template>
    <div>
        <common-header bgColor="rgb(63, 81, 181)">
            <span slot="title">Photo</span>
        </common-header>
        <h1>photo</h1>
        <common-footer bgColor="rgb(63, 81, 181)"></common-footer>
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
