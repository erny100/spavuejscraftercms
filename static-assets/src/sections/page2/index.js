/**
 * Created by Ernesto  on 09/06/2017.
 */

(function(){
    var component = Vue.component('page2', function (resolve, reject) {
        Vue.http({url:'page2', method: 'GET'}).then(function (response) {
            resolve({
                template:_removeScriptTag_(response.data),
                data: function () {
                    return {
                        name:'page2'
                    }
                },
                created:function(){
                    console.log('created:',this.name);


                }
            })
        }, function (response) {
            // error callback
            console.error('ERROR_LOAD ');
        });

    });
    window.router.addRoutes([{ path: '/page2', component: component }])
})();


