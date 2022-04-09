<template>
  멤버데이터 입니다
  <div>
    <label>아이디 : </label>
    <input type="text">
    <br/><br/>
    <label>닉네임 : </label>
    <input type="text">
    <button name="NICH">중복확인</button>
    <br/><br/>
    <label>우편주소 : </label>
    <input type="text">
    <button name="ZCS">우편주소검색</button>
    <br/><br/>
    <label>상세주소 : </label>
    <input type="text">
    <br/><br/>
    <label>전화번호 : </label>
    <input type="text">
    <br/><br/>
    <label>이메일 : </label>
    <input type="text">
    <br/><br/>
    <button name="Update">수정</button>
    <br/><br/>
    <button name="Delete">탈퇴</button>
  </div>
</template>

<script>
export default {
  name: "MemberData"
}
</script>

<style scoped>

</style>
