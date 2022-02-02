<template>
  <div class="auth-page auth-login">
    <div class="page-container">
      <div class="page-wrapper">
        <div class="content-center">
          <h3 class="auth-title">
            로그인
          </h3>
          <form
            action="post"
            class="auth-form"
          >
            <fieldset class="input-group">
              <legend class="is-none">
                작성하기
              </legend>
              <div class="write-area">
                <div class="input-box">
                  <label
                    for="user_id"
                    class="input-tit"
                  >아이디</label>
                  <div class="focus-event">
                    <input
                      id="user_id"
                      v-model="user_id"
                      type="email"
                      class="input-txt"
                      placeholder="이메일 아이디"
                    >
                    <span class="_focus" />
                  </div>
                </div>
                <div class="input-box">
                  <label
                    for="user_pw"
                    class="input-tit"
                  >비밀번호</label>
                  <div class="focus-event">
                    <input
                      id="user_pw"
                      v-model="user_pw"
                      type="password"
                      class="input-txt"
                      placeholder="비밀번호 입력"
                    >
                    <span class="_focus" />
                  </div>
                </div>
              </div>
              <div class="input-box find_wrap">
                <a
                  class="find_link"
                  @click="none()"
                >
                  아이디 찾기
                </a>
                <a
                  class="find_link"
                  @click="none()"
                >
                  비밀번호 찾기
                </a>
              </div>
              <div class="input-box btn-box">
                <button
                  type="button"
                  class="btn btn-blue"
                >
                  로그인 하기
                </button>
                <button
                  type="button"
                  class="btn btn-kakao"
                >
                  <img
                    src="@/assets/images/icon/icon_kakao.svg"
                    alt="kakao talk"
                  >
                  카카오 로그인
                </button>
                <a
                  href="#"
                  class="btn btn-regi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  회원가입
                </a>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            user_id: null,
            user_pw: null,
        };
    },
    methods: {
        none() {
            alert('준비중입니다.');
        },
    },
};
</script>

<style>
</style>
