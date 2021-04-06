/**
 * Created by Ernesto  on 09/06/2017.
 */

(function(){
    var component = Vue.component('section1', function (resolve, reject) {
        Vue.http({url:'src/sections/section1/template.html', method: 'GET'}).then(function (response) {
            resolve({
                template: response.data,
                data: function () {
                    return {
                        name:'section1'
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
    window.router.addRoutes([{ path: '/section1', component: component }])
})();


