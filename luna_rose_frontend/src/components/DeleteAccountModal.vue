<template>
  <div class="modal fade" id="userDelete" tabindex="-1" aria-labelledby="UserDeleteLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="UserDeleteLabel">Delete Your Account</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure?
            </div>
            <div class="modal-footer">
                <button @click="deleteAccount" data-bs-dismiss="modal" class="btn btn-grad">Delete</button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    props:['id'],
    methods:{
        deleteAccount(){
            this.$store.dispatch('deleteAccount',this.id)
        }
    }
}
</script>
<style scoped>
.modal-content{
    background-image: linear-gradient(
    to right,
    #000040,
    #00004E
  );
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
</style>