<template>
  <div class="container" v-if="user">
   <div class="row">
    <div class="content">
        <form class="form">
            <select name="" id="">
                <option value="">ALL</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
            </select>
            <input type="text" name="search" placeholder="Search">
        </form>
        
        <div class="output">
            
        </div>
    </div>
    <div class="sidebar">
        <div class="phone-container">
            <div class="camera">
                <div class="cam"></div>
                <div class="speaker"></div>
            </div>
            <div class="screen">
               
  

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-body">
      <form @submit.prevent="addProduct">
            <input class="form-input" type="text" name="name" required v-model="name" placeholder="Name"/>
            <input class="form-input" type="text" name="descriptions" required v-model="descriptions" placeholder="Description:"/>
            <input class="form-input" type="text" name="image" required v-model="image"  placeholder="Image:" />
            <input class="form-input" type="text" name="category" required v-model="category" placeholder="Category"/>
            <input class="form-input" type="date" name="created_date" required v-model="created_date" placeholder="Created Date:"/>
            <input class="form-btn" type="submit" value="Add" />
      </form>
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
     </div>
   </div>
 </div>
</div>
     
            </div>
            <div class="button">
               <!-- Button trigger modal -->
  <button type="button" class="bttn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
</button>
            </div>
        </div>
    </div>
   </div>
  </div>
  
  <div v-else>
    <h1>Access Denied</h1>
  </div>
</template>

<script>
export default {
    computed: {
        user() {
    
    return  this.$store.state.user
}
    },
methods: {
    getData() {
        alert("function called")
    }
}
}
</script>

<style scoped>
.container{
    max-width: 100%;
    height: 92.5vh;
    margin-top: 10px;
}
.row{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-width: 100%;
    margin: 0;
}
.content{
    height: 90vh;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.sidebar{
    height: 90vh;
    width: 35%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form{
    background: lightslategray;
    border-radius: 10px;
    width: 70%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -20px;
    gap: 10px;
}
.output{
    box-shadow: 5px 5px 5px 5px;
    background: white;
    height: 90%;
    width: 90%;
    
}
i{
    color: black;
}
.phone-container{
    border: 1px solid black;
    border-radius: 30px;
    width: 70%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.camera{
    height: 10%;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.cam{
    border: 1px solid black;
    border-radius: 50px;
    height:10px;
    width: 10px;
}
.speaker{
    border: 1px solid black;
    border-radius: 10px;
    width: 50px;
    height: 10px;
}
.screen{
    height: 75%;
    width: 90%;
    border: 1px solid black;
    margin-bottom: 10px;
}
.button{
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bttn{
    border: 1px solid black;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
}
</style>