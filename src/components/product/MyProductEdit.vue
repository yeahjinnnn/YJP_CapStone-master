<template>
  <ProductMain />
  <div>
    <br>
    <h1>상품 수정 페이지 입니다.</h1>
    <div class="content-detail-content">
      <b-form v-on:submit.prevent="formSubmit" method="post" enctype="multipart/form-data">
        <label for="text-select">상품분류</label>
        <b-form-select v-model="kindid" :options="options"></b-form-select>
        <div class="mt-3">선택유형 : <strong>{{ kindid }}</strong></div>

        <br>
        <label>메뉴명</label>
        <b-form-input v-model="menuname" placeholder="메뉴명을 입력하세요." :state="menuname" id="feedback-user"></b-form-input>

        <br>
        <label for="text-select3">수량</label>
        <b-form-input v-model="stock" placeholder="수량을 입력하세요." :state="stock" id="feedback-user"></b-form-input>

        <br>
        <label for="text-select4">가격</label>
        <b-form-input v-model="price" placeholder="가격을 입력하세요." :state="price" id="feedback-user"></b-form-input>

        <br>
        <label for="text-select5">설명</label>
        <b-form-input v-model="ex" placeholder="설명을 입력하세요." :state="ex" id="feedback-user"></b-form-input>

        <br>
        <b-form-file
          v-model="fileload"
          :state="Boolean(fileload)"
          class="form-control"
          type="file"
          id="fileload"
          placeholder="상품을 설명할 이미지 파일을 업로드하세요."
          drop-placeholder="Drop file here...">

        </b-form-file>
        <div class="mt-3">Selected file: {{ fileload.name }}</div>
      </b-form>
    </div>

    <br>
    <div class="content-detail-button">
      <b-button variant="outline-primary"  @click="updated">수정하기</b-button>
      <b-button variant="outline-danger"  @click="cancel">취소하기</b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductMain from "@/components/product/ProductMain";

export default {
  name: "MyProductEdit",
  components: { ProductMain },

  data() {
    return {
      kindid: '',
      menuname: '',
      stock: '',
      price: '',
      ex: '',
      fileload: '',


      options: [
        { value: null, text: '판매하실 상품의 유형을 선택해주세요'},
        { value: '1', text: '오토캠핑'},
        { value: '2', text: '글램핑'},
        { value: '3', text: '카라반'},
        { value: '4', text: '펜션'},
        { value: '5', text: '렌트'},
        { value: '6', text: '쇼핑'},
      ],
    }
  },
  created() {
    this.editMode = this.$route.params.menuid ? true: false;
    if(this.editMode) {
      this.menuid = this.$route.params.menuid
      // this.kindid = this.$route.params.kind;
      this.menuname = this.$route.params.menuname;
      this.stock = this.$route.params.stock;
      this.price = this.$route.params.price;
      this.ex = this.$route.params.ex;
      this.userid = this.$route.params.userid;
    }
  },
  methods: {
    updated() {
      const updateData = new FormData();

      const photoFile = document.getElementById("fileload");

        updateData.append('menuid', this.menuid);
        updateData.append('ex', this.ex);
        // updateData.append('fileload', photoFile.files[0]);  파일을 찾을수 없음 !!
        updateData.append('menuname', this.menuname);
        updateData.append('price', this.price);
        updateData.append('stock', this.stock);
        updateData.append('kindid', this.kindid);
        updateData.append('userid', this.userid.userid);
        // updateData.append('') Savedtime 작성해주기 , 안하면 Null로 받아짐
        console.log(this.kindid, this.menuname, this.fileload, this.stock, this.price, this.userid.userid, this.ex, this.menuid)

        axios.put('http://localhost:8282/api/myProduct_Update/' + this.menuid, updateData, { headers: { 'Content-Type': 'multipart/form-data'}} )
          .then(res => {
            console.log("성공", res);
            alert("상품이 수정되었습니다.")
            this.$router.push({
              name: "MyProductList"
            })
          })
          .catch(error => {
            console.log(error)
            alert("상품이 수정되지 않았습니다.")
          })

    },
    cancel() {
      this.$router.push({
        name: "MyProductList"
      })
    }


  }

}
</script>

<style scoped>
.content-detail-button {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
  size: 200px;
}
.button {
  cursor: pointer;
  size: 200px;
}
.content-detail-content {
  border: 1px solid black;
  margin-top: 2rem;
  padding-top: 2rem;
  min-height: 650px;
}
</style>
