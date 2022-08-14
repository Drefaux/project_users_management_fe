<template>
  <div>
    <div class="container bootstrap snippets bootdey">
      <div class="panel-body inf-content">
        <div class="row">
          <div class="col-md-4">
            <img
              alt=""
              style="width: 600px"
              title=""
              class="img-circle img-thumbnail isTooltip"
              :src="user.avatar"
              data-original-title="Usuario"
            />
          </div>
          <div class="col-md-6">
            <form>
              <div class="form-group row">
                <label for="inputFullName" class="col-sm-2 col-form-label"
                  >FullName</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="inputFullName"
                    placeholder="FullName"
                    v-model="user.full_name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputGender" class="col-sm-2 col-form-label"
                  >Gender</label
                >
                <div class="col-sm-10">
                  <b-form-select v-model="user.gender" class="mb-3">
                    <template #first>
                      <b-form-select-option :value="null" disabled
                        >-- Please select an option --</b-form-select-option
                      >
                    </template>
                    <b-form-select-option value="Male"
                      >Male</b-form-select-option
                    >
                    <b-form-select-option value="Female"
                      >Female</b-form-select-option
                    >
                  </b-form-select>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputStatus" class="col-sm-2 col-form-label"
                  >Status</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="inputStatus"
                    placeholder="Status"
                    v-model="user.status"
                  />
                </div>
              </div>
              <div>
                <b-button @click="handleUpdate" block variant="info"
                  >Update</b-button
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "user-edit",
  data() {
    return {
      user: { full_name: "", gender: "", status: "" },
      selected: "",
    };
  },
  created() {
    axios
      .get(`http://localhost:3000/api/users/${this.$route.params.id}`)
      .then((response) => {
        this.user = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    makeToastError(variant = null) {
        this.$bvToast.toast('Update Error !', {
          title: `Notification`,
          variant: variant,
          solid: true
        })
      },
    makeToast(variant = null) {
        this.$bvToast.toast('Update Successfully !', {
          title: `Notification`,
          variant: variant,
          solid: true
        })
      },
    handleUpdate() {
      const params = {
        full_name: this.user.full_name,
        gender: this.user.gender,
        status: this.user.status,
      };
      axios
        .put(
          `http://localhost:3000/api/users/${this.$route.params.id}`,
          params
        )

        .then((response) => {
          this.users = response.data;
          this.makeToast('success')
        })
        .catch((e) => {
          console.log(e)
          this.makeToastError('danger')
        });
    },
  },
};
</script>

<style>
.inf-content {
  border: 1px solid #dddddd;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);
}
</style>
