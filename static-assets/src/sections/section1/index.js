/**
 * Created by Ernesto  on 09/06/2017.
 */

(function(){
    var component = Vue.component('page1', function (resolve, reject) {
        Vue.http({url:'src/sections/page1/template.html', method: 'GET'}).then(function (response) {
            resolve({
                template: response.data,
                data: function () {
                    return {
                        name:'page1'
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
    window.router.addRoutes([{ path: '/page1', component: component }])
})();


