<template>
  <div class="wrap">
    <div
      id="page"
      class="error"
    >
      <div class="error-wrap">
        <img
          src="@/assets/images/img/img-er-404.svg"
          alt="!"
          class="error-img"
        >
        <div class="desc-wrap">
          <p class="text-desc">
            찾을 수 없는 페이지입니다.<br>
            요청하신 페이지가 사라졌거나, 잘못된 경로입니다.
          </p>
          <!-- [D] 누르면 홈으로 가기 -->
          <button
            type="button"
            class="btn btn-primary btn-lg"
            @click="$router.push('/')"
          >
            홈으로 이동
          </button>
        </div>
      </div>
    </div>
    <!-- END page -->
  </div>
</template>

<script>
export default {
    name: 'Page404',
};
</script>
