<template>
  <div>
    <ProductMain />
    <br>
    <h1>상품 수정 및 삭제 페이지 입니다.</h1>
    <div class="content-detail-content">
    <b-form v-on:submit.prevent="formSubmit" method="post" enctype="multipart/form-data">
      <label for="text-select">상품분류</label>
      <b-form-select v-if="myContent.kindid.kindid" v-model="myContent.kindid.kindid" :options="options" readonly></b-form-select>
      <div class="mt-3">선택유형 : <strong>{{ myContent.kindid.kindname }}</strong></div>

      <br>
      <label>메뉴명</label>
      <b-form-input v-if="myContent.menuname" v-model="myContent.menuname" placeholder="메뉴명을 입력하세요." :state="menuname" id="feedback-user" readonly></b-form-input>

      <br>
      <label for="text-select3">수량</label>
      <b-form-input v-if="myContent.stock" v-model="myContent.stock" placeholder="수량을 입력하세요." :state="stock" id="feedback-user" readonly></b-form-input>

      <br>
      <label for="text-select4">가격</label>
      <b-form-input v-if="myContent.price" v-model="myContent.price" placeholder="가격을 입력하세요." :state="price" id="feedback-user" readonly></b-form-input>

      <br>
      <label for="text-select5">설명</label>
      <b-form-input v-if="myContent.ex" v-model="myContent.ex" placeholder="설명을 입력하세요." :state="ex" id="feedback-user" readonly></b-form-input>

      <br>
      <b-form-file
        v-model="myContent.fileload"
        :state="Boolean(myContent.fileload)"
        class="form-control"
        type="file"
        id="file_load"
        placeholder="상품을 설명할 이미지 파일을 업로드하세요."
        readonly
        drop-placeholder="Drop file here...">

      </b-form-file>
      <div class="mt-3">Selected file: {{ myContent.fileload }}</div>
    </b-form>
    </div>

    <br>
    <div class="content-detail-button">
      <b-button variant="outline-primary" @click="updated">수정</b-button>
      <b-button variant="outline-danger" @click="deleted">삭제</b-button>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import ProductMain from "@/components/product/ProductMain";

export default {
  name: "MyProductDetail",
  components: { ProductMain },

  data() {
    return {
      id: '',
      myContent: [],
    }
  },
  created() {
    this.myDataList();
  },
  methods: {
    myDataList() {
      this.id = this.$route.params.menuid;
      console.log(this.id);
      axios.get('http://localhost:8282/api/myProduct_detail/' + this.id)
        .then(res => {
          console.log(res.data);
          this.myContent = res.data;
        })
        .catch(e => {
          console.log(e);
        })
    },
    updated() {
      this.$router.push({
        name: "MyProductEdit",
        params: { kind: this.myContent.kindid,
                  menuname: this.myContent.menuname,
                  stock: this.myContent.stock,
                  price: this.myContent.price,
                  ex: this.myContent.ex,
                  fileload: this.myContent.fileload,
                  userid: this.myContent.userid,
                  menuid: this.myContent.menuid
        },
      });

    },
    deleted() {
        if(confirm("삭제하시겠습니까?")) {
          axios.delete('http://localhost:8282/api/myProduct_Delete/' + this.id)
            .then(res => {
            console.log("삭제되었습니다.", res)
            alert("메뉴가 삭제되었습니다.");
            this.$router.push({
              name: "MyProductList"
            })
            })
            .catch(error => {
              console.log("삭제가 실패했습니다", error)
              alert("삭제가 실패했습니다.");
            })
        }
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

.content-detail-content {
  border: 1px solid black;
  margin-top: 2rem;
  padding-top: 2rem;
  min-height: 650px;
}
</style>
