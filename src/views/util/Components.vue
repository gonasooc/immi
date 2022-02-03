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
            <div class="btn-grp">
              <button
                type="button"
                class="btn btn-primary btn-rounded btn-md btn-full"
              >
                임시버튼
              </button>
            </div>
          </div>
        </section>
        <section class="section">
          <h1 class="cp-ttl">
            2. 인풋
          </h1>
          <div class="section-cont">
            <!-- label + input -->
            <div class="input-grp type-flex-col">
              <label
                for="inp1"
                class="inp-label type-block"
              >라벨</label>
              <select
                id="inp1"
                class="inp inp-select"
              >
                <option value="1">
                  1
                </option>
                <option value="2">
                  2
                </option>
                <option value="3">
                  3
                </option>
              </select>
            </div>
            <!-- END label + input -->
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
