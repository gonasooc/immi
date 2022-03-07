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
          <p style="font-size: 20px; font-weight: 500; color: red; margin-bottom: 30px;">
            합계: {{ '합계 들어갈 영역' }}
          </p>          
          <!-- section-select -->
          <div class="section-select">
            <!-- select-all-wrap -->
            <!-- v-for 적용 지점 -->
            <div
              v-for="(questionObj, q_no) in selectedQuestions"
              :key="q_no"
              class="select-all-wrap"
            >
              <!-- label + input -->
              <div
                class="input-grp type-flex-col"
              >
                <label
                  for="inp1"
                  class="inp-label type-block"
                >
                  <span class="seq_no">{{ q_no }}. </span>
                  <span class="kor-q">{{ questionObj.question_k }}</span>
                  <span class="eng-q">({{ questionObj.question_e }})</span>
                </label>
                <select
                  id="inp1"
                  class="inp inp-select"
                  @change="onChange($event, questionObj, q_no)"
                >
                  <option
                    v-for="option in questionObj.options"
                    :key="option.seq"
                    :value="option.value"
                  >
                    {{ option.desc }}
                  </option>
                </select>
              </div>
              <!-- END label + input -->
            </div>
            <!-- END select-all-wrap -->
            <button
              type="button"
            >
              추가
            </button>
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
            answers: [],
            selectedQuestions: {
                1: {
                    type: 'select',
                    question_k: '혼인 여부',
                    question_e: 'What is your marital status?',
                    options: [
                        {
                            seq: 1,
                            desc: '파트너 없음(미혼, 별거, 이혼, 사별)',
                            value: 0,
                            next_seq: '3',
                        },
                        {
                            seq: 2,
                            desc: '파트너 있음(기혼, 사실혼)',
                            value: 0,
                            next_seq: '2',
                        },
                    ],
                },
            },
            questions: {
                1: {
                    type: 'select',
                    question_k: '혼인 여부',
                    question_e: 'What is your marital status?',
                    options: [
                        {
                            seq: 1,
                            desc: '파트너 없음(미혼, 별거, 이혼, 사별)',
                            value: 0,
                            next_seq: '3',
                        },
                        {
                            seq: 2,
                            desc: '파트너 있음(기혼, 사실혼)',
                            value: 0,
                            next_seq: '2',
                        },
                    ],
                },
                2: {
                    type: 'select',
                    question_k: '파트너가 캐나다 시민권자 혹은 영주권자 인가요?',
                    question_e: 'Is your spouse or common-law partner a citizen or permanent resident of Canada?',
                    options: [
                        {
                            seq: 1,
                            desc: '네',
                            value: 0,
                            next_seq: '3',
                        },
                        {
                            seq: 2,
                            desc: '아니오',
                            value: 0,
                            next_seq: '2-2',
                        },
                    ],
                },
                3: {
                    type: 'select',
                    question_k: '만 나이?',
                    question_e: 'How old are you?',
                    options: [
                        {
                            seq: 1,
                            desc: '17세 이하',
                            value: 0,
                            next_seq: '4',
                        },
                        {
                            seq: 2,
                            desc: '18세',
                            value: 99,
                            next_seq: '4',
                        },
                        {
                            seq: 3,
                            desc: '19세',
                            value: 105,
                            next_seq: '4',
                        },
                    ],
                },
            },
        };
    },
    created() {
        console.log(this.questions);
    },
    methods: {
        onChange(e, question, idx) {
            const event = e;
            const value = e.target.value; // 점수 합산을 위한 value
            console.log(event);
        },
    },
};
// 1. 데이터 모델 만들 때 array or object 차이가 있는지
// - 큰 차이 없지만 성능 이슈를 생각했을 때, 그리고 순서가 중요하지 않은 데이터 모델이면 object key value로 짜는 게 나을 듯
// 2. answers, selectedQuestions에 어떤 형식으로 값을 넣어주고 onChange 메소드의 event를 어떤 형식으로 활용하는지
// - 해당 값에 새로운 key를 할당함으로서 데이터 구축(console.log로 확인해보기 or dummy array 선언해서 확인)
</script>


