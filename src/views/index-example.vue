<template>
  <!-- page) main -->
  <div class="wrap">
    <layout-header />
    <div class="page main-page">
      <div class="page-container">
        <div class="panel">
          <div>
            <li v-for="(questionObj, questionId) in selectedQuestions">
              <div v-if="questionObj.type === 'options'">
                <span>{{ questionObj.question }}</span>
                <br>
                <select
                  id="temp1"
                  class="inp inp-select"
                  @change="onChange($event, questionObj, questionId)"
                >
                  <option
                    v-for="option in questionObj.options"
                    :value="option.seq"
                  >
                    {{ option.seq }}. {{ option.description }}
                  </option>
                  select ...
                </select>
              </div>
            </li>
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
                    question: '1. 혼인 여부',
                    type: 'options',
                    options: [
                        {
                            seq: 1,
                            description: '기혼',
                            value: 3,
                            nextId: '2',
                        },
                        {
                            seq: 2,
                            description: '미혼',
                            value: 1,
                            nextId: '2',
                        },
                    ],
                },
            },
            questions: {
                1: {
                    question: '1. 혼인 여부',
                    type: 'options',
                    options: [
                        {
                            seq: 1,
                            description: '기혼',
                            value: 3,
                            nextId: '2',
                        },
                        {
                            seq: 2,
                            description: '미혼',
                            value: 1,
                            nextId: '2',
                        },
                    ],
                },
                2: {
                    question: '1. 만나이가 몇이야?',
                    type: 'options',
                    options: [
                        {
                            seq: 1,
                            description: '만 35세',
                            value: 3,
                            nextId: '3',
                        },
                        {
                            seq: 2,
                            description: '만 36세',
                            value: 1,
                            nextId: '3',
                        },
                    ],
                },
                3: {
                    question: '1. 만나이가 몇이야?',
                    type: 'options',
                    options: [
                        {
                            seq: 1,
                            description: '만 35세',
                            value: 3,
                            nextId: '4',
                        },
                        {
                            seq: 2,
                            description: '만 36세',
                            value: 1,
                            nextId: '4',
                        },
                    ],
                },
            },
        };
    },
    methods: {
        onChange(e, questionObj, questionId) {
            const seq = e.target.value;
            const value = questionObj;
            const selectedOption = questionObj.options[seq - 1];

            console.log('value: ', selectedOption.value);
            console.log('questionObj: ', selectedOption.questionObj);

            // TODO: 1. 중복으로 들어간 ID가 있는지체크
            // if (isDuplicated) {
            //   return
            // }

            this.answers.push({
                id: questionId,
                seq: seq,
                value: value,
            });

            this.selectedQuestions[selectedOption.nextId] = this.questions[selectedOption.nextId];
            this.selectedQuestions = JSON.parse(JSON.stringify(this.selectedQuestions));

            // console.log('answer: ', this.answers)
        },
        sumValue() {
            // TODO: this.answers의 내부 오브젝트.value를 sum해서 리턴
            return this.q1.value + this.q2.value + this.q2_2.value + this.q3.value + this.q3_b.value + this.q4.value;
        },
    },
};

</script>


