<template>
  <div id="wrapper">
    <div id="content">
  <br>
  <h2>Login</h2>
  <div>
  <br>
    <h3 class="join_title">
      <label for="id">아이디</label>
    </h3>
    <span class="box int_id">
                        <input type="text" name="MID" v-model="userID" id="id" placeholder="아이디 입력" class="int" maxlength="20">
                    </span>
    <span class="error_next_box"></span>
    <h3 class="join_title">
      <label for="id">비밀번호</label>
    </h3>

    <span class="input-group mb-3">
          <input type="text" name="MPASS" v-model="password" class="form-control" placeholder="비밀번호 입력" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="login">로그인</button>
        </span>
    <span class="error_next_box"></span>
  <br>
    <div class="btn_area">
      <button type="button" @click="signup" id="btnJoin">
        <span>회원가입</span>
      </button>

    </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Login",
  data() {
    return {
      userID: '',
      password: ''
    }
  },
  methods: {
    signup() {
      this.$router.push('signup')
    },
    login() {
      if (this.userID === '') {
        alert("아이디를 입력해주세요")
      } else if (this.password === '') {
        alert("비밀번호를 입력해주세요")
      } else {
        axios.post('api/login', {
          MID: this.userID,
          MPASS: this.password
        }).then(res => {
          if (res.data) {
            alert("로그인에 성공했습니다.")
          } else {
            alert("로그인에 실패했습니다.")
          }
        }).catch(err => {
          console.log(err)
          alert("로그인 오류 발생")
        })
      }
    },
    exploer() {
      this.$router.push('exploer')
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  height: 100%;
  background-color: #E6E6FA;
}

#wrapper {
  position: relative;
  height: 100%;
}

#content {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 460px;
}

/* 입력폼 */

h3 {
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
}

.box {
  display: block;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 14px;
  box-sizing: border-box;
  background: #fff;
  position: relative;
}

.int {
  display: block;
  position: relative;
  width: 100%;
  height: 29px;
  border: none;
  background: #fff;
  font-size: 15px;
}

.box.int_id {
  padding-right: 110px;
}

.box.int_pass {
  padding-right: 40px;
}

.box.int_pass_check {
  padding-right: 40px;
}

select {
  width: 100%;
  height: 29px;
  font-size: 15px;
  background-size: 20px 8px;
  -webkit-appearance: none;
  display: inline-block;
  text-align: start;
  border: none;
  cursor: default;
}

.error_next_box {
  margin-top: 9px;
  font-size: 12px;
  color: red;
  display: none;
}

#alertTxt {
  position: absolute;
  top: 19px;
  right: 38px;
  font-size: 12px;
  color: red;
  display: none;
}

/* 버튼 */

.btn_area {
  margin: 20px 0 91px;

}

#btnJoin {
  width: 100%;
  padding: 21px 0 17px;
  border: 0;
  cursor: pointer;
  color: white;
  background-color: #52a3ef;
  font-size: 20px;
  font-weight: 400;
}
</style>