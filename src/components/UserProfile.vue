<template>
  <!-- 사용자 정보 -->
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>

      <span class="time">
        <slot name="time">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
      </span>
      <span class="time"><slot name="karma"></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  // computed:{
  //   userInfo(){
  //     return this.$store.state.user;
  //   }
  // },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
