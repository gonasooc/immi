<template>
  <div class="panel">
    <h1 class="comp-ttl">
      Components
    </h1>
    <section class="comp-sect">
      <div class="comp-sect-ttl">
        <h2>0. 메세지</h2>
      </div>

      <div style="margin-bottom: 15px;">
        <div style="margin-bottom: 5px;">
          1. ch-sch 일정변경 관련 메세지
        </div>
        <gray-card ttl="일정변경을 요청하였습니다." />
      </div>

      <div style="margin-bottom: 15px;">
        <div style="margin-bottom: 5px;">
          2. sys-sch 시스템 메세지
        </div>
        <gray-card ttl="일정변경을 요청하였습니다." />
      </div>
      
      <div style="margin-bottom: 15px;">
        <div style="margin-bottom: 5px;">
          3. pay-msg 결제관련 메세지
        </div>
        <gray-card ttl="일정변경을 요청하였습니다." />
      </div>
      
      <div style="margin-bottom: 15px;">
        <div style="margin-bottom: 5px;">
          4. contact-msg 신규문의 메세지
        </div>
        <cm-contact-msg :msg="{cm_from: user.user_no}" />
      </div>
    </section>

    <section class="comp-sect">
      <div class="comp-sect-ttl">
        <h2>1. card</h2>
        <p>메인, 예약내역, 찜목록 등 썸네일 + 카드</p>
      </div>

      <div>
        <!-- <p class="comp-point-ttl-lg">
          단순목록&nbsp;
          <span class="badge">index.vue</span>
          <span class="badge">SearchIndex.vue</span>
          <span class="badge">MypageFavList.vue</span>
        </p> -->
        <div class="grid-wrap grid-col4">
          <div class="grid">
            <h3 class="comp-point-ttl">
              1. CARD STYLE 01 <br> (index.vue, SearchIndex.vue, MypageFavList)
            </h3>

            <!-- INFO CARD STYLE 01 -->
            <div class="card">
              <!-- 썸네일 이미지 -->
              <div class="thumb-wrap">
                <card-category
                  :list="['패션', '테크레저', '테크레저', '테크레저']"
                  class="mb-hide"
                />
                <!-- [D] 대행사일 때 -->
                <!-- <card-category :list="['커머스 대행사']" class="mb-hide" /> -->
                <img
                  src="@/assets/images/img/free_sample.webp"
                  alt="프로필사진"
                  class="thumb"
                >
                <!-- [D] 대행사일 때 안보임 -->
                <div class="mb-tooltip mb-show">
                  <tooltip type="seller-detail" />
                </div>
              </div>

              <!-- [D] 대행사일 때 -->
              <!-- <card-category :list="['커머스 대행사']" class="mb-show-flex" /> -->
              <card-category
                :list="['패션', '테크레저', '테크레저', '테크레저']"
                class="mb-show-flex"
              />

              <!-- 텍스트 -->
              <div class="txt-wrap">
                <div class="txt-top">
                  <div class="person-info">
                    <span class="brief-type">
                      쇼호스트
                      <!-- TODO 대행사일 때 -->
                      <!-- 대행사 -->
                    </span>
                    <span class="brief-name">제니퍼</span>
                    <tooltip
                      type="seller-detail"
                      class="mb-hide"
                    />
                  </div>
                  <p class="info-list">
                    <span class="ff-eng">1,000,000 ~ 3,000,000</span>원
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid">
            <h3 class="comp-point-ttl">
              2. CARD STYLE 02 <br> (MypageRsvList.vue)
            </h3>

            <!-- INFO CARD STYLE 02 -->
            <div class="card">
              <!-- 썸네일 이미지 -->
              <div class="thumb-wrap">
                <card-category
                  :list="['패션', '테크레저', '뷰티', '키즈']"
                  class="mb-hide"
                />
                <!-- [D] 대행사일 때 -->
                <!-- <card-category :list="['커머스 대행사']" class="mb-hide" /> -->
                <img
                  src="@/assets/images/img/sample.jpg"
                  alt="프로필사진"
                  class="thumb"
                >
                <!-- mobile-tooltip -->
                <!-- [D] 대행사일 때 안보임 -->
                <div class="mb-tooltip mb-show">
                  <tooltip type="seller-detail" />
                </div>
                <!-- mobile-상태뱃지 -->
                <card-status
                  :status="2"
                  class="mb-show"
                />
              </div>

              <!-- <card-category :list="['커머스 대행사']" class="mb-show-flex" /> -->
              <!-- mobile-카테고리 -->
              <!-- [D] 대행사일 때 -->
              <card-category
                :list="['패션', '테크레저', '테크레저', '테크레저']"
                class="mb-show-flex"
              />
              <!-- pc -->
              <card-status
                :status="1"
                class="mb-hide"
              />

              <!-- 텍스트 -->
              <div class="txt-wrap">
                <!-- 텍스트 상단 -->
                <div class="txt-top">
                  <!-- 텍스트 상단) 이름 -->
                  <div class="person-info">
                    <span class="brief-type">
                      쇼호스트
                      <!-- TODO 대행사일 때 -->
                      <!-- 대행사 -->
                    </span>
                    <span class="brief-name">제니퍼</span>
                    <tooltip
                      type="seller-detail"
                      class="mb-hide"
                    />
                  </div>
                  <!-- 텍스트 상단) 정보 -->
                  <p class="info-list">
                    <span class="label">
                      {{ '희망금액' }}
                      <!-- {{ 대기중일시 ? '희망금액' : '예약확정' }} -->
                    </span>
                    <span class="ff-eng">100,900</span>원
                    <button
                      type="button"
                      class="btn txt-btn rsv-info-btn mb-hide"
                      @click="openModal('rsv-info')"
                    >
                      예약정보
                    </button>
                  </p>
                </div>
                <!-- 텍스트 하단 -->
                <div class="txt-bottom">
                  <div class="date-time-wrap ff-eng">
                    <span class="date">{{ '21.06.09(월)' }}</span>
                    <span class="time">{{ '14:00~16:00' }}</span>
                  </div>

                  <!-- pc 해당예약에 대한 컨트롤 버튼들 -->
                  <div class="btn-bottom-wrap mb-hide">
                    <div class="btn-state-change-wrap">
                      <button
                        type="button"
                        class="btn-bottom"
                        @click="openModal('schd-change')"
                      >
                        일정변경
                      </button>

                      <button
                        type="button"
                        class="btn-bottom"
                        @click="openModal('refund')"
                      >
                        예약취소
                      </button>
                      <button
                        type="button"
                        class="btn-bottom"
                        @click="openModal('noshow')"
                      >
                        노쇼
                      </button>
                    </div>
                    <div class="btn-review-wrap">
                      <button
                        type="button"
                        class="btn-bottom"
                        @click="openModal('write-review')"
                      >
                        리뷰작성
                      </button>

                      <!-- TODO: is-complete 추가 시 리뷰 완료로 변경 -->
                      <button
                        type="button"
                        class="btn-bottom is-complete"
                      >
                        리뷰작성 완료
                      </button>
                    </div>
                  </div>

                  <!-- mobile 해당예약에 대한 컨트롤 버튼들 -->
                  <div class="btn-bottom-wrap mb-show-flex">
                    <button
                      type="button"
                      class="btn-bottom"
                    >
                      설정
                    </button>

                    <button
                      type="button"
                      class="btn-bottom"
                      @click="openModal('write-review')"
                    >
                      {{ '리뷰작성' }}
                      <!-- {{ 리뷰작성시 ? '리뷰작성' : '리뷰작성 완료'}} -->
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <!-- <p class="comp-point-ttl-lg">
          예약내역&nbsp;
          <span class="badge">users/MypageRsvList.vue</span>
          <span class="badge">sellers/MypageRsvList.vue</span>
        </p> -->

        <div class="grid-wrap grid-col3">
          <div class="grid">
            <h3 class="comp-point-ttl">
              3. 판매자 예약내역 <br> (sellers/MypageRsvList.vue)
            </h3>
            <div class="card">
              <div class="dark-card">
                <!-- 상태 뱃지 -->
                <div class="status-badge-wrap">
                  <span class="status-badge color-coral">대기중</span>
                  <span class="status-badge color-green">예약확정</span>
                  <span class="status-badge color-blue">방송완료</span>
                  <span class="status-badge color-gray">취소</span>
                  <span class="status-badge color-ylw">노쇼</span>
                  <span class="rsv-date ff-eng">YYYY.MM.DD HH:MM</span>
                </div>
                <!-- 텍스트 -->
                <div class="txt-wrap">
                  <div class="txt-top">
                    <div class="person-info">
                      <div class="brief-wrap">
                        <span class="brief-type">광고주</span>
                        <span class="brief-name">빌런즈컴퍼니</span>
                      </div>
                      <span class="star">5.0
                      </span>
                    </div>
                    <p class="info-list">
                      <span class="label">희망금액</span>
                      <span class="ff-eng">100,900 ~ 3,000,000</span>원
                    </p>
                    <div class="info-list">
                      <span class="label">희망일자</span>
                      <span class="date">21.06.09(월)</span>
                      <span class="time">14:00~16:00</span>
                    </div>
                  </div>
                  <div class="txt-bottom">
                    <!-- TODO 취소내역일 때 -->
                    <div class="status-msg-wrap">
                      <span class="status-msg">메세지로 결제를 진행해주세요.</span>
                      <!-- <span class="status-msg">광고주가 [노쇼] 처리를 하였습니다.</span> -->
                      <!-- <span class="status-msg">확정된 예약이 [취소]되었습니다.</span> -->
                    </div>

                    <!-- TODO 예약확정, 완료내역일 때 -->
                    <div class="btn-bottom-wrap">
                      <!-- TODO: 예약확정 -->
                      <div class="btn-state-change-wrap">
                        <button
                          type="button"
                          class="btn-bottom"
                        >
                          예약취소
                        </button>
                        <button
                          type="button"
                          class="btn-bottom"
                        >
                          방송완료
                        </button>
                      </div>

                      <!-- TODO: 완료내역 -->
                      <div class="btn-review-wrap">
                        <button
                          type="button"
                          class="btn-bottom"
                        >
                          리뷰작성
                        </button>
                        <!-- TODO: is-complete 추가 시 리뷰 완료로 변경 -->
                        <button
                          type="button"
                          class="btn-bottom is-complete"
                        >
                          리뷰작성 완료
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="comp-sect">
      <div class="comp-sect-ttl">
        <h2>2. buttons</h2>
        <p>버튼들</p>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <button
          type="button"
          class="btn btn-lg btn-primary"
        >
          버튼
        </button>

        <div style="display: flex; align-items: center; justify-content: flex-start; gap: 10px;">
          <button
            type="button"
            class="btn btn-md btn-primary"
          >
            버튼
          </button>

          <button
            type="button"
            class="btn btn-md btn-bd-gray"
          >
            버튼
          </button>

          <button
            type="button"
            class="hvtoggle-btn btn-msg"
          >
            <i class="icon icon-toggle-msg" />
            <span class="txt">메세지</span>
          </button>

          <button
            type="button"
            class="btn btn-copy-rounded"
          >
            코드복사
          </button>

          <button
            type="button"
            class="btn btn-badge btn-bd-gray"
          >
            보더버튼
          </button>

          <button
            type="button"
            class="btn btn-badge btn-primary"
          >
            보더버튼
          </button>

          <span class="status-badge">상태 뱃지</span>
          <span class="status-badge color-coral">상태 뱃지</span>
          <span class="status-badge color-green">상태 뱃지</span>
          <span class="status-badge color-blue">상태 뱃지</span>
          <span class="status-badge color-ylw">상태 뱃지</span>
        </div>
      </div>
    </section>

    <section class="comp-sect">
      <div class="comp-sect-ttl">
        <h2>3. icon</h2>
        <p>아이콘들 및 기타요소들</p>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <i class="icon icon-sns-circle icon-insta" />
        <i class="icon icon-sns-circle icon-facebook" />
        <i class="icon icon-sns-circle icon-youtube" />
        <i class="icon icon-close-light" />

        <!-- 별점 -->
        <span class="star">5.0
          <small>(53개의 평가)</small>
        </span>
      </div>
    </section>

    <section class="comp-sect">
      <div class="comp-sect-ttl">
        <h2>4. avatar</h2>
        <p>아바타 + 이름, 기타 정보, 멘트 등..</p>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <div class="avatar-with-ment">
          <avatar />
          <span class="info">
            환영합니다~
          </span>
        </div>

        <div class="avatar-with-name01">
          <avatar />
          <div class="info">
            <span class="top-info">구름컴퍼니</span>
            <span class="bottom-info">2021.07.17 10:58</span>
          </div>
        </div>

        <!-- 아바타 02 -->
        <div class="avatar-with-name02">
          <avatar />
          <div class="info">
            <span class="top-info">광고주</span>
            <span class="bottom-info">닉네임이여덟글자</span>
          </div>
        </div>
      </div>
    </section>

    <section class="comp-sect">
      <div class="comp-sect-ttl">
        <h2>5. 툴팁</h2>
        <p>툴팁입니다.</p>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <div class="txt-with-tooltip">
          <small class="txt-sm">텐션</small>
          <tooltip type="tension" />
        </div>

        <div class="txt-with-tooltip ment">
          <small class="txt-sm">옐로카드, 레드카드</small>
          <tooltip type="warning-card" />
        </div>

        <div class="txt-with-tooltip ment">
          <small class="txt-sm">쇼호스트 디테일</small>
          <tooltip type="seller-detail" />
        </div>

        <div class="txt-with-tooltip ment">
          <small class="txt-sm">영상주소 추가방법</small>
          <tooltip type="src" />
        </div>

        <div class="txt-with-tooltip ment">
          <small class="txt-sm">리뷰 세부항목</small>
          <tooltip type="review" />
        </div>

        <div class="txt-with-tooltip ment">
          <small class="txt-sm">기타!!</small>
          <tooltip>
            <template #cont>
              <div class="tooltip-cont">
                요거의 모바일 버전은 추후 연구를 해봐야겠습니다.
              </div>
            </template>
          </tooltip>
        </div>
      </div>
    </section>

    <section class="comp-sect">
      <div class="comp-sect-ttl">
        <h2>6. 팝업</h2>
        <p>팝업들 스타일</p>
      </div>

      <!-- 회원가입 -->
      <div style="margin-bottom: 30px">
        <div class="ib-div">
          <h3 class="comp-point-ttl">
            1. 회원가입 페이지 <br> (Register.vue)
          </h3>
          <div
            class="ttl-lg-modal modal comp-modal"
          >
            <div class="modal-box">
              <div class="modal-box-ttl">
                <span class="modal-ttl">개인정보 처리방침</span>

                <modal-close-btn />
              </div>

              <div class="modal-box-container">
                <div class="modal-box-cont">
                  개인정보 처리방침
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 일반) 예약내역 -->
      <div style="margin-bottom: 30px">
        <div class="ib-div">
          <h3 class="comp-point-ttl">
            2. 일반) 예약내역 페이지 - 예약정보 <br> (users/MypageRsvList.vue)
          </h3>

          <div
            class="ttl-lg-modal modal mb-modal comp-modal"
          >
            <div class="dark-modal-box modal-box">
              <div class="modal-box-hd">
                <span class="modal-ttl">예약정보</span>

                <modal-close-btn />
              </div>

              <div class="modal-box-container">
                <div class="modal-box-cont md-rsv-info">
                  <div class="inbox-box">
                    <div class="inbox-info-grp">
                      <div class="label-txt-list-grp">
                        <div class="label-txt-list">
                          <span class="in-label">광고주</span>
                          <span class="in-txt">플랜에이에이전시</span>
                        </div>
                        <div class="label-txt-list">
                          <span class="in-label">희망금액</span>
                          <span class="in-txt"><b class="value">300,000</b>원</span>
                        </div>
                        <div class="label-txt-list">
                          <span class="in-label">희망날짜</span>
                          <span class="in-txt">YYYY.MM.DD (a) 00:00</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        class="hvtoggle-btn btn-msg"
                      >
                        <i class="icon icon-toggle-msg" />
                        <span class="txt">메세지</span>
                      </button>
                    </div>

                    <div class="inbox-cont">
                      <textarea
                        class="inp bg-dark-1212 modal-rsv-desc"
                        readonly
                      >간장게장 판매하고 싶습니다. 방송 광고 가능?</textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ib-div">
          <h3 class="comp-point-ttl">
            2. 예약내역 페이지 - 일정변경 <br> (users/MypageRsvList.vue)
          </h3>

          <div class="ttl-lg-modal modal mb-modal comp-modal">
            <div class="dark-modal-box modal-box">
              <div class="modal-box-hd">
                <span class="modal-ttl">일정변경</span>

                <!-- [D] 해당 팝업 닫을 땐 팝업 내용 초기화할 필요 있어서, slot 사용 -->
                <modal-close-btn>
                  <template #btn>
                    <button
                      type="button"
                      class="btn close-btn"
                      @click="closeModal"
                    >
                      <i class="is-voice-only">일정변경 팝업 닫기</i>
                      <i
                        class="icon icon-close"
                      />
                    </button>
                  </template>
                </modal-close-btn>
              </div>

              <div class="modal-box-container">
                <div class="modal-box-cont md-schd-change">
                  <!-- 아바타 02 -->
                  <div class="layout-pr-box">
                    <div class="avatar-with-name02 avartar-blk-box">
                      <avatar />
                      <div class="info">
                        <span class="top-info">광고주</span>
                        <span class="bottom-info">닉네임이여덟글자</span>
                      </div>
                    </div>
                  </div>

                  <!-- 변경할 일정 -->
                  <div class="modal-scr-x-grp">
                    <div class="scr-x-cont">
                      <p class="ttl">
                        변경할 일정<small class="ff-eng">(4)</small>
                      </p>
                      <p class="dec">
                        변경할 일정을 선택해주세요.
                      </p>
                    </div>
                    <div class="scr-x-cont mt-20">
                      <div
                        class="modal-scr-x-card-wrap modal-scroll-x-area"
                      >
                        <!-- TODO: is-scr-x-card에 is-active 추가되면 선택 활성화 -->
                        <div
                          class="label-txt-list-grp is-scr-x-card"
                        >
                          <div class="label-txt-list">
                            <span class="in-label">방송예정일</span>
                            <span class="in-txt ff-eng">YYYY.MM.DD (a) 14:00~15:00</span>
                          </div>
                          <div class="label-txt-list">
                            <span class="in-label">결제금액</span>
                            <span class="in-txt"><b class="value ff-eng">300,000</b>원</span>
                          </div>
                        </div>
                        <div
                          class="label-txt-list-grp is-scr-x-card"
                        >
                          <div class="label-txt-list">
                            <span class="in-label">방송예정일</span>
                            <span class="in-txt ff-eng">YYYY.MM.DD (a) 14:00~15:00</span>
                          </div>
                          <div class="label-txt-list">
                            <span class="in-label">결제금액</span>
                            <span class="in-txt"><b class="value ff-eng">300,000</b>원</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 일정변경 -->
                  <div class="layout-pr-box">
                    <div class="modal-schd-grp">
                      <div class="modal-schd-cont-wrap">
                        <div class="modal-schd-cont">
                          <div class="ttl">
                            변경일자
                          </div>
                          <!-- TODO: v-calender 설치 -->
                          <div
                            class="cont cal"
                            style="width: 100%; height: 373px; border: 2px solid yellow;"
                          >
                            달력 들어올 영역
                          </div>
                        </div>
                        <div class="modal-schd-cont">
                          <div class="ttl">
                            변경시간
                            <span class="date ff-eng">2021.05.22 (토)</span>
                          </div>
                          <!-- TODO: 시간 설정 스크립트 -->
                          <!-- 활성화 is-active, 비활성화 is-inactive -->
                          <div class="modal-cont time">
                            <div class="btn-time-wrap modal-btn-time-wrap">
                              <button
                                v-for="(item, idx) in 4"
                                :key="idx"
                                type="button"
                                class="btn btn-time modal-btn-time ff-eng"
                              >
                                10:00
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-box-btn">
                  <button
                    type="button"
                    class="btn btn-md btn-primary"
                  >
                    일정변경 요청
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 메세지 -->
      <div style="margin-bottom: 30px">
        <h3 class="comp-point-ttl">
          3. 메세지 페이지 - 거래신청 <br> (Message.vue)
        </h3>

        <div
          class="ttl-lg-modal modal mb-modal comp-modal"
        >
          <div class="dark-modal-box modal-box">
            <div class="modal-box-hd">
              <span class="modal-ttl">거래신청</span>

              <!-- [D] 해당 팝업 닫을 땐 팝업 내용 초기화할 필요 있어서, slot 사용 -->
              <modal-close-btn>
                <template #btn>
                  <button
                    type="button"
                    class="btn close-btn"
                    @click="closeModal"
                  >
                    <i class="is-voice-only">거래신청 팝업 닫기</i>
                    <i
                      class="icon icon-close"
                    />
                  </button>
                </template>
              </modal-close-btn>
            </div>

            <div class="modal-box-container">
              <div class="modal-box-cont md-deal-apply">
                <!-- 아바타 02 -->
                <div class="avatar-with-name02 avartar-blk-box">
                  <avatar />
                  <div class="info">
                    <span class="top-info">광고주</span>
                    <span class="bottom-info">포켓컴퍼니</span>
                  </div>
                </div>

                <!-- 정보 -->
                <div class="inbox-info-grp padding-apply">
                  <div class="label-txt-list-grp">
                    <div class="label-txt-list">
                      <span class="in-label">방송예정일</span>
                      <span class="in-txt">YYYY.MM.DD (a) 14:00~15:00</span>
                    </div>
                  </div>
                </div>

                <!-- 결제금액 -->
                <div class="payment-price-grp">
                  <div class="input-txt-list">
                    <p class="in-label">
                      결제금액
                    </p>
                    <span class="in-dec">광고주와 협의된 금액을 입력하세요.</span>
                    <div class="inp-unit">
                      <input
                        type="text"
                        class="inp border-primary"
                      >
                      <span class="unit">원</span>
                    </div>
                  </div>
                </div>

                <!-- 일정변경 -->
                <div class="modal-schd-grp">
                  <div class="modal-schd-cont-wrap">
                    <div class="modal-schd-cont">
                      <div class="ttl">
                        변경일자
                      </div>
                      <!-- TODO: v-calender 설치 -->
                      <div
                        class="cont cal"
                        style="width: 100%; height: 373px; border: 2px solid yellow;"
                      >
                        달력 들어올 영역
                      </div>
                    </div>
                    <div class="modal-schd-cont">
                      <div class="ttl">
                        변경시간
                        <span class="date ff-eng">2021.05.22 (토)</span>
                      </div>
                      <!-- TODO: 시간 설정 스크립트 -->
                      <!-- 활성화 is-active, 비활성화 is-inactive -->
                      <div class="modal-cont time">
                        <div class="btn-time-wrap modal-btn-time-wrap">
                          <button
                            type="button"
                            class="btn btn-time modal-btn-time ff-eng"
                          >
                            10:00
                          </button>
                          <button
                            type="button"
                            class="btn btn-time modal-btn-time is-inactive"
                          >
                            10:00
                          </button>
                          <button
                            type="button"
                            class="btn btn-time modal-btn-time is-active"
                          >
                            10:00
                          </button>
                          <button
                            type="button"
                            class="btn btn-time modal-btn-time"
                          >
                            10:00
                          </button>
                          <button
                            type="button"
                            class="btn btn-time modal-btn-time is-active"
                          >
                            10:00
                          </button>
                          <button
                            type="button"
                            class="btn btn-time modal-btn-time"
                          >
                            10:00
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-box-btn">
                <button
                  type="button"
                  class="btn btn-md btn-primary"
                >
                  신청완료
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 셀러) 정산관리 -->
      <div style="margin-bottom: 30px">
        <h3 class="comp-point-ttl">
          4. 정산관리 - 신분증 업로드 <br> (sellers/MypageCalcMain.vue)
        </h3>

        <div class="ib-div">
          <div
            class="ttl-lg-modal modal mb-modal comp-modal"
          >
            <div class="modal-box">
              <div class="modal-box-hd">
                <span class="modal-ttl">신분증 업로드</span>

                <!-- [D] 해당 팝업 닫을 땐 팝업 내용 초기화할 필요 있어서, slot 사용 -->
                <modal-close-btn>
                  <template #btn>
                    <button
                      type="button"
                      class="btn close-btn"
                      @click="closeModal"
                    >
                      <i class="is-voice-only">신분증 업로드 팝업 닫기</i>
                      <i
                        class="icon icon-close"
                      />
                    </button>
                  </template>
                </modal-close-btn>
              </div>

              <div class="modal-box-container">
                <div class="modal-box-cont md-id-upload">
                  <span class="modal-dec">신분증을 찍은 이미지를 첨부해주세요. <br>
                    관리자 승인은 영업일 기준 7일 이내 진행됩니다.</span>

                  <div class="prf-picture id-upload-picture">
                    <figure class="picture">
                      <img
                        src="@/assets/images/icon/icon-prof-empty.svg"
                        alt="기본 이미지"
                        class="picture-img type-default"
                      >
                    </figure>
                    <span class="circle-btn">
                      <i class="icon icon-prf" />
                    </span>
                  </div>

                  <div class="agree-align">
                    <div class="chck-with-lb">
                      <input
                        id="agree_privacy"
                        type="checkbox"
                        class="is-none chck-inp"
                      >
                      <label
                        for="agree_privacy"
                        class="chck"
                      >
                        <i class="chckmark" />
                      </label>
                      <label
                        for="agree_privacy"
                        class="chck-lb"
                      >개인정보 처리 방침에 동의합니다.</label>
                    </div>
                    <button
                      type="button"
                      class="btn txt-btn"
                    >
                      내용보기
                    </button>
                  </div>
                </div>

                <div class="modal-box-btn">
                  <button
                    type="button"
                    class="btn btn-md btn-primary"
                  >
                    등록완료
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 셀러) 마이페이지 -->
      <div style="margin-bottom: 30px">
        <h3 class="comp-point-ttl">
          5. 셀러)마이페이지 - 회원탈퇴팝업 <br> (sellers/MypageMain.vue)
        </h3>

        <div
          class="ttl-lg-modal modal mb-modal comp-modal"
        >
          <div class="modal-box">
            <div class="modal-box-hd">
              <span class="modal-ttl">회원탈퇴</span>
              <modal-close-btn class="mb-show" />
            </div>

            <div class="modal-box-container">
              <div class="modal-box-cont md-leave">
                <span class="modal-dec">빌런즈를 탈퇴하시겠습니까? <br>
                  <b>안내사항을 꼭</b> 확인해주세요.</span>

                <div class="modal-ment-box">
                  <span class="ttl">쇼호스트 및 대행사 탈퇴 유의사항</span>
                  <ul class="list-grp type-number">
                    <li class="list">
                      탈퇴 시, 모든 계정 정보가 삭제되며 계정 복구가 불가능합니다.
                    </li>
                    <li class="list">
                      진행 중인 예약 건이 있는 경우 탈퇴 신청이 불가합니다.
                    </li>
                    <li class="list">
                      구매후기는 탈퇴 후에도 삭제되지 않으므로, 삭제를 원하시는 경우 고객센터로 요청해 주시기 바랍니다.
                    </li>
                  </ul>

                  <ul class="list-grp type-dash">
                    <li class="list-nothing">
                      [쇼호스트 및 대행사] 입점비 또는 구독권 자동결제중인 경우 :
                    </li>
                    <li class="list">
                      보유 이용권한은 모두 소멸되며 남은 이용권 기간의 복구 및 환불이 불가합니다.
                    </li>
                    <li class="list">
                      입점비 또는 구독권 자동결제중인 경우 탈퇴하시더라도 자동 해지 되지 않으며,
                      미해지시 다음 결제 예정일에 재결제 됩니다.
                    </li>
                    <li class="list">
                      탈퇴 전 반드시 구독 해지를 먼저 진행해주시기 바랍니다.
                    </li>
                    <li class="list-nothing">
                      [쇼호스트 및 대행사] 미지급 건이 있는 경우 :
                    </li>
                    <li class="list">
                      정산이 완료된 이후 탈퇴를 신청하셔야 하며, 정산 전 탈퇴할 경우 지급이 어렵습니다.
                    </li>
                    <li class="list">
                      모든 정산은 방송일 기준 익월 15일 지급됩니다.
                    </li>
                  </ul>
                </div>

                <div class="agree-align">
                  <div class="chck-with-lb">
                    <input
                      id="agree_leave"
                      type="checkbox"
                      class="is-none chck-inp"
                    >
                    <label
                      for="agree_leave"
                      class="chck"
                    >
                      <i class="chckmark" />
                    </label>
                    <label
                      for="agree_leave"
                      class="chck-lb"
                    >위 안내사항을 확인하였습니다.</label>
                  </div>
                </div>
              </div>

              <div class="modal-box-btn">
                <button
                  type="button"
                  class="btn btn-md btn-cancel"
                >
                  취소
                </button>
                <button
                  type="button"
                  class="btn btn-md btn-primary"
                >
                  네, 탈퇴합니다.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 셀러) 리뷰작성 -->
      <div style="margin-bottom: 30px">
        <h3 class="comp-point-ttl">
          6. 셀러) 예약내역 페이지 <br> (sellers/MypageRsvList.vue)
        </h3>

        <div class="ib-div">
          <div
            class="ttl-lg-modal modal mb-modal comp-modal"
          >
            <div class="modal-box">
              <div class="modal-box-hd">
                <span class="modal-ttl">리뷰작성</span>

                <!-- [D] 해당 팝업 닫을 땐 팝업 내용 초기화할 필요 있어서, slot 사용 -->
                <modal-close-btn>
                  <template #btn>
                    <button
                      type="button"
                      class="btn close-btn"
                      @click="closeModal"
                    >
                      <i class="is-voice-only">리뷰작성 팝업 닫기</i>
                      <i
                        class="icon icon-close"
                      />
                    </button>
                  </template>
                </modal-close-btn>
              </div>

              <div class="modal-box-container">
                <div class="modal-box-cont md-seller-write-review">
                  <span class="modal-dec">리뷰작성은 광고주에게 <br>
                    큰 도움이 됩니다!</span>

                  <div class="modal-blk-box">
                    <p class="blk-type">
                      대행사
                    </p>
                    <p class="blk-name">
                      구름컴퍼니
                    </p>
                  </div>

                  <div class="modal-info-box">
                    <div class="modal-info">
                      <span class="modal-info-type">결제금액</span>
                      <span class="modal-info-data ff-eng">300,000</span>
                    </div>
                    <div class="modal-info">
                      <span class="modal-info-type">방송일자</span>
                      <span class="modal-info-data ff-eng fw-500">YYYY.MM.DD(월) 14:00~15:00</span>
                    </div>
                  </div>

                  <div class="modal-star-box">
                    <p class="modal-review-ttl">
                      만족도를 평가해주세요.
                    </p>
                    <div
                      class="star-rating"
                      style="border: 3px solid yellow;"
                    >
                      star rating 들어갈 영역
                    </div>
                  </div>

                  <div class="modal-review-w-box is-padding-top">
                    <p class="modal-review-ttl">
                      리뷰 남기기
                    </p>
                    <textarea
                      rows="8"
                      class="modal-review-tarea"
                      placeholder="리뷰를 작성해주세요."
                    />
                  </div>
                </div>

                <div class="modal-box-btn">
                  <button
                    type="button"
                    class="btn btn-md btn-primary"
                  >
                    작성완료
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="comp-sect">
      <div class="comp-sect-ttl">
        <h2>기타 요소들</h2>
        <p>뭔가 2번 이상 사용됀 구성요소들입니다.. 언젠가 뽀려가세요.. ㅋ </p>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <article class="review-qst-list">
          <h4 class="qst-ttl">
            뽀려가는 급
          </h4>
          <span class="qst-cont">코드 안짜고 뽀려가니 쾌적하신가요?</span>
          <span class="star">5.0</span>
        </article>

        <div style="width: 100%;">
          <ul
            class="category-grid-wrap grid-wrap"
          >
            <li class="grid">
              <div
                class="category-card"
              >
                <div class="cont">
                  <i class="icon icon-cat is-cat-all" />
                  <span class="txt">신규요청</span>
                </div>
              </div>
            </li>
            <li class="grid">
              <div
                class="category-card"
              >
                <div class="cont">
                  <i class="icon icon-cat is-cat-all" />
                  <span class="txt">진행중</span>
                </div>
              </div>
            </li>
            <li class="grid">
              <div
                class="category-card"
              >
                <div class="cont">
                  <i class="icon icon-cat is-cat-all" />
                  <span class="txt">방송완료</span>
                </div>
              </div>
            </li>
            <li class="grid">
              <div
                class="category-card"
              >
                <div class="cont">
                  <i class="icon icon-cat is-cat-all" />
                  <span class="txt">지난내역</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <time-badge-grp />
      </div>
    </section>
  </div>
