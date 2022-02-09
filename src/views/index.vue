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
                >
                  <span class="kor-q">1. 혼인 여부</span>
                  <span class="eng-q">(What is your marital status?)</span>
                </label>
                <select
                  id="inp1"
                  v-model="q1"
                  class="inp inp-select"
                >
                  <option
                    :value="{score: 0, logic: 'vacant'}"
                    selected
                    disabled
                  >
                    select...
                  </option>
                  <option :value="{score: 0, logic: '3'}">
                    파트너 없음(미혼, 별거, 이혼, 사별)
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    파트너 있음(기혼, 사실혼)
                  </option>
                </select>
              </div>
              <!-- END label + input -->
              <!-- label + input -->
              <div
                v-if="q1.logic === '2'"
                class="input-grp type-flex-col"
              >
                <label
                  for="inp1"
                  class="inp-label type-block"
                >
                  <span class="kor-q">2. 파트너가 캐나다 시민권자 혹은 영주권자 인가요?</span>
                  <span class="eng-q">(Is your spouse or common-law partner a citizen or permanent resident of Canada?)</span>
                </label>
                <select
                  id="inp1"
                  class="inp inp-select"
                >
                  <option
                    value="vacant"
                    selected
                    disabled
                  >
                    select...
                  </option>
                  <option :value="{score: 0, logic: '3'}">
                    네
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    아니오
                  </option>
                </select>
              </div>
              <!-- END label + input -->
              <!-- label + input -->
              <div
                v-if="q1.logic === '3'"
                class="input-grp type-flex-col"
              >
                <label
                  for="inp1"
                  class="inp-label type-block"
                >
                  <span class="kor-q">3. 만 나이</span>
                  <span class="eng-q">(How old are you?)</span>
                </label>
                <select
                  id="inp1"
                  class="inp inp-select"
                >
                  <option
                    value="vacant"
                    selected
                    disabled
                  >
                    select...
                  </option>
                  <option :value="{score: 0, logic: '3'}">
                    17세 이하
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    18세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    19세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    20세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    21세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    22세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    23세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    24세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    25세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    26세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    27세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    28세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    29세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    30세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    31세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    32세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    33세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    34세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    35세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    36세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    37세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    38세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    39세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    40세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    41세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    42세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    43세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    44세
                  </option>
                  <option :value="{score: 0, logic: '2'}">
                    45세 이상
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
            q1: { score: 0, logic: 'vacant' },
            q2: { score: 0, logic: 'vacant' },
            q3: { score: 0, logic: 'vacant' },
        };
    },
};

</script>


