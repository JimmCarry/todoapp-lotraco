<template>
  <div id="nav">
    <a href="#">
      <h1 class="logo">AppLogo</h1>
    </a>
    
    <router-link class="home" to="/">
      <div class="nav-row">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="sun" class="svg-inline--fa fa-sun fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"></path></svg>
        <h3>Můj den</h3>
      </div>
      <span>{{ itemsDone }}</span>
    </router-link>

    <router-link class="important" to="/important">
      <div class="nav-row">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
        <h3>Důležité úkoly</h3>
      </div>
    </router-link>

    <router-link class="contact" to="/contact">
      <div class="nav-row">
        <svg class="svg-icon" viewBox="0 0 20 20">
				<path fill="none" d="M5.114,5.726c0.169,0.168,0.442,0.168,0.611,0c0.168-0.169,0.168-0.442,0-0.61L3.893,3.282c-0.168-0.168-0.442-0.168-0.61,0c-0.169,0.169-0.169,0.442,0,0.611L5.114,5.726z M3.955,10c0-0.239-0.193-0.432-0.432-0.432H0.932C0.693,9.568,0.5,9.761,0.5,10s0.193,0.432,0.432,0.432h2.591C3.761,10.432,3.955,10.239,3.955,10 M10,3.955c0.238,0,0.432-0.193,0.432-0.432v-2.59C10.432,0.693,10.238,0.5,10,0.5S9.568,0.693,9.568,0.932v2.59C9.568,3.762,9.762,3.955,10,3.955 M14.886,5.726l1.832-1.833c0.169-0.168,0.169-0.442,0-0.611c-0.169-0.168-0.442-0.168-0.61,0l-1.833,1.833c-0.169,0.168-0.169,0.441,0,0.61C14.443,5.894,14.717,5.894,14.886,5.726 M5.114,14.274l-1.832,1.833c-0.169,0.168-0.169,0.441,0,0.61c0.168,0.169,0.442,0.169,0.61,0l1.833-1.832c0.168-0.169,0.168-0.442,0-0.611C5.557,14.106,5.283,14.106,5.114,14.274 M19.068,9.568h-2.591c-0.238,0-0.433,0.193-0.433,0.432s0.194,0.432,0.433,0.432h2.591c0.238,0,0.432-0.193,0.432-0.432S19.307,9.568,19.068,9.568 M14.886,14.274c-0.169-0.168-0.442-0.168-0.611,0c-0.169,0.169-0.169,0.442,0,0.611l1.833,1.832c0.168,0.169,0.441,0.169,0.61,0s0.169-0.442,0-0.61L14.886,14.274z M10,4.818c-2.861,0-5.182,2.32-5.182,5.182c0,2.862,2.321,5.182,5.182,5.182s5.182-2.319,5.182-5.182C15.182,7.139,12.861,4.818,10,4.818M10,14.318c-2.385,0-4.318-1.934-4.318-4.318c0-2.385,1.933-4.318,4.318-4.318c2.386,0,4.318,1.933,4.318,4.318C14.318,12.385,12.386,14.318,10,14.318 M10,16.045c-0.238,0-0.432,0.193-0.432,0.433v2.591c0,0.238,0.194,0.432,0.432,0.432s0.432-0.193,0.432-0.432v-2.591C10.432,16.238,10.238,16.045,10,16.045"></path>
			</svg>
      <h3>Kontakt</h3>

      </div>
    </router-link>
  </div>
  <router-view />
</template>

<script>
import { reactive ,onMounted, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      itemsDone: '',
    })

    onMounted(() => {
      window.eventBus.on('items-to-done', event => {
        state.itemsDone = event.length;
      })
    })

    return {
      ...toRefs(state),
     
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  width: 100%;
  height: 100vh;
  font-size: 14px;
  font-family: 'Open Sans','HelveticaNeue','Helvetica Neue',Helvetica,Arial,sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}
#nav {
  min-width: 220px;
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: left;
  h1 {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: rgb(221, 68, 68);
    font-weight: 900;
    letter-spacing: -0.1rem;
    -webkit-text-stroke: 1.5px #fff;
    text-shadow: 1px 2px 6px black;
    padding-left: 1rem;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    span {
        padding-right: 1rem;
    }
    &.router-link-exact-active {
      color: #515151;
      background-color: #f1f1f1;
    }
  }
}
.important {
  opacity: 0.5;
  pointer-events: none;
}
.nav-row {
    svg {
      width: 20px;
      height: 20px;
      border-left: 2px solid black;
      margin-left: 0.1rem;
      padding: 0 0.5rem;
      path {
        fill: #737372;
      }
    }
}
.nav-row {
  display: flex;
  align-items: center;
  h3 {
    margin: 0.7rem 0;
  }
}
.contact {
  svg {
    border-left: 2px solid #fff;
    path {
      fill: none;
    }
  }  
}

@media (max-width: 920px) {
  #app {
    display: block;
  }
  #nav {
    font-size: 0.8rem;
    width: 100%;
    flex-direction: row;
    height: auto;
    a {
      width: 25%;
    }
  }
}
</style>
