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
                    :value="{value: 0, nextId: 'vacant'}"
                    selected
                    disabled
                  >
                    select...
                  </option>
                  <option :value="{value: 0, nextId: '3'}">
                    파트너 없음(미혼, 별거, 이혼, 사별)
                  </option>
                  <option :value="{value: 0, nextId: '2'}">
                    파트너 있음(기혼, 사실혼)
                  </option>
                </select>
              </div>
              <!-- END label + input -->
              <!-- label + input -->
              <div
                v-if="q1.nextId === '2'"
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
                  v-model="q2"
                  class="inp inp-select"
                >
                  <option
                    :value="{value: 0, nextId: 'vacant'}"
                    selected
                    disabled
                  >
                    select...
                  </option>
                  <option :value="{value: 0, nextId: '3'}">
                    네
                  </option>
                  <option :value="{value: 0, nextId: '2_2'}">
                    아니오
                  </option>
                </select>
              </div>
              <!-- END label + input -->
              <!-- label + input -->
              <div
                v-if="q2.nextId === '2_2'"
                class="input-grp type-flex-col"
              >
                <label
                  for="inp1"
                  class="inp-label type-block"
                >
                  <span class="kor-q">2-2. 파트너도 캐나다에 함께 이민할 예정인가요?</span>
                  <span class="eng-q">(Will your spouse or common-law partner come with you to Canada?)</span>
                </label>
                <select
                  id="inp1"
                  v-model="q2_2"
                  class="inp inp-select"
                >
                  <option
                    :value="{value: 0, nextId: 'vacant'}"
                    selected
                    disabled
                  >
                    select...
                  </option>
                  <option :value="{value: 0, nextId: '3_b'}">
                    네
                  </option>
                  <option :value="{value: 0, nextId: '3'}">
                    아니오
                  </option>
                </select>
              </div>
              <!-- END label + input -->
              <!-- label + input -->
              <div
                v-if="q1.nextId === '3' || q2.nextId === '3' || q2_2.nextId === '3'"
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
                  v-model="q3"
                  class="inp inp-select"
                >
                  <option
                    :value="{value: 0, nextId: 'vacant'}"
                    selected
                    disabled
                  >
                    select...
                  </option>
                  <option :value="{value: 0, nextId: '4'}">
                    17세 이하
                  </option>
                  <option :value="{value: 99, nextId: '4'}">
                    18세
                  </option>
                  <option :value="{value: 105, nextId: '4'}">
                    19세
                  </option>
                  <option :value="{value: 110, nextId: '4'}">
                    20세
                  </option>
                  <option :value="{value: 110, nextId: '4'}">
                    21세
                  </option>
                  <option :value="{value: 110, nextId: '4'}">
                    22세
                  </option>
                  <option :value="{value: 110, nextId: '4'}">
                    23세
                  </option>
                  <option :value="{value: 110, nextId: '4'}">
                    24세
                  </option>
                  <option :value="{value: 110, nextId: '4'}">
                    25세
                  </option>
                  <option :value="{value: 110, nextId: '4'}">
                    26세
                  </option>
                  <option :value="{value: 110, nextId: '4'}">
                    27세
                  </option>
                  <option :value="{value: 110, nextId: '4'}">
                    28세
                  </option>
                  <option :value="{value: 110, nextId: '4'}">
                    29세
                  </option>
                  <option :value="{value: 105, nextId: '4'}">
                    30세
                  </option>
                  <option :value="{value: 99, nextId: '4'}">
                    31세
                  </option>
                  <option :value="{value: 94, nextId: '4'}">
                    32세
                  </option>
                  <option :value="{value: 88, nextId: '4'}">
                    33세
                  </option>
                  <option :value="{value: 83, nextId: '4'}">
                    34세
                  </option>
                  <option :value="{value: 77, nextId: '4'}">
                    35세
                  </option>
                  <option :value="{value: 72, nextId: '4'}">
                    36세
                  </option>
                  <option :value="{value: 66, nextId: '4'}">
                    37세
                  </option>
                  <option :value="{value: 61, nextId: '4'}">
                    38세
                  </option>
                  <option :value="{value: 55, nextId: '4'}">
                    39세
                  </option>
                  <option :value="{value: 50, nextId: '4'}">
                    40세
                  </option>
                  <option :value="{value: 39, nextId: '4'}">
                    41세
                  </option>
                  <option :value="{value: 28, nextId: '4'}">
                    42세
                  </option>
                  <option :value="{value: 17, nextId: '4'}">
                    43세
                  </option>
                  <option :value="{value: 6, nextId: '4'}">
                    44세
                  </option>
                  <option :value="{value: 0, nextId: '4'}">
                    45세 이상
                  </option>
                </select>
              </div>
              <!-- END label + input -->
              <!-- label + input -->
              <div
                v-if="q2_2.nextId === '3_b'"
                class="input-grp type-flex-col"
              >
                <label
                  for="inp1"
                  class="inp-label type-block"
                >
                  <span class="kor-q">3-b. 만 나이</span>
                  <span class="eng-q">(How old are you?)</span>
                </label>
                <select
                  id="inp1"
                  v-model="q3_b"
                  class="inp inp-select"
                >
                  <option
                    :value="{value: 0, nextId: 'vacant'}"
                    selected
                    disabled
                  >
                    select...
                  </option>
                  <option :value="{value: 0, nextId: '4_b'}">
                    17세 이하
                  </option>
                  <option :value="{value: 90, nextId: '4_b'}">
                    18세
                  </option>
                  <option :value="{value: 95, nextId: '4_b'}">
                    19세
                  </option>
                  <option :value="{value: 100, nextId: '4_b'}">
                    20세
                  </option>
                  <option :value="{value: 100, nextId: '4_b'}">
                    21세
                  </option>
                  <option :value="{value: 100, nextId: '4_b'}">
                    22세
                  </option>
                  <option :value="{value: 100, nextId: '4_b'}">
                    23세
                  </option>
                  <option :value="{value: 100, nextId: '4_b'}">
                    24세
                  </option>
                  <option :value="{value: 100, nextId: '4_b'}">
                    25세
                  </option>
                  <option :value="{value: 100, nextId: '4_b'}">
                    26세
                  </option>
                  <option :value="{value: 100, nextId: '4_b'}">
                    27세
                  </option>
                  <option :value="{value: 100, nextId: '4_b'}">
                    28세
                  </option>
                  <option :value="{value: 100, nextId: '4_b'}">
                    29세
                  </option>
                  <option :value="{value: 95, nextId: '4_b'}">
                    30세
                  </option>
                  <option :value="{value: 90, nextId: '4_b'}">
                    31세
                  </option>
                  <option :value="{value: 85, nextId: '4_b'}">
                    32세
                  </option>
                  <option :value="{value: 80, nextId: '4_b'}">
                    33세
                  </option>
                  <option :value="{value: 75, nextId: '4_b'}">
                    34세
                  </option>
                  <option :value="{value: 70, nextId: '4_b'}">
                    35세
                  </option>
                  <option :value="{value: 65, nextId: '4_b'}">
                    36세
                  </option>
                  <option :value="{value: 60, nextId: '4_b'}">
                    37세
                  </option>
                  <option :value="{value: 55, nextId: '4_b'}">
                    38세
                  </option>
                  <option :value="{value: 50, nextId: '4_b'}">
                    39세
                  </option>
                  <option :value="{value: 45, nextId: '4_b'}">
                    40세
                  </option>
                  <option :value="{value: 35, nextId: '4_b'}">
                    41세
                  </option>
                  <option :value="{value: 25, nextId: '4_b'}">
                    42세
                  </option>
                  <option :value="{value: 15, nextId: '4_b'}">
                    43세
                  </option>
                  <option :value="{value: 5, nextId: '4_b'}">
                    44세
                  </option>
                  <option :value="{value: 0, nextId: '4_b'}">
                    45세 이상
                  </option>
                </select>
              </div>
              <!-- END label + input -->
              <!-- label + input -->
              <div
                v-if="q3.nextId === '4'"
                class="input-grp type-flex-col"
              >
                <label
                  for="inp1"
                  class="inp-label type-block"
                >
                  <span class="kor-q">4. 학력(어는 나라에서든) *해외 학력은 ECA(Educational Credential Assessment)필요</span>
                  <span class="eng-q">(What is your level of education?)</span>
                </label>
                <select
                  id="inp1"
                  v-model="q4"
                  class="inp inp-select"
                >
                  <option
                    :value="{value: 0, nextId: 'vacant'}"
                    selected
                    disabled
                  >
                    select...
                  </option>
                  <option :value="{value: 0, nextId: '4_2'}">
                    고졸 미만
                  </option>
                  <option :value="{value: 30, nextId: '4_2'}">
                    고졸
                  </option>
                  <option :value="{value: 90, nextId: '4_2'}">
                    1년 과정(컬리지/대학/직업학교 등의 교육기관에서) 졸업
                  </option>
                  <option :value="{value: 98, nextId: '4_2'}">
                    2년 과정(컬리지/대학/직업학교 등의 교육기관에서) 졸업
                  </option>
                  <option :value="{value: 120, nextId: '4_2'}">
                    학사 졸업(컬리지/대학/직업학교 등의 교육기관에서 3년 이상 과정)
                  </option>
                  <option :value="{value: 128, nextId: '4_2'}">
                    두개 이상의 학위(적어도 하나는 3년 이상 과정이어야 함)
                  </option>
                  <option :value="{value: 135, nextId: '4_2'}">
                    석사 졸업
                  </option>
                  <option :value="{value: 150, nextId: '4_2'}">
                    박사 졸업
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
            q1: { value: 0, nextId: 'vacant' },
            q2: { value: 0, nextId: 'vacant' },
            q2_2: { value: 0, nextId: 'vacant' },
            q3: { value: 0, nextId: 'vacant' },
            q3_b: { value: 0, nextId: 'vacant' },
            q4: { value: 0, nextId: 'vacant' },
        };
    },
};

</script>


