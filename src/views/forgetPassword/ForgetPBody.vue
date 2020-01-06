<template>
  <div class="forgetPassword">
    <!-- 输入手机号或邮箱 -->
    <div class="forgetPassword_username">
      <div v-if="f1">
        <label for class="forgetPassword_username_left">手机号码</label>
        <input type="number" placeholder="请输入手机号" v-model="phone" @keyup="phoneTest" />
        <i class="fas fa-check-circle green" v-show="f_phone"></i>
        <span class="test" @click="test">邮箱验证</span>
        <i class="fas fa-times" @click="clearPhone "></i>
      </div>
      <div v-else>
        <label for class="forgetPassword_username_left">邮箱地址</label>
        <input type="email" placeholder="建议使用常用邮箱" v-model="email" @keyup="emailTest" />
        <i class="fas fa-check-circle green" v-show="f_email"></i>
        <span class="test" @click="test">手机验证</span>
      </div>
    </div>
    <!-- 输入验证码 -->
    <div class="forgetPassword_username">
      <label for class="forgetPassword_username_left">验证码</label>
      <input type="text" placeholder="验证码" v-model="img_code" />
      <span class="forgetPassword_username_right img_code" @click="imgCode">{{str ||'验证码'}}</span>
    </div>
    <!-- 输入手机或邮箱验证码 -->
    <div class="forgetPassword_username">
      <div class="code" v-if="f1">
        <label for class="forgetPassword_username_left code_left">手机验证码</label>
        <input type="text" placeholder="请输入手机验证码" v-model="phone_code" />
        <span
          class="forgetPassword_username_right phone_code"
          @click="phoneCode"
        >{{flagPhone_code? '点击获取验证码':'此验证码'+count+'秒失效'}}</span>
      </div>
      <div class="code" v-else>
        <label for class="forgetPassword_username_left code_left">邮箱验证码</label>
        <input type="text" placeholder="请输入邮箱验证码" v-model="email_code" />
        <span
          class="forgetPassword_username_right phone_code"
          @click="emailCode"
        >{{flagEmail_code? '点击获取验证码':'此验证码'+count+'秒失效'}}</span>
      </div>
    </div>
    <!-- 输入密码  -->
    <div class="forgetPassword_username" v-if="tiggle">
      <label for class="forgetPassword_username_left">重置密码</label>
      <input type="password" placeholder="组合，4-20个字符" v-model="password" @keyup="passwordTest" />
      <i class="fas fa-check-circle green" v-show="flag"></i>
      <i class="fas fa-eye forgetPassword_username_right" @click="passwordFlag"></i>
    </div>
    <div class="forgetPassword_username" v-else>
      <label for class="forgetPassword_username_left">重置密码</label>
      <input type="text" placeholder="组合，4-20个字符" v-model="password" @keyup="passwordTest" />
      <i class="fas fa-check-circle green" v-show="flag"></i>
      <i class="fas fa-eye-slash forgetPassword_username_right" @click="passwordFlag"></i>
    </div>
    <!-- 点击更换密码 -->
    <button class="btn" @click="resetPassword">重置密码</button>
  </div>
</template>

