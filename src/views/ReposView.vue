<template>
    <div class="post">
        <div v-if="loading" class="loading">
            Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationvue">https://aka.ms/jspsintegrationvue</a> for more details.
        </div>

        <div class="repos">
            <h1>Repository List</h1>
        </div>

        <div v-if="post" class="content">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>CreatedDate</th>
                        <th>NumberOfBranches</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="repository in post" :key="repository.Name">
                        <td>{{ repository.name }}</td>
                        <td>{{ repository.language }}</td>
                        <td>{{ repository.createdDate }}</td>
                        <td>{{ repository.numberOfBranches }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="js">
    import { defineComponent } from 'vue';

    export default defineComponent({
        data() {
            return {
                loading: false,
                post: null
            };
        },
        created() {
            // fetch the data when the view is created and the data is
            // already being observed
            this.fetchData();
        },
        watch: {
            // call again the method if the route changes
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                this.post = null;
                this.loading = true;

                fetch('repositorydetail')
                    .then(r => r.json())
                    .then(json => {
                        this.post = json;
                        this.loading = false;
                        return;
                    });
            }
        },
    });
</script>