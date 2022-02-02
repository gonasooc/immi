<template>
  <div class="page">
    <div class="page-container components-page">
      <layout-header />
      <div class="l-center">
        <section class="section">
          <h1 class="cp-ttl">
            1. 버튼
          </h1>
          <div class="section-cont">
            들어갈 위치
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Components',
};
</script>

<style lang="scss" scoped>
.components-page {
    padding-bottom: 500px;

    .cp-ttl {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .section {
        border-bottom: 1px solid #ebebeb;

        padding: 20px 0;

        &:last-child {
            border-bottom: 0;
        }
    }

    .section-cont {
        padding: 10px 0;
    }

    .section-step {
        background-color: color(sub);
    }
}
</style>