<script>
import request from "@/utils/request.js";
export default {
  data() {
    return {
      tiggle: true,
      phone: "",
      email: "",
      password: "",
      phone_code: "",
      email_code: "",
      img_code: "",
      str: "",
      count: 60,
      f_phone: false,
      flag: false,
      f1: true,
      f_email: false,
      flagPhone_code: true,
      flagEmail_code: true
    };
  },
  methods: {
    // 是否查看密码
    passwordFlag() {
      return (this.tiggle = !this.tiggle);
    },
    // 是否清空手机号
    clearPhone() {
      return (this.phone = "");
    },
    // 手机正则验证
    phoneTest() {
      let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if (reg.test(this.phone)) {
        this.f = true;
      } else {
        this.f = false;
      }
    },
    // 密码验证
    passwordTest() {
      /* eslint-disable */
      let reg = /^[0-9a-zA-Z]{4,20}$/;
      if (reg.test(this.password)) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    // 邮箱验证
    emailTest() {
      let reg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/;
      if (reg.test(this.email)) {
        this.f_email = true;
      } else {
        this.f_email = false;
      }
    },
    // 判断是手机号还是邮箱
    test() {
      return (this.f1 = !this.f1);
    },
    // 图片验证码
    imgCode() {
      let str = "",
        a,
        b,
        c,
        d;
      for (var i = 1; i < 5; i++) {
        (a = String.fromCharCode(Math.round(Math.random() * (65 - 90) + 90))),
          (b = String.fromCharCode(Math.round(Math.random() * (48 - 57) + 57))),
          (c = String.fromCharCode(
            Math.round(Math.random() * (97 - 122) + 122)
          )),
          (d = Math.round(Math.random() * (1 - 3) + 3));
        if (d == 1) {
          str += a;
        } else if (d == 2) {
          str += b;
        } else if (d == 3) {
          str += c;
        }
      }
      this.str = str;
    },
    // 手机验证码，发送请求
    async phoneCode() {
      let count = 60,
        timer;
      timer = setInterval(() => {
        count--;
        // console.log(count)
        this.count = count;
        this.flagPhone_code = false;
        if (count == 0) {
          clearInterval(timer);
          this.flagPhone_code = true;
        }
      }, 1000);
      // const result=await request({
      //     url:'',
      //     method:'post',
      //     data:{
      //         phone:this.phone
      //     },
      //     headers:{
      //         "Content-Type":'application/json'
      //     }
      // })
      // console.log(result.data)
    },
    // 邮箱验证码，发送请求
    async emailCode() {
      let count = 60,
        timer;
      timer = setInterval(() => {
        count--;
        // console.log(count)
        this.count = count;
        this.flagEmail_code = false;
        if (count == 0) {
          clearInterval(timer);
          this.flagEmail_code = true;
        }
      }, 1000);
      // const result=await request({
      //     url:'',
      //     method:'post',
      //     data:{
      //         email:this.email
      //     },
      //     headers:{
      //         "Content-Type":'application/json'
      //     }
      // })
      // console.log(result.data)
    },
    // 请求更改密码
    async resetPassword() {
      const {
        phone,
        email,
        img_code,
        str,
        phone_code,
        email_code,
        password
      } = this;
      if (
        (img_code == str && !phone && !phone_code && !password) ||
        (img_code == str && !email && !email_code && !password)
      ) {
        const result = await request({
          url: "",
          method: "post",
          data: {
            phone,
            phone_code,
            email,
            email_code,
            password
          },
          headers: {
            "Content-Type": "application/json"
          }
        });
        console.log(result.data);
      } else {
        alert("您输入的验证码有误");
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylesheets/border.styl';

.forgetPassword {
  width: 100%;
  font-size: 0.14rem;
  color: #777;

  .forgetPassword_username {
    // width 100%
    width: 90%;
    height: 0.44rem;
    // padding 0  .15rem
    text-align: center;
    border: 0 0 1px 0, #777;
    margin: 0.15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .green {
      color: green;
    }

    .test {
      color: #38f;
      cursor: pointer;
      font-size: 0.14rem;
    }

    .forgetPassword_username_left {
      width: 1.05rem;
      font-size: 0.16rem;
      flex: 105;
      color: #222;
      text-align: justify;
      text-align-last: justify;
      flex-shrink: 0;
    }

    input {
      padding-left: 0.1rem;
      flex: 230;
      font-size: 0.14rem;
      border-top: 0;
      border-right: 0;
      border-bottom: 0;
      border-left: 0;
      color: #333;
    }

    .forgetPassword_username_right {
      // flex 40
      width: 0.6rem;
      font-size: 0.12rem;
      color: #333;
    }

    .img_code {
      flex: 80;
      background: #dddddd;
      line-height: 0.32rem;
      color: #777777;
    }

    .code {
      display: flex;
      // justify-content center
      align-items: center;

      .code_left {
        flex: 105;
      }

      input {
        flex: 160;
      }

      .phone_code {
        flex: 110;
        height: 0.38rem;
        // line-height .32rem
        background: #dddddd;
        color: #777777;
      }
    }
  }

  .btn {
    width: 90%;
    height: 0.4rem;
    color: #fff;
    text-align: center;
    background: #f11c3a;
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
    border-left: 0;
    margin-left: 0.15rem;
    margin-top: 0.24rem;
    box-shadow: 0 0.04rem 0.14rem #f11c3a;
    border-radius: 0.1rem;
    font-size: 0.18rem;
  }
}
</style>