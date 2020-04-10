<template>
  <div id="signup">
    <div class="signup-box">
        <div class="brand_holder" style="height: 70px; margin-top: 45px; margin-bottom: 25px;">
          <span class="brand" /><span class="vertical-line" /><h1>LIVE</h1>
        </div>
        <form class="flex-form">
            <div>
                  <input type="text" name="firstName" placeholder="first name" v-model="firstName"
                         required >
                  <span class="icon username" />
            </div>
            <div>
                  <input type="text" name="lastName" placeholder="last name" v-model="lastName"
                         required >
                  <span class="icon username" />
              </div>
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
            <div>
                <input type="password" name="passwordConfirm" placeholder="repeat password"
                       v-model="passwordConfirm" required>
                <span class="icon password" />
            </div>

            <label class="checkbox_label">
              <input type="checkbox">
              I have read and accept the <a href="#" @click="termsPopup">terms and conditions</a>.
            </label>

            <input type="submit" value="CREATE ACCOUNT" @click="handleSubmit">
        </form>
    </div>

    <router-link to="/login" tag="button" class="login-button">
      Already have an account<b>? Log in here.</b>
    </router-link>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['nextUrl'],
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
  },
  methods: {
    termsPopup() {
      this.$modal.show({
        template: `
          <div>
            <h1>This is created inline</h1>
            <p>{{ text }}</p>
          </div>
        `,
        props: ['text'],
      }, {
        text: 'This text is passed as a property',
      }, {
        height: 'auto',
      }, {
        'before-close': () => { console.log('this will be called before the modal closes'); },
      });
    },

    handleSubmit(e) {
      e.preventDefault();
      if (this.password === this.passwordConfirm && this.password.length > 0) {
        console.log('submit');
        axios({
          method: 'post',
          url: `${this.$apiURL}/user/`,
          data: {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
          },
        })
          .then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('jwt', response.data.Authorization);

            if (localStorage.getItem('jwt') != null) {
              this.$emit('loggedIn');
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                this.$router.push('/');
              }
            } else {
              localStorage.removeItem('user');
              localStorage.removeItem('jwt');
            }
          })
          // eslint-disable-next-line no-unused-vars
          .catch((error) => {
            console.error(error);
          });
      } else {
        this.password = '';
        this.passwordConfirm = '';
        // console.log('Passwords do not match');
      }
    },
  },
};
</script>

<style scoped>

#signup {
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

.signup-box {
    display: flex;
    align-items: center;
    flex-direction: column;

    height: 472px;
    width: 300px;

    border: none;
    border-radius: 5px;

    background-color: #222;

}

.signup-box h1 {
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
    width: 130px;
    background: #dc6fc4 !important;
    color: #fff;

    border: 0;
    border-radius: 18px;

    font-weight: 700;
    font-size: 11px;

    margin-top: 12px;

    -webkit-appearance: button;
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
    background-image: url("./../assets/icons/password.svg");
    position: relative;
    top: 7px;
    left: -235px
}

.login-button {
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

.login-button:hover {
    background-color: white;
}

.checkbox_label {
  font-size: 13px;
  color: #CCC;
  padding: 10px;
}

.checkbox_label a {
  color: #7590cc;
  font-weight: 700;
}
</style>
