<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">캠핑플랜</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/infoter">보관함</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/itemBuy">구매</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/itemShare">렌탈</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/board">게시판</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">고객센터</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ProductMain">판매자전용</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signup">회원가입</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">로그인</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/slogin">판매자 회원가입</router-link>
          </li>

          <!--          <li class="nav-item dropdown">-->
          <!--            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
          <!--              Dropdown-->
          <!--            </a>-->
          <!--            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">-->
          <!--              <li><a class="dropdown-item" href="#">Action</a></li>-->
          <!--              <li><a class="dropdown-item" href="#">Another action</a></li>-->
          <!--              <li><hr class="dropdown-divider"></li>-->
          <!--              <li><a class="dropdown-item" href="#">Something else here</a></li>-->
          <!--            </ul>-->
          <!--          </li>-->
          <!--          <li class="nav-item">-->
          <!--            <a class="nav-link disabled">Disabled</a>-->
          <!--          </li>-->
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>

</style>
