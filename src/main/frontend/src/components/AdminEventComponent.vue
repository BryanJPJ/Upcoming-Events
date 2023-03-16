<script setup>
import PopUpEditForm from './PopUpEditForm.vue';

let putEvent = defineProps({
  available: {
    type: Boolean,
    default: null,
  },
  date: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  id: {
    type: Number,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  max_users: {
    type: Number,
    default: null,
  },
  signed_users: {
    type: Number,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
});



async function deleteEvent(id) {


      fetch(`http://localhost:8080/api/events/${id}`, {
        method: 'DELETE'
      })
        .then(response => {
          console.log('Elemento eliminado con éxito');
          // Aquí puedes hacer algo con la respuesta del servidor, si lo necesitas
        })
        .catch(error => {
          console.log('Hubo un error al eliminar el elemento:', error);
          // Aquí puedes manejar el error de alguna manera, si lo necesitas
        });
        location.reload();
    }




async function submitForm(id){
 
  const response = await fetch(`http://localhost:8080/api/events/${id}`, {
    method: 'PUT',
    headers:{
      'Content-Type': 'aplication/json',
    },
    body: JSON.stringify(putEvent),
  })
  if(response.ok){
    alert("La solicitud fue exitosa")
  }else{
    alert("hubo un error")
  }
  location.reload();
}
</script>
<template>
  <div class="card mb" id="mainContainer">
    <div class="row g-0" id="childrenContainer">
      <div class="col-md" id="containerCheckbox-active">
        <div class="chekbox">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
        </div>
      </div>
      <div class="col-md" id="imgContainer">
        <img :src="image" alt="Cometcon Image" />
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <div class="d-flex" id="titleCard">
            <p class="card-title">{{ title }}</p>
            <p id="date">{{ date }}</p>
          </div>
          <p class="card-text">
            {{ description }}
          </p>
        </div>
      </div>
      <div class="col-sm-1" id="thirdColumn">
        <div class="card-body" id="btnmaxpeopleContainer">
          

            <button
    type="button"
    class="button"
    id="btnEdit"
    data-bs-toggle="modal"
    data-bs-target="#editForm"
  >
    Edit
  </button>

  <div
    class="modal fade"
    id="editForm"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">MODIFY EVENT</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" id="formBody">
          <form class="row g-3" @submit.prevent="submitForm">
            <div class="col-md-12">
              <label for="inputTitle" class="form-label"> Titulo </label>
              <input type="text" class="form-control" id="inputTitle" v-model="putEvent.title" />
            </div>

            <div class="col-12">
              <label for="inputDate" class="form-label">Date</label>
              <input type="text" class="form-control" id="inputDate" v-model="putEvent.date"/>
            </div>
            <div class="col-12">
              <label for="inputEntryMax" class="form-label">Max Entry</label>
              <input
                type="number"
                class="form-control"
                id="inputEntryMax"
                min="0"
                max="30"
                v-model="putEvent.max_users"
              />
            </div>
            <div class="col-md-12">
              <label for="inputDescription" class="form-label"
                >Description</label
              >
              <input type="text" class="form-control" id="inputDescription" v-model="putEvent.description"/>
            </div>
            <div class="col-md-12">
              <label for="inputImage" class="form-label">Image</label>
              <input type="text" class="form-control" id="inputImage" v-model="putEvent.image"/>
            </div>

            <div class="col-12 d-flex justify-content-center">
              <button type="submit" class="btn btn-success" id="ADDbutton">
                UPDATE
              </button>
            </div>
            <div class="col-12 d-flex justify-content-center">
              <div class="">
                <button type="reset" class="btn btn-warning">RESET</button>
              </div>
              <div class="">
                <button
                  type="button"
                  class="btn btn-danger ms-2"
                  data-bs-dismiss="modal"
                  @click="deleteEvent(id)"
                >
                  DELETE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    
  </div>


            
          </div>
          <div id="maxPeople">{{ signed_users }}/{{ max_users }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../assets/css/styleForm.css";
@import "../assets/css/eventComponent.css";
</style>