</template>

<script>
import CmContactMsg from '../common/components/CmContactMsg';

export default {
    name: 'Components',
    components: { CmContactMsg },
    data() {
        return {
            listTest: ['패션', '테크레저'],
        };
    },
};
</script>

<style lang="scss" scoped>
.comp-ttl {
    font-size: 50px;
    font-weight: 600;
    margin-top: 80px;

    &:first-child {
        margin-top: 0;
    }
}

.comp-sect {
    margin: 20px 0;
    padding: 20px 0;
    border-bottom: 1px solid #333;

    &:last-child {
        border-bottom: 0;
    }

    .comp-sect-ttl {
        font-size: 30px;
        font-weight: 500;
        text-transform: capitalize;
        margin-bottom: 30px;
        background-color: rgba(white, 0.08);
        padding: 15px 20px 10px;

        p {
            font-size: 16px;
            margin: 10px 0;
            color: #707070;
        }
    }
}

.comp-point-ttl-lg {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 10px;

    .badge {
        margin-right: 10px;
        border-radius: 5px;
        background-color: #333;
        padding: 5px 10px;
        display: inline-block;
        user-select: all;
    }
}

.comp-point-ttl {
    font-size: 15px;
    margin-bottom: 10px;
    padding: 5px 10px;
}

.comp-modal {
    position: relative;
    top: 0;
    left: 0;
    opacity: 1;
    margin: 0;
    width: 460px;
    transform: translate(0, 0);
    pointer-events: visible;

    @include mobile {
        width: 100%;
    }
}

.inline-block-grp {
}

.ib-div {
    display: inline-block;
    vertical-align: top;
    margin-right: 10px;

    @include mobile {
        width: 100%;
    }
}

.comp-modal {
}
</style>
