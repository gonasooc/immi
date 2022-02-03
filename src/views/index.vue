<template>
  <!-- page) main -->
  <div class="wrap">
    <layout-header />

    <div class="page main-page">
      <div class="page-container">
        <div class="panel">
          <h2 class="main-ttl">
            Comprehensive Ranking System (CRS) tool: skilled immigrants (Express Entry)
          </h2>
          <!-- section-main-info -->
          <div class="section-main-info">
            <p class="section-dec">
              This tool will help you calculate your Comprehensive Ranking System (CRS) score based on the answers you provide below. The CRS is a points-based system that we use to assess and score your profile and rank it in the Express Entry pool. It’s used to assess your:
            </p>
            <ul class="section-list-grp">
              <li class="section-info-list">
                <span class="section-info-txt">skills</span>
              </li>
              <li class="section-info-list">
                <span class="section-info-txt">education</span>
              </li>
              <li class="section-info-list">
                <span class="section-info-txt">language ability</span>
              </li>
              <li class="section-info-list">
                <span class="section-info-txt">work experience</span>
              </li>
              <li class="section-info-list">
                <span class="section-info-txt">other factors</span>
              </li>
            </ul>
          </div>
          <!-- END section-main-info -->
          
          <!-- section-select -->
          <div class="section-select">
            <h3 class="section-ttl">
              Use this tool if:
            </h3>
            <ul class="section-list-grp">
              <li class="section-info-list">
                <span class="section-info-txt">you’re eligible for at least 1 Express Entry program</span>
              </li>
              <li class="section-info-list">
                <span class="section-info-txt">you have not filled out an Express Entry profile but you’d like to see what your Comprehensive Ranking System (CRS) score might be if you do</span>
              </li>
              <li class="section-info-list">
                <span class="section-info-txt">you were invited to apply for permanent residence, and want to see if a change to your profile may affect your CRS score</span>
              </li>
            </ul>
            <!-- select-all-wrap -->
            <div class="select-all-wrap">
              <!-- label + input -->
              <div class="input-grp type-flex-col">
                <label
                  for="inp1"
                  class="inp-label type-block"
                >0번 질문</label>
                <select
                  id="inp1"
                  v-model="selectVal"
                  class="inp inp-select"
                >
                  <option value="1">
                    1번 질문 나옴
                  </option>
                  <option value="2">
                    2번 질문 나옴
                  </option>
                </select>
              </div>
              <!-- END label + input -->
              <!-- label + input -->
              <div 
                v-if="selectVal == 1"
                class="input-grp type-flex-col"
              >
                <label
                  for="inp2"
                  class="inp-label type-block"
                >1번 질문</label>
                <select
                  id="inp2"
                  v-model="selectVal"
                  class="inp inp-select"
                >
                  <option value="1">
                    1번 질문 나옴
                  </option>
                  <option value="2">
                    2번 질문 나옴
                  </option>
                </select>
              </div>
              <!-- END label + input -->
              <!-- label + input -->
              <div 
                v-if="selectVal == 2"
                class="input-grp type-flex-col"
              >
                <label
                  for="inp3"
                  class="inp-label type-block"
                >2번 질문</label>
                <select
                  id="inp3"
                  v-model="selectVal"
                  class="inp inp-select"
                >
                  <option value="1">
                    1번 질문 나옴
                  </option>
                  <option value="2">
                    2번 질문 나옴
                  </option>
                </select>
              </div>
            <!-- END label + input -->
            </div>
            <!-- END select-all-wrap -->
          </div>
          <!-- END section-select -->
        </div>
      </div>
    </div>

    <layout-footer />
  </div>
<!-- END page) main -->
</template>

<script>

export default {
    name: 'Index',
    data() {
        return {
            selectVal: null,
        };
    },
};

</script>


