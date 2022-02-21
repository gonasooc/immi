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
            <div class="select-all-wrap">
              <!-- label + input -->
              <div
                v-for="(question, idx) in questions"
                :key="idx"
                class="input-grp type-flex-col"
              >
                <label
                  for="inp1"
                  class="inp-label type-block"
                >
                  <span class="seq_no">{{ question.seq }}. </span>
                  <span class="kor-q">{{ question.question_k }}</span>
                  <span class="eng-q">( {{ question.question_e }})</span>
                </label>
                <select
                  id="inp1"
                  class="inp inp-select"
                  @change="onChange($event, question, idx)"
                >
                  <option
                    v-for="(option, seq) in question.options"
                    :key="seq"
                    :value="option.value"
                  >
                    {{ option.desc }}
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
            answers: [],
            selectedQuestions: [],
            questions: [
                {
                    seq: '1',
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
                {
                    seq: '2',
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
                {
                    seq: '3',
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
            ],
        };
    },
    created() {
        console.log(this.questions);
    },
    methods: {
        onChange(e, question, idx) {
            const value = e.target.value;
            const question_value = question;
            const index = idx;
            console.log(value);
            console.log(question_value);
            console.log(index);
        },
    },
};

</script>


