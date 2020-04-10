<template>
  <div id="login">
    <div class="login-box">
        <div class="brand_holder" style="height: 70px; margin-top: 45px; margin-bottom: 25px;">
          <span class="brand" /><span class="vertical-line" /><h1>LIVE</h1>
        </div>
        <form class="flex-form">
            <div>
                <input type="text" name="email" placeholder="email address" v-model="email"
                       required >
                <span class="icon username" />
            </div>

            <div>
                <input type="password" name="password" placeholder="password" v-model="password"
                       required>
                <span class="icon password" />
            </div>

            <input type="submit" value="LOG IN" @click="handleSubmit">
        </form>
    </div>

    <router-link to="/register" tag="button" class="sign-up-button">
      Dont have an account<b>? Sign up here.</b>
    </router-link>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {},
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        axios.post(`${this.$apiURL}/auth/login`, {
          email: this.email,
          password: this.password,
        }).then((response) => {
          const isAdmin = response.data.user.is_admin;
          localStorage.setItem('user', JSON.stringify(response.data.user));
          localStorage.setItem('jwt', response.data.Authorization);

          if (localStorage.getItem('jwt') != null) {
            this.$emit('loggedIn');
            if (this.$route.params.nextUrl != null) {
              this.$router.push(this.$route.params.nextUrl);
            } else if (isAdmin === true) {
              this.$router.push('/admin');
            } else {
              this.$router.push('/');
            }
          }
        }).catch((error) => {
          console.error(error);
        });
      }
    },
  },
};
</script>

<style scoped>
#login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111;
}

.flex-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.login-box {
    display: flex;
    align-items: center;
    flex-direction: column;

    height: 300px;
    width: 300px;

    border: none;
    border-radius: 5px;

    background-color: #222;

}

.login-box h1 {
    font-size: 36px;
}

form {
    height: auto;
    min-height: 120px;
}

form input[type='text'] {
    height: 36px;
    width: 197px;

    position: relative;

    border: none;
    border-radius: 18px;

    background-color: rgba(0,0,0,0.12);

    padding: 0 10px;
    padding-left: 36px;

    margin-bottom: 5px;
    margin-left: 23px;
    color: white;
}

form input[type='password'] {
    height: 35px;
    width: 197px;

    position: relative;

    border: none;
    border-radius: 18px;

    background-color: rgba(0,0,0,0.12);

    padding: 0 10px;
    padding-left: 36px;

    margin-bottom: 5px;
    margin-left: 23px;

    color: white;
}

form input[type='submit'] {
    height: 36px;
    width: 70px;
    background: #dc6fc4 !important;
    color: #fff;

    border: 0;
    border-radius: 18px;

    font-weight: 700;
    font-size: 11px;

    margin-top: 12px;

    -webkit-appearance: button;
}

form input {
  transition: ease all 0.5s;
}

form input[type='password']:focus, input[type='text']:focus  {
  background-color: #333;
}

.icon {
    background-size: cover;
    height: 20px;
    width: 20px;
    display: inline-block;

}

.icon.username {
    background-image: url("./../assets/icons/username.svg");
    position: relative;
    top: 7px;
    left: -235px
}

.icon.password {
    background-image: url("../assets/icons/password.svg");
    position: relative;
    top: 7px;
    left: -235px
}

.sign-up-button {
    position: fixed;
    bottom: 20px;
    width: 242px;
    height: 30px;

    border: none;
    border-radius: 20px;

    background-color: rgba(255, 255, 255, 0.9);

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0 0 50px 25px rgba(0,0,0,0.15);

    transition: ease all 0.25s;

    font-size: 12px;

    color: #111;
}

.sign-up-button:hover {
    background-color: white;
}

</style>
