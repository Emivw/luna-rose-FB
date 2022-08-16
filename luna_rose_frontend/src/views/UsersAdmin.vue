<template>
  <div id="main" class="users container">
    <h1>ALL USERS</h1>
    <div style="overflow-x:auto">
      <table class="table text-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Full Name</th>
          <th scope="col">Email</th>
          <th scope="col">User Password</th>
          <th scope="col">User Role</th>
          <th scope="col">Join Date</th>
          <th scope="col">Cart</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
           <tbody>
        <tr v-for="user in users" :key="user.userId">
          <th scope="row" class="p-2">{{ user.userId }}</th>
          <th scope="row">{{ user.fullName }}</th>
          <th scope="row">{{ user.email }}</th>
          <th scope="row">{{user.userPassword}}/></th>
          <th scope="row">{{ user.userRole }}</th>
          <th scope="row">{{ user.joinDate }}</th>
          <th scope="row">{{ user.cart }}</th>
          <th scope="row">
            <button
              data-bs-toggle="modal"
              :data-bs-target="`#editUser` + user.UserId"
              class="btn btn-grad"
              id="prodButton"
            >
              Edit
            </button>
            <button
              data-bs-toggle="modal"
              :data-bs-target="`#deleteuser` + user.id"
              class=" btn btn-grad"
              id="prodButton"
            >
              Delete
            </button>
          </th>
          <EditUserModal :user="user" />
          <DeleteUserModal :user="user" />
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>
<script>
// import UserCartModal from '../components/UserCartModal.vue';
// import DeleteAccountModal from '../components/DeleteAccountModal.vue';
export default {
//   components:{
//     UserCartModal,DeleteAccountModal
//   },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
};
</script>
<style scoped>
#main{
  padding: 110px 0;
}
#word{
  word-break: break-all;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid white;
}
th, td {
  text-align: center;
  padding: 8px;
}
.btn-grad {
  background-image: linear-gradient(
    to right,
    #E52D27 0%,
    #B31217 51%,
    #E52D27 100%
  );
  margin: 10px;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-size: 12px;
}
.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
.modal-content{
      background-image: linear-gradient(
    to right,
    #e52d27 0%,
    #b31217 51%,
    #e52d27 100%
  );
}
</style>







